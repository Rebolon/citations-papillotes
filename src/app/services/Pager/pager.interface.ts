export interface PagerInterface {
  isCurrentPage(pageIndex: number): boolean;
  getOffset(): number;
  getOffsetForPage(page: number): number;
  getTotalPage(): number;
  getFirstPage(): number;
  getLastPage(): number;
  getCurrentPage(): number;
  getPreviousPage(): number;
  getNextPage(): number;
}

export interface PagerNavigationInterface {
  getPaginatedList(): Array<unknown>;
  goToPage(pageIndex: number): number;
  goToFirstPage(): number;
  goToPreviousPage(): number;
  goToNextPage(): number;
  goToLastPage(): number;
}

export interface PagerTemplateInterface {
  getPagerIndexList(): Array<number>;
  getPagerItemList(): PagerListPartsInterface;
}

export interface PagerListPartsInterface {
  getFirstEdges(): Array<PagerListInterface>;
  getLastEdges(): Array<PagerListInterface>;
  getNumbers(): Array<PagerListInterface>;
  getAll(): Array<PagerListInterface>;
}
export interface PagerListInterface {
  index: number;
  label: string;
}

export interface PagerOptionsInterface {
  itemPerPage?: number;
  maxPagerItem?: number;
  firstPage?: number;
}
