import {
  BehaviorSubject,
  filter,
  map,
  ɵɵdefineInjectable
} from "./chunk-XICENEYU.js";

// src/app/tools/Device.ts
var Device = /* @__PURE__ */ (() => {
  const _Device = class _Device {
    isMobile() {
      return Object.keys(navigator).length ? navigator.userAgent.includes("Mobile") : false;
    }
    isDesktop() {
      return !this.isMobile();
    }
  };
  _Device.\u0275fac = function Device_Factory(t) {
    return new (t || _Device)();
  };
  _Device.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Device,
    factory: _Device.\u0275fac
  });
  let Device2 = _Device;
  return Device2;
})();

// src/app/services/Pager/pager-list-parts.ts
var PagerListParts = class {
  constructor(pager) {
    this.pager = [];
    this.pagerFirstEdges = [];
    this.pagerLastEdges = [];
    this.pagerNumbers = [];
    this.pager = pager;
    this.pagerFirstEdges = this.pager.filter((value, index) => {
      return index < 2;
    });
    this.pagerLastEdges = this.pager.slice().reverse().filter((value, index) => {
      return index < 2;
    }).reverse();
    this.pagerNumbers = this.pager.filter((value, index) => {
      return !this.pagerFirstEdges.includes(value) && !this.pagerLastEdges.includes(value);
    });
  }
  getAll() {
    return this.pager;
  }
  getFirstEdges() {
    return this.pagerFirstEdges;
  }
  getLastEdges() {
    return this.pagerLastEdges;
  }
  getNumbers() {
    return this.pagerNumbers;
  }
};

// src/app/services/Pager/pager.service.ts
var TotalPageNotSet = class extends Error {
};
var FirstPageNotSet = class extends Error {
};
var LastPageNotSet = class extends Error {
};
var CurrentPageNotSet = class extends Error {
};
var PageRequestedIsLessThanFirstPage = class extends Error {
};
var PageIndexDoesNotExists = class extends Error {
};
var PagerService = /* @__PURE__ */ (() => {
  const _PagerService = class _PagerService {
    constructor() {
      this.originalList = [];
      this.itemPerPage = 5;
      this.maxPagerItem = 5;
      this.firstPage = 1;
      this.totalPage = 1;
      this.lastPage = 1;
      this.previousPage = 1;
      this.nextPage = 1;
      this.currentPage = new BehaviorSubject(1);
      this.pagerIndexList = [];
      this.pagerItemList = {};
      this.currentPage$ = this.currentPage.asObservable().pipe(filter((value) => !!value));
      this.currentOffset$ = this.currentPage.asObservable().pipe(filter((value) => !!value), map((value) => {
        return this.getOffsetForPage(value);
      }));
    }
    init(list, options) {
      if (typeof list !== "object") {
        this.originalList = new Array(list).fill(0);
      } else {
        this.originalList = list;
      }
      this.setOptions(options).resetPage().setTotalPage(list).calculateLastPage().calculateCurrentPage().calculatePreviousPage().calculateNextPage().createIndexList().buildPagerList();
    }
    isCurrentPage(pageIndex) {
      return this.currentPage.getValue() === pageIndex;
    }
    getOffset() {
      return this.getOffsetForPage(this.getCurrentPage());
    }
    getOffsetForPage(page) {
      if (page < this.firstPage) {
        throw new PageRequestedIsLessThanFirstPage();
      }
      if (page === this.firstPage) {
        return 0;
      }
      return (page - 1) * this.itemPerPage;
    }
    getTotalPage() {
      return this.totalPage;
    }
    getFirstPage() {
      return this.firstPage;
    }
    getLastPage() {
      return this.lastPage;
    }
    getCurrentPage() {
      return this.currentPage.getValue();
    }
    getPreviousPage() {
      return this.previousPage;
    }
    getNextPage() {
      return this.nextPage;
    }
    getPaginatedList() {
      const startOffset = this.getOffset();
      const endOffset = startOffset + this.itemPerPage;
      return this.originalList.slice(startOffset, endOffset);
    }
    goToPage(pageIndex) {
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
    goToFirstPage() {
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
    goToLastPage() {
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
    goToNextPage() {
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
    goToPreviousPage() {
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
    getPagerIndexList() {
      return this.pagerIndexList;
    }
    getPagerItemList() {
      return this.pagerItemList;
    }
    setOptions(options) {
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
    setTotalPage(list) {
      let count = typeof list === "object" ? list.length : list;
      this.totalPage = Math.ceil(count / this.itemPerPage);
      return this;
    }
    setFirstPage(firstPage) {
      this.firstPage = firstPage >= 0 ? firstPage : this.firstPage;
      return this;
    }
    resetPage() {
      this.currentPage.next(this.firstPage);
      return this;
    }
    calculateLastPage() {
      if (this.totalPage === null) {
        throw new TotalPageNotSet();
      }
      if (this.firstPage === null) {
        throw new FirstPageNotSet();
      }
      this.lastPage = this.totalPage - 1 + this.firstPage;
      return this;
    }
    calculateCurrentPage() {
      if (this.lastPage === null) {
        throw new LastPageNotSet();
      }
      if (this.firstPage === null) {
        throw new FirstPageNotSet();
      }
      const currentPage = this.getCurrentPage();
      this.currentPage.next(this.currentPage.getValue() < this.firstPage ? this.firstPage : currentPage > this.lastPage ? this.lastPage : currentPage);
      return this;
    }
    calculatePreviousPage() {
      if (this.currentPage === null) {
        throw new CurrentPageNotSet();
      }
      if (this.firstPage === null) {
        throw new FirstPageNotSet();
      }
      const previousPage = this.currentPage.getValue() - 1;
      this.previousPage = previousPage >= this.firstPage ? previousPage : this.firstPage;
      return this;
    }
    /**
     * @todo _nextPage depends on curPage and lastPage => there must be events to modify this property when one of those are modified
     */
    calculateNextPage() {
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
    createIndexList() {
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
        startOffset = nbItemPerPageFromEnd <= this.firstPage ? this.firstPage : nbItemPerPageFromEnd;
      } else {
        startOffset = this.currentPage.getValue() - nbItemOnSide;
      }
      const nbItemPerPageFromStart = startOffset + (this.maxPagerItem - 1);
      const endOffset = nbItemPerPageFromStart > this.lastPage ? this.lastPage : nbItemPerPageFromStart;
      this.pagerIndexList = [];
      for (let i = startOffset; i <= endOffset; i++) {
        this.pagerIndexList.push(i);
      }
      return this;
    }
    buildPagerList() {
      let pager = [];
      if (this.pagerIndexList.length) {
        this.pagerIndexList.forEach((item) => {
          pager.push({
            index: item,
            label: item.toString()
          });
        });
        pager = pager.filter((item, index) => {
          return index < this.maxPagerItem;
        });
      }
      pager.unshift({
        index: this.getPreviousPage(),
        label: "<"
      });
      pager.unshift({
        index: this.getFirstPage(),
        label: "<<"
      });
      pager.push({
        index: this.getNextPage(),
        label: ">"
      });
      pager.push({
        index: this.getLastPage(),
        label: ">>"
      });
      this.pagerItemList = new PagerListParts(pager);
      return this.pagerItemList;
    }
  };
  _PagerService.\u0275fac = function PagerService_Factory(t) {
    return new (t || _PagerService)();
  };
  _PagerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PagerService,
    factory: _PagerService.\u0275fac,
    providedIn: "root"
  });
  let PagerService2 = _PagerService;
  return PagerService2;
})();

export {
  PagerService,
  Device
};
//# sourceMappingURL=chunk-WNDRTAC7.js.map
