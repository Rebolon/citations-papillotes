import { PagerListInterface, PagerListPartsInterface } from './pager.interface';

export class PagerListParts implements PagerListPartsInterface {
  private pager: Array<PagerListInterface> = [];
  private pagerFirstEdges: Array<PagerListInterface> = [];
  private pagerLastEdges: Array<PagerListInterface> = [];
  private pagerNumbers: Array<PagerListInterface> = [];

  constructor(pager: Array<PagerListInterface>) {
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

    this.pagerNumbers = this.pager.filter((value, index) => {
      return (
        !this.pagerFirstEdges.includes(value) &&
        !this.pagerLastEdges.includes(value)
      );
    });
  }

  getAll(): Array<PagerListInterface> {
    return this.pager;
  }

  getFirstEdges(): Array<PagerListInterface> {
    return this.pagerFirstEdges;
  }

  getLastEdges(): Array<PagerListInterface> {
    return this.pagerLastEdges;
  }

  getNumbers(): Array<PagerListInterface> {
    return this.pagerNumbers;
  }
}
