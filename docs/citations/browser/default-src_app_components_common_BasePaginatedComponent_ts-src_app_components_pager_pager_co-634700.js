"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["default-src_app_components_common_BasePaginatedComponent_ts-src_app_components_pager_pager_co-634700"],{

/***/ 5259:
/*!*************************************************************!*\
  !*** ./src/app/components/common/BasePaginatedComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasePaginatedComponent: () => (/* binding */ BasePaginatedComponent)
/* harmony export */ });
class BasePaginatedComponent {
  constructor() {
    this.itemsPerPage = 10;
  }
  getCurrentPage() {
    return this.currentPage;
  }
  setCurrentPage(event) {
    this.currentPage = event;
  }
  getItemsPerPage() {
    return this.itemsPerPage;
  }
}

/***/ }),

/***/ 7394:
/*!*****************************************************!*\
  !*** ./src/app/components/pager/pager.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagerComponent: () => (/* binding */ PagerComponent)
/* harmony export */ });
/* harmony import */ var _services_Pager_pager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Pager/pager.service */ 3111);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);





const _c0 = function (a0) {
  return {
    current: a0
  };
};
function PagerComponent_ul_1_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_ul_1_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.pager.goToPage(item_r2.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.isCurrentPage(item_r2.index)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.label);
  }
}
const _c1 = function (a0) {
  return {
    disabled: a0
  };
};
function PagerComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1)(1, "li", 2)(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_ul_1_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.pager.goToFirstPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2)(6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_ul_1_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.pager.goToPreviousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PagerComponent_ul_1_li_9_Template, 4, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 2)(11, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_ul_1_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.pager.goToNextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 2)(15, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_ul_1_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.pager.goToLastPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r0.previousIsDisabled()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pager.getPagerItemList().getFirstEdges()[0].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.previousIsDisabled()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pager.getPagerItemList().getFirstEdges()[1].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.getPagerItemList().getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx_r0.nextIsDisabled()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pager.getPagerItemList().getLastEdges()[0].label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx_r0.nextIsDisabled()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pager.getPagerItemList().getLastEdges()[1].label);
  }
}
class PagerComponent {
  constructor(pager) {
    this.pager = pager;
    this.list = 0;
    this.paginatedList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.pager.getPaginatedList());
    this.paginatedList$ = this.paginatedList.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(value => !!value));
  }
  // do i need ngOnInit, or ngOnChanges is enough ?
  ngOnInit() {
    this.pager.init(this.list, this.options);
    this.pager.currentOffset$.subscribe(value => {
      this.paginatedList.next(this.pager.getPaginatedList());
    });
  }
  ngOnChanges(changes) {
    if (!changes.list) {
      return;
    }
    if (changes.list.isFirstChange()) {
      return;
    }
    this.pager.init(changes.list.currentValue, this.options);
  }
  previousIsDisabled() {
    return this.pager.getCurrentPage() === this.pager.getPreviousPage();
  }
  nextIsDisabled() {
    return this.pager.getCurrentPage() === this.pager.getNextPage();
  }
  isCurrentPage(index) {
    return this.pager.isCurrentPage(index);
  }
  hasList() {
    if (typeof this.list === 'object') {
      return this.pager.getTotalPage() > 1;
    }
    return false;
  }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) {
  return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_Pager_pager_service__WEBPACK_IMPORTED_MODULE_0__.PagerService));
};
PagerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PagerComponent,
  selectors: [["app-pager"]],
  inputs: {
    list: "list",
    options: "options"
  },
  outputs: {
    paginatedList$: "paginatedList$"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_Pager_pager_service__WEBPACK_IMPORTED_MODULE_0__.PagerService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [["class", "ng-pager nav", "aria-label", "Pagination", 4, "ngIf"], ["aria-label", "Pagination", 1, "ng-pager", "nav"], [1, "w-12"], [3, "ngClass", "click"], ["class", "w-12", 4, "ngFor", "ngForOf"]],
  template: function PagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PagerComponent_ul_1_Template, 18, 17, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasList());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor],
  styles: [".ng-pager[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 1rem;\n}\n\n.ng-pager[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nul.ng-pager[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 10px;\n  list-style: none;\n  width: 40px;\n}\n\n.ng-pager[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.ng-pager[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.current[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.ng-pager[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  background: #2199e8;\n  color: #fefefe;\n  cursor: default;\n}\n\n.ng-pager[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  color: #cacaca;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlci9wYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXBhZ2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5uZy1wYWdlciA+IG9sLCB1bCwgbWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwubmctcGFnZXIgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ubmctcGFnZXIgPiBsaSA+IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZy1wYWdlciA+IGxpID4gYS5jdXJyZW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uZy1wYWdlciAuY3VycmVudCB7XG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcbiAgYmFja2dyb3VuZDogIzIxOTllODtcbiAgY29sb3I6ICNmZWZlZmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm5nLXBhZ2VyIC5kaXNhYmxlZCB7XG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcbiAgY29sb3I6ICNjYWNhY2E7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 1517:
/*!****************************************************!*\
  !*** ./src/app/services/Pager/pager-list-parts.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagerListParts: () => (/* binding */ PagerListParts)
/* harmony export */ });
class PagerListParts {
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
}

/***/ }),

/***/ 3111:
/*!*************************************************!*\
  !*** ./src/app/services/Pager/pager.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentPageNotSet: () => (/* binding */ CurrentPageNotSet),
/* harmony export */   FirstPageNotSet: () => (/* binding */ FirstPageNotSet),
/* harmony export */   LastPageNotSet: () => (/* binding */ LastPageNotSet),
/* harmony export */   PageIndexDoesNotExists: () => (/* binding */ PageIndexDoesNotExists),
/* harmony export */   PageRequestedIsLessThanFirstPage: () => (/* binding */ PageRequestedIsLessThanFirstPage),
/* harmony export */   PagerAlreadyInitialized: () => (/* binding */ PagerAlreadyInitialized),
/* harmony export */   PagerService: () => (/* binding */ PagerService),
/* harmony export */   TotalPageNotSet: () => (/* binding */ TotalPageNotSet)
/* harmony export */ });
/* harmony import */ var _pager_list_parts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager-list-parts */ 1517);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);



class TotalPageNotSet extends Error {}
class FirstPageNotSet extends Error {}
class LastPageNotSet extends Error {}
class CurrentPageNotSet extends Error {}
class PageRequestedIsLessThanFirstPage extends Error {}
class PagerAlreadyInitialized extends Error {}
class PageIndexDoesNotExists extends Error {}
class PagerService {
  constructor() {
    this.originalList = [];
    this.itemPerPage = 5;
    this.maxPagerItem = 5;
    this.firstPage = 1;
    this.totalPage = 1;
    this.lastPage = 1;
    this.previousPage = 1;
    this.nextPage = 1;
    this.currentPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(1);
    this.pagerIndexList = [];
    this.pagerItemList = {};
    this.currentPage$ = this.currentPage.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(value => !!value));
    this.currentOffset$ = this.currentPage.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(value => !!value), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
      return this.getOffsetForPage(value);
    }));
  }
  init(list, options) {
    /** Seems to be a source of bug : authors page, swith between alpha and total fails because of this
    if (this.pagerIndexList.length) {
      return
    }*/
    if (typeof list !== 'object') {
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
    if (typeof options.itemPerPage !== 'undefined') {
      this.itemPerPage = options.itemPerPage;
    }
    if (typeof options.maxPagerItem !== 'undefined') {
      this.maxPagerItem = options.maxPagerItem;
    }
    return this;
  }
  setTotalPage(list) {
    let count = typeof list === 'object' ? list.length : list;
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
      this.pagerIndexList.forEach(item => {
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
      label: '<'
    });
    pager.unshift({
      index: this.getFirstPage(),
      label: '<<'
    });
    pager.push({
      index: this.getNextPage(),
      label: '>'
    });
    pager.push({
      index: this.getLastPage(),
      label: '>>'
    });
    this.pagerItemList = new _pager_list_parts__WEBPACK_IMPORTED_MODULE_0__.PagerListParts(pager);
    return this.pagerItemList;
  }
}
PagerService.ɵfac = function PagerService_Factory(t) {
  return new (t || PagerService)();
};
PagerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PagerService,
  factory: PagerService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3482:
/*!*********************************!*\
  !*** ./src/app/tools/Device.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Device: () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class Device {
  isMobile() {
    // This check is for prerender prevent errors
    return Object.keys(navigator).length ? navigator.userAgent.includes('Mobile') : false;
  }
  isDesktop() {
    return !this.isMobile();
  }
}
Device.ɵfac = function Device_Factory(t) {
  return new (t || Device)();
};
Device.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Device,
  factory: Device.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=default-src_app_components_common_BasePaginatedComponent_ts-src_app_components_pager_pager_co-634700.js.map