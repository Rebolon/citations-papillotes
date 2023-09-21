"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["src_app_components_list-cites_list-cites_component_ts"],{

/***/ 1915:
/*!***************************************************************!*\
  !*** ./src/app/components/list-cites/list-cites.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListCitesComponent: () => (/* binding */ ListCitesComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _tools_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/Device */ 3482);
/* harmony import */ var _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/BasePaginatedComponent */ 5259);
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pager/pager.component */ 7394);
/* harmony import */ var _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link-cites-by-author/link-cites-by-author.component */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_Cites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Cites */ 8073);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);










function ListCitesComponent_h2_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Aucune citation trouv\u00E9e pour la recherche \"", ctx_r2.q, "\"\u00A0");
  }
}
function ListCitesComponent_h2_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.cites.length, " citation trouv\u00E9e pour la recherche \"", ctx_r3.q, "\":\u00A0");
  }
}
function ListCitesComponent_h2_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r4.cites.length, " citations trouv\u00E9es pour la recherche \"", ctx_r4.q, "\":\u00A0");
  }
}
function ListCitesComponent_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListCitesComponent_h2_4_ng_template_1_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListCitesComponent_h2_4_ng_template_2_Template, 1, 2, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ListCitesComponent_h2_4_ng_template_3_Template, 1, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngPlural", ctx_r0.cites.length);
  }
}
function ListCitesComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 14)(1, "cite");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-link-cites-by-author", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u201D", item_r5.getCite(), "\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("author", item_r5.getAuthor());
  }
}
const _c0 = function (a0) {
  return {
    itemPerPage: a0
  };
};
class ListCitesComponent extends _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_1__.BasePaginatedComponent {
  constructor(citeService, title, device) {
    super();
    this.citeService = citeService;
    this.title = title;
    this.device = device;
    this.cites = [];
    this.paginatedCites = [];
    this.title.setTitle('Citations - Liste des citations');
    this.itemsPerPage = 12;
    if (device.isMobile()) {
      this.itemsPerPage = 4;
    }
  }
  ngOnInit() {
    this.citeService.cites$.subscribe({
      next: next => {
        this.fillCites(next);
      }
    });
    this.findCitesBySearch();
  }
  ngOnChanges() {
    this.findCitesBySearch();
  }
  findCitesBySearch() {
    // prerender crash without the first check
    if (this.q && this.q.trim() === '') {
      this.citeService.reset().subscribe();
      return;
    }
    this.citeService.search(this.q).subscribe(next => this.fillCites(next));
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
ListCitesComponent.ɵfac = function ListCitesComponent_Factory(t) {
  return new (t || ListCitesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_Cites__WEBPACK_IMPORTED_MODULE_4__.Cites), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tools_Device__WEBPACK_IMPORTED_MODULE_0__.Device));
};
ListCitesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ListCitesComponent,
  selectors: [["app-list-cites"]],
  inputs: {
    q: "q"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_tools_Device__WEBPACK_IMPORTED_MODULE_0__.Device]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 11,
  vars: 8,
  consts: [[1, "container", "mb-36"], [1, "text-3xl", "font-bold", "text-stone-900", "mb-2"], ["routerLink", "/cites", "queryParams", ""], ["class", "text-md text-gray-600", 3, "ngPlural", 4, "ngIf"], [1, "list-none"], ["class", "p-1", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "container"], [1, "w-full"], ["id", "bottom-navigation", 1, "block", "fixed", "inset-x-0", "bottom-10", "z-10", "bg-white"], [3, "list", "options", "paginatedList$"], [1, "text-md", "text-gray-600", 3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"], [1, "p-1"], [3, "author"]],
  template: function ListCitesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ListCitesComponent_h2_4_Template, 4, 1, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ListCitesComponent_li_6_Template, 5, 2, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "section", 8)(10, "app-pager", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("paginatedList$", function ListCitesComponent_Template_app_pager_paginatedList__10_listener($event) {
        return ctx.setPaginatedList($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.citeService.countSearchFoundCites(), " Citations.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.q);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.paginatedCites)("ngForTrackBy", ctx.trackByCiteId);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("list", ctx.cites)("options", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, ctx.getItemsPerPage()));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgPlural, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgPluralCase, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor, _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_3__.LinkCitesByAuthorComponent, _pager_pager_component__WEBPACK_IMPORTED_MODULE_2__.PagerComponent],
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=src_app_components_list-cites_list-cites_component_ts.js.map