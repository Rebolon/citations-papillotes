"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["src_app_components_list-authors_list-authors_component_ts"],{

/***/ 7397:
/*!*******************************************************************!*\
  !*** ./src/app/components/list-authors/list-authors.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListAuthorsComponent: () => (/* binding */ ListAuthorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _tools_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/Device */ 3482);
/* harmony import */ var _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/BasePaginatedComponent */ 5259);
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pager/pager.component */ 7394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_Cites_Authors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Cites/Authors */ 9028);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);









function ListAuthorsComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/authors/", item_r1.getName(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r1.getName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", item_r1.getCount(), ")");
  }
}
const _c0 = function (a0, a1) {
  return {
    "font-semibold": a0,
    "font-normal": a1
  };
};
const _c1 = function (a0) {
  return {
    itemPerPage: a0
  };
};
class ListAuthorsComponent extends _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_1__.BasePaginatedComponent {
  constructor(authorService, title, device) {
    super();
    this.authorService = authorService;
    this.title = title;
    this.device = device;
    this.authors = [];
    this.paginatedAuthors = [];
    this.itemsPerPage = 11;
    this.sort = 'text';
    this.title.setTitle('Citations - Liste des auteurs');
    this.itemsPerPage = 11;
    if (device.isMobile()) {
      this.itemsPerPage = 8;
    }
  }
  ngOnInit() {
    this.sortByAlpha();
  }
  sortByAlpha() {
    this.sort = 'text';
    this.authorService.authors$.subscribe({
      next: next => {
        this.authors = next;
      },
      complete: () => {
        this.paginatedAuthors = this.authors.slice(0, this.itemsPerPage);
      }
    });
  }
  sortByCount() {
    this.sort = 'total';
    this.authorService.authors$.subscribe({
      next: next => {
        this.authors = next.sort((a, b) => {
          if (a.getCount() > b.getCount()) {
            return -1;
          }
          if (a.getCount() < b.getCount()) {
            return 1;
          }
          return 0;
        });
      },
      complete: () => {
        this.paginatedAuthors = this.authors.slice(0, this.itemsPerPage);
      }
    });
  }
  isSortByText() {
    return this.sort === 'text';
  }
  isSortByTotal() {
    return this.sort === 'total';
  }
  trackByAuthorName(index, author) {
    return author.getName();
  }
  setPaginatedList(ev) {
    this.paginatedAuthors = ev;
  }
}
ListAuthorsComponent.ɵfac = function ListAuthorsComponent_Factory(t) {
  return new (t || ListAuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_Cites_Authors__WEBPACK_IMPORTED_MODULE_3__.Authors), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_tools_Device__WEBPACK_IMPORTED_MODULE_0__.Device));
};
ListAuthorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ListAuthorsComponent,
  selectors: [["app-list-authors"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_tools_Device__WEBPACK_IMPORTED_MODULE_0__.Device]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 13,
  vars: 17,
  consts: [[1, "container", "mb-36"], [1, "text-3xl", "font-bold", "text-stone-900", "mb-2"], ["title", "Trier par nom", 1, "bg-gray-100", "text-violet-800", "text-xs", "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "mr-2", 3, "ngClass", "disabled", "click"], ["title", "Trier par total de citations", 1, "bg-gray-100", "text-violet-800", "text-xs", "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", 3, "ngClass", "disabled", "click"], [1, "list-none"], ["class", "p-1", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "container"], [1, "w-full"], ["id", "bottom-navigation", 1, "block", "fixed", "inset-x-0", "bottom-10", "z-10", "bg-white"], [3, "list", "options", "paginatedList$"], [1, "p-1"], [3, "routerLink"]],
  template: function ListAuthorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAuthorsComponent_Template_button_click_3_listener() {
        return ctx.sortByAlpha();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Trier par nom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAuthorsComponent_Template_button_click_5_listener() {
        return ctx.sortByCount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Trier par total ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ListAuthorsComponent_li_8_Template, 5, 3, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "section", 8)(12, "app-pager", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("paginatedList$", function ListAuthorsComponent_Template_app_pager_paginatedList__12_listener($event) {
        return ctx.setPaginatedList($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.authors == null ? null : ctx.authors.length, " Auteurs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](9, _c0, ctx.isSortByText() === true, ctx.isSortByText() === false))("disabled", ctx.isSortByText());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](12, _c0, ctx.isSortByTotal() === true, ctx.isSortByTotal() === false))("disabled", ctx.isSortByTotal());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.paginatedAuthors)("ngForTrackBy", ctx.trackByAuthorName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", ctx.authors)("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx.getItemsPerPage()));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__.PagerComponent],
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=src_app_components_list-authors_list-authors_component_ts.js.map