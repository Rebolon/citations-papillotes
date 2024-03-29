export abstract class BasePaginatedComponent {
  protected currentPage!: number;
  protected itemsPerPage = 10;

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentPage(event: number): void {
    this.currentPage = event;
  }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  abstract setPaginatedList(ev: unknown[]): void;
}
