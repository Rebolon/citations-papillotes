export abstract class BasePaginatedComponent {
  protected currentPage: number;
  protected itemsPerPage = 10;

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentPage(event): void {
    this.currentPage = event;
  }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  abstract setPaginatedList(ev: any[]): void;
}
