import { Injectable } from "@angular/core";
import {
  PagerInterface,
  PagerItemInterface,
  PagerDisplayedItemsInterface,
  PagerNavigationInterface,
  PagerOptionsInterface,
  PagerTemplateInterface,
} from "./pager.interface";
import { PagerListParts } from "./pager-list-parts";
import { BehaviorSubject, filter, map } from "rxjs";

export class TotalPageNotSet extends Error {}
export class FirstPageNotSet extends Error {}
export class LastPageNotSet extends Error {}
export class CurrentPageNotSet extends Error {}
export class PageRequestedIsLessThanFirstPage extends Error {}
export class PagerAlreadyInitialized extends Error {}
export class PageIndexDoesNotExists extends Error {}

@Injectable({
  providedIn: "root",
})
export class PagerService
  implements PagerInterface, PagerNavigationInterface, PagerTemplateInterface
{
  private originalList: unknown[] | number[] = [];
  private itemPerPage = 5;
  private maxPagerItem = 5;
  private firstPage = 1;
  private totalPage = 1;
  private lastPage = 1;
  private previousPage = 1;
  private nextPage = 1;
  private currentPage = new BehaviorSubject(1);
  private pagerIndexList: Array<number> = [];
  private pagerItemList: PagerDisplayedItemsInterface =
    {} as PagerDisplayedItemsInterface;
  public currentPage$ = this.currentPage
    .asObservable()
    .pipe(filter((value) => !!value));
  public currentOffset$ = this.currentPage.asObservable().pipe(
    filter((value) => !!value),
    map((value) => {
      return this.getOffsetForPage(value);
    }),
  );

  init(list: Array<unknown> | number, options?: PagerOptionsInterface): void {
    /** Seems to be a source of bug : authors page, swith between alpha and total fails because of this
    if (this.pagerIndexList.length) {
      return
    }*/

    if (typeof list !== "object") {
      this.originalList = new Array(list).fill(0);
    } else {
      this.originalList = list;
    }

    this.setOptions(options)
      .resetPage()
      .setTotalPage(list)
      .calculateLastPage()
      .calculateCurrentPage()
      .calculatePreviousPage()
      .calculateNextPage()
      .createIndexList()
      .buildPagerList();
  }

  isCurrentPage(pageIndex: number): boolean {
    return this.currentPage.getValue() === pageIndex;
  }

  getOffset(): number {
    return this.getOffsetForPage(this.getCurrentPage());
  }

  getOffsetForPage(page: number): number {
    if (page < this.firstPage) {
      throw new PageRequestedIsLessThanFirstPage();
    }

    if (page === this.firstPage) {
      return 0;
    }

    return (page - 1) * this.itemPerPage;
  }

  getTotalPage(): number {
    return this.totalPage;
  }

  getFirstPage(): number {
    return this.firstPage;
  }

  getLastPage(): number {
    return this.lastPage;
  }

  getCurrentPage(): number {
    return this.currentPage.getValue();
  }

  getPreviousPage(): number {
    return this.previousPage;
  }

  getNextPage(): number {
    return this.nextPage;
  }

  getPaginatedList(): Array<unknown> {
    const startOffset = this.getOffset();
    const endOffset = startOffset + this.itemPerPage;

    return this.originalList.slice(startOffset, endOffset);
  }

  goToPage(pageIndex: number): number {
    if (this.getCurrentPage() === pageIndex) {
      return this.getCurrentPage();
    }

    if (this.pagerIndexList.includes(pageIndex)) {
      this.currentPage.next(pageIndex);
      this.calculatePreviousPage();
      this.calculateNextPage();
      this.createIndexList();
      this.buildPagerList();
    } else {
      throw new PageIndexDoesNotExists();
    }

    return this.currentPage.getValue();
  }

  goToFirstPage(): number {
    if (this.currentPage.getValue() === this.firstPage) {
      return this.currentPage.getValue();
    }

    this.currentPage.next(this.firstPage);
    this.previousPage = this.firstPage;
    this.calculateNextPage();
    this.createIndexList();
    this.buildPagerList();

    return this.currentPage.getValue();
  }

  goToLastPage(): number {
    if (this.currentPage.getValue() === this.lastPage) {
      return this.currentPage.getValue();
    }

    this.currentPage.next(this.lastPage);
    this.nextPage = this.lastPage;
    this.calculatePreviousPage();
    this.createIndexList();
    this.buildPagerList();

    return this.currentPage.getValue();
  }

  goToNextPage(): number {
    if (this.currentPage.getValue() === this.nextPage) {
      return this.currentPage.getValue();
    }

    this.previousPage = this.currentPage.getValue();
    this.currentPage.next(this.nextPage);
    this.calculateNextPage();
    this.createIndexList();
    this.buildPagerList();

    return this.currentPage.getValue();
  }

  goToPreviousPage(): number {
    if (this.currentPage.getValue() === this.previousPage) {
      return this.currentPage.getValue();
    }

    this.nextPage = this.currentPage.getValue();
    this.currentPage.next(this.previousPage);
    this.calculatePreviousPage();
    this.createIndexList();
    this.buildPagerList();

    return this.currentPage.getValue();
  }

  getPagerIndexList(): Array<number> {
    return this.pagerIndexList;
  }

  getPagerItemList(): PagerDisplayedItemsInterface {
    return this.pagerItemList;
  }

  private setOptions(options?: PagerOptionsInterface): PagerService {
    if (!options) {
      return this;
    }

    if (typeof options.itemPerPage !== "undefined") {
      this.itemPerPage = options.itemPerPage;
    }

    if (typeof options.maxPagerItem !== "undefined") {
      this.maxPagerItem = options.maxPagerItem;
    }

    return this;
  }

  private setTotalPage(list: Array<unknown> | number): PagerService {
    const count = typeof list === "object" ? list.length : list;
    this.totalPage = Math.ceil(count / this.itemPerPage);

    return this;
  }

  private setFirstPage(firstPage: number): PagerService {
    this.firstPage = firstPage >= 0 ? firstPage : this.firstPage;

    return this;
  }

  private resetPage(): PagerService {
    this.currentPage.next(this.firstPage);

    return this;
  }

  private calculateLastPage(): PagerService {
    if (this.totalPage === null) {
      throw new TotalPageNotSet();
    }

    if (this.firstPage === null) {
      throw new FirstPageNotSet();
    }

    this.lastPage = this.totalPage - 1 + this.firstPage;

    return this;
  }

  private calculateCurrentPage(): PagerService {
    if (this.lastPage === null) {
      throw new LastPageNotSet();
    }

    if (this.firstPage === null) {
      throw new FirstPageNotSet();
    }

    const currentPage = this.getCurrentPage();

    this.currentPage.next(
      this.currentPage.getValue() < this.firstPage
        ? this.firstPage
        : currentPage > this.lastPage
          ? this.lastPage
          : currentPage,
    );

    return this;
  }

  private calculatePreviousPage(): PagerService {
    if (this.currentPage === null) {
      throw new CurrentPageNotSet();
    }
    if (this.firstPage === null) {
      throw new FirstPageNotSet();
    }

    const previousPage = this.currentPage.getValue() - 1;
    this.previousPage =
      previousPage >= this.firstPage ? previousPage : this.firstPage;

    return this;
  }

  /**
   * @todo _nextPage depends on curPage and lastPage => there must be events to modify this property when one of those are modified
   */
  private calculateNextPage(): PagerService {
    if (this.lastPage === null) {
      throw new LastPageNotSet();
    }
    if (this.currentPage === null) {
      throw new CurrentPageNotSet();
    }

    const nextPage = this.currentPage.getValue() + 1;
    this.nextPage = nextPage <= this.lastPage ? nextPage : this.lastPage;

    return this;
  }

  private createIndexList(): PagerService {
    if (this.lastPage === null) {
      throw new LastPageNotSet();
    }

    if (this.currentPage === null) {
      throw new CurrentPageNotSet();
    }

    if (this.totalPage === null) {
      throw new TotalPageNotSet();
    }

    if (this.firstPage === null) {
      throw new FirstPageNotSet();
    }

    const nbItemOnSide = Math.floor(this.maxPagerItem / 2);
    const nbItemPerPageFromEnd = this.lastPage - this.maxPagerItem + 1;
    let startOffset;

    if (this.currentPage.getValue() <= nbItemOnSide) {
      startOffset = this.firstPage;
    } else if (this.lastPage - this.currentPage.getValue() <= nbItemOnSide) {
      startOffset =
        nbItemPerPageFromEnd <= this.firstPage
          ? this.firstPage
          : nbItemPerPageFromEnd;
    } else {
      startOffset = this.currentPage.getValue() - nbItemOnSide;
    }

    const nbItemPerPageFromStart = startOffset + (this.maxPagerItem - 1);
    const endOffset =
      nbItemPerPageFromStart > this.lastPage
        ? this.lastPage
        : nbItemPerPageFromStart;

    this.pagerIndexList = [];
    for (let i = startOffset; i <= endOffset; i++) {
      this.pagerIndexList.push(i);
    }

    return this;
  }

  private buildPagerList(): PagerDisplayedItemsInterface {
    let pager: Array<PagerItemInterface> = [];

    if (this.pagerIndexList.length) {
      this.pagerIndexList.forEach((item) => {
        pager.push({
          index: item,
          label: item.toString(),
        });
      });

      pager = pager.filter((item, index) => {
        return index < this.maxPagerItem;
      });
    }

    pager.unshift({
      index: this.getPreviousPage(),
      label: "<",
    });

    pager.unshift({
      index: this.getFirstPage(),
      label: "<<",
    });

    pager.push({
      index: this.getNextPage(),
      label: ">",
    });
    pager.push({
      index: this.getLastPage(),
      label: ">>",
    });

    this.pagerItemList = new PagerListParts(pager);

    return this.pagerItemList;
  }
}
