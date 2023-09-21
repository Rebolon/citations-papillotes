"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["src_app_components_list-cites-by-authors_list-cites-by-authors_component_ts"],{

/***/ 1006:
/*!*************************************************************************************!*\
  !*** ./src/app/components/list-cites-by-authors/list-cites-by-authors.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListCitesByAuthorsComponent: () => (/* binding */ ListCitesByAuthorsComponent)
/* harmony export */ });
/* harmony import */ var _tools_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/Device */ 3482);
/* harmony import */ var _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/BasePaginatedComponent */ 5259);
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pager/pager.component */ 7394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_Cites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Cites */ 8073);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);








function ListCitesByAuthorsComponent_h1_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Aucune citation de \"", ctx_r2.author, "\"\u00A0");
  }
}
function ListCitesByAuthorsComponent_h1_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r3.cites.length, " citation de \"", ctx_r3.author, "\":\u00A0");
  }
}
function ListCitesByAuthorsComponent_h1_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r4.cites.length, " citations de \"", ctx_r4.author, "\":\u00A0");
  }
}
function ListCitesByAuthorsComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListCitesByAuthorsComponent_h1_1_ng_template_1_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ListCitesByAuthorsComponent_h1_1_ng_template_2_Template, 1, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ListCitesByAuthorsComponent_h1_1_ng_template_3_Template, 1, 2, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngPlural", ctx_r0.cites.length);
  }
}
function ListCitesByAuthorsComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 12)(1, "cite");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u201D", item_r5.getCite(), "\u201D");
  }
}
const _c0 = function (a0) {
  return {
    itemPerPage: a0
  };
};
class ListCitesByAuthorsComponent extends _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_1__.BasePaginatedComponent {
  constructor(citeService, title, device) {
    super();
    this.citeService = citeService;
    this.title = title;
    this.device = device;
    this.cites = [];
    this.paginatedCites = [];
    this.title.setTitle('Citations - Liste des citations');
    this.itemsPerPage = 10;
    if (device.isMobile()) {
      this.itemsPerPage = 4;
    }
  }
  ngOnInit() {
    this.citeService.searchByAuthor(this.author).subscribe(cites => this.fillCites(cites));
  }
  fillCites(citesList) {
    this.cites = [];
    this.paginatedCites = [];
    citesList.forEach((cite, index) => {
      this.cites.push(cite);
    });
    this.paginatedCites = this.cites.slice(0, this.itemsPerPage);
  }
  trackByCiteId(index, cite) {
    return cite.getId();
  }
  setPaginatedList(ev) {
    this.paginatedCites = ev;
  }
}
ListCitesByAuthorsComponent.ɵfac = function ListCitesByAuthorsComponent_Factory(t) {
  return new (t || ListCitesByAuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_Cites__WEBPACK_IMPORTED_MODULE_3__.Cites), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_tools_Device__WEBPACK_IMPORTED_MODULE_0__.Device));
};
ListCitesByAuthorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ListCitesByAuthorsComponent,
  selectors: [["app-list-cites-by-authors"]],
  inputs: {
    author: "author"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_tools_Device__WEBPACK_IMPORTED_MODULE_0__.Device]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 7,
  consts: [[1, "container", "mb-36"], ["class", "text-3xl font-bold text-stone-900 mb-2", 3, "ngPlural", 4, "ngIf"], [1, "list-none"], ["class", "p-1", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "container"], [1, "w-full"], ["id", "bottom-navigation", 1, "block", "fixed", "inset-x-0", "bottom-10", "z-10", "bg-white"], [3, "list", "options", "paginatedList$"], [1, "text-3xl", "font-bold", "text-stone-900", "mb-2", 3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"], [1, "p-1"]],
  template: function ListCitesByAuthorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListCitesByAuthorsComponent_h1_1_Template, 4, 1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ListCitesByAuthorsComponent_li_3_Template, 3, 1, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "section", 6)(7, "app-pager", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("paginatedList$", function ListCitesByAuthorsComponent_Template_app_pager_paginatedList__7_listener($event) {
        return ctx.setPaginatedList($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.author);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.paginatedCites)("ngForTrackBy", ctx.trackByCiteId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", ctx.cites)("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx.getItemsPerPage()));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgPlural, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgPluralCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__.PagerComponent],
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=src_app_components_list-cites-by-authors_list-cites-by-authors_component_ts.js.map