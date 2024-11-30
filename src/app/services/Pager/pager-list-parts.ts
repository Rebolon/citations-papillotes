import {
  PagerItemInterface,
  PagerDisplayedItemsInterface,
} from "./pager.interface";

export class PagerListParts implements PagerDisplayedItemsInterface {
  private pager: Array<PagerItemInterface> = [];
  private pagerFirstEdges: Array<PagerItemInterface> = [];
  private pagerLastEdges: Array<PagerItemInterface> = [];
  private pagerNumbers: Array<PagerItemInterface> = [];

  constructor(pager: Array<PagerItemInterface>) {
    this.pager = pager;
    this.pagerFirstEdges = this.pager.filter((value, index) => {
      return index < 2;
    });

    this.pagerLastEdges = this.pager
      .slice()
      .reverse()
      .filter((value, index) => {
        return index < 2;
      })
      .reverse();

    this.pagerNumbers = this.pager.filter((value) => {
      return (
        !this.pagerFirstEdges.includes(value) &&
        !this.pagerLastEdges.includes(value)
      );
    });
  }

  getAll(): Array<PagerItemInterface> {
    return this.pager;
  }

  getFirstEdges(): Array<PagerItemInterface> {
    return this.pagerFirstEdges;
  }

  getLastEdges(): Array<PagerItemInterface> {
    return this.pagerLastEdges;
  }

  getNumbers(): Array<PagerItemInterface> {
    return this.pagerNumbers;
  }
}
