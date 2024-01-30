import { TestBed } from '@angular/core/testing';

import { PageIndexDoesNotExists, PagerService } from './pager.service';

describe('PagerService', () => {
  let service: PagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init Pager with number', () => {
    const tested = new PagerService();
    tested.init(150);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(2);
    expect(tested.getPreviousPage()).toEqual(1);
    expect(tested.getOffset()).toEqual(0);
  });

  it('should init Pager with array', () => {
    const tested = new PagerService();
    let list = [];
    for (let i = 0; i < 150; i++) {
      list.push(1);
    }
    tested.init(list);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(2);
    expect(tested.getPreviousPage()).toEqual(1);
    expect(tested.getOffset()).toEqual(0);
  });

  it('should define pager item list', () => {
    const tested = new PagerService();
    let list = [];
    for (let i = 0; i < 150; i++) {
      list.push(1);
    }
    tested.init(list);

    expect(tested.getPagerItemList().getAll().length).toEqual(9);
    expect(tested.getPagerItemList().getAll()[0].index).toEqual(1);
    expect(tested.getPagerItemList().getAll()[0].label).toEqual('<<');
    expect(tested.getPagerItemList().getAll()[1].index).toEqual(1);
    expect(tested.getPagerItemList().getAll()[1].label).toEqual('<');
    expect(tested.getPagerItemList().getAll()[7].index).toEqual(2);
    expect(tested.getPagerItemList().getAll()[7].label).toEqual('>');
    expect(tested.getPagerItemList().getAll()[8].index).toEqual(30);
    expect(tested.getPagerItemList().getAll()[8].label).toEqual('>>');
  });

  it('should manage options', () => {
    const tested = new PagerService();
    tested.init(150, { itemPerPage: 10, firstPage: 1, maxPagerItem: 10 });
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(15);
    expect(tested.getPagerItemList().getAll().length).toEqual(14);
  });

  it('should navigate to next page or previous', () => {
    const tested = new PagerService();
    tested.init(150);
    tested.goToNextPage();

    expect(tested.currentPage()).toEqual(2);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(3);
    expect(tested.getPreviousPage()).toEqual(1);
    expect(tested.getOffset()).toEqual(5);

    tested.goToNextPage();

    expect(tested.currentPage()).toEqual(3);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(4);
    expect(tested.getPreviousPage()).toEqual(2);
    expect(tested.getOffset()).toEqual(10);

    tested.goToPreviousPage();

    expect(tested.currentPage()).toEqual(2);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(3);
    expect(tested.getPreviousPage()).toEqual(1);
    expect(tested.getOffset()).toEqual(5);
  });

  it('should navigate to last page or first', () => {
    const tested = new PagerService();
    tested.init(150);
    tested.goToLastPage();

    expect(tested.currentPage()).toEqual(30);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(30);
    expect(tested.getPreviousPage()).toEqual(29);
    expect(tested.getOffset()).toEqual(145);

    tested.goToFirstPage();

    expect(tested.currentPage()).toEqual(1);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(2);
    expect(tested.getPreviousPage()).toEqual(1);
    expect(tested.getOffset()).toEqual(0);
  });

  it('should not be able to navigate out of first or last', () => {
    const tested = new PagerService();
    tested.init(150);
    tested.goToLastPage();
    tested.goToNextPage();

    expect(tested.currentPage()).toEqual(30);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(30);
    expect(tested.getPreviousPage()).toEqual(29);
    expect(tested.getOffset()).toEqual(145);

    tested.goToFirstPage();
    tested.goToPreviousPage();

    expect(tested.currentPage()).toEqual(1);
    expect(tested.getFirstPage()).toEqual(1);
    expect(tested.getLastPage()).toEqual(30);
    expect(tested.getNextPage()).toEqual(2);
    expect(tested.getPreviousPage()).toEqual(1);
    expect(tested.getOffset()).toEqual(0);
  });

  it('should navigte to specific page', () => {
    const tested = new PagerService();
    tested.init(150);
    tested.goToPage(5);

    expect(tested.currentPage()).toEqual(5);
    expect(tested.getNextPage()).toEqual(6);
    expect(tested.getPreviousPage()).toEqual(4);
    expect(tested.getOffset()).toEqual(20);

    expect(function () {
      tested.goToPage(500);
    }).toThrow(new PageIndexDoesNotExists());
  });

  it('should get right offset page', () => {
    const tested = new PagerService();
    tested.init(150);

    expect(tested.getOffsetForPage(1)).toEqual(0);
    expect(tested.getOffsetForPage(2)).toEqual(5);
    expect(tested.getOffsetForPage(3)).toEqual(10);
  });
});
