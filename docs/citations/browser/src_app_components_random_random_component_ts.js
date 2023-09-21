"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["src_app_components_random_random_component_ts"],{

/***/ 6991:
/*!*******************************************************!*\
  !*** ./src/app/components/random/random.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomComponent: () => (/* binding */ RandomComponent)
/* harmony export */ });
/* harmony import */ var _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../link-cites-by-author/link-cites-by-author.component */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_Cites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Cites */ 8073);
/* harmony import */ var _services_Click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Click */ 623);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);







function RandomComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-link-cites-by-author", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.cite$.getValue().getCite(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("author", ctx_r0.cite$.getValue().getAuthor());
  }
}
class RandomComponent {
  constructor(citesService, click, title) {
    this.citesService = citesService;
    this.click = click;
    this.title = title;
    this.cite$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.title.setTitle('Citations - Citation aléatoire');
  }
  ngOnInit() {
    this.click.refresh$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.citesService.getRandomCite())).subscribe({
      next: cite => this.cite$.next(cite)
    });
    // for a page refresh, no click are thrown from the navbar, so i have to simulate it here : is there a best pattern
    this.click.click();
  }
}
RandomComponent.ɵfac = function RandomComponent_Factory(t) {
  return new (t || RandomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Cites__WEBPACK_IMPORTED_MODULE_1__.Cites), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Click__WEBPACK_IMPORTED_MODULE_2__.Click), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title));
};
RandomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RandomComponent,
  selectors: [["app-random"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "my-4", "text-3xl", "md:text-5xl", "text-violet-800", "font-bold", "leading-tight", "text-center", "md:text-left", "slide-in-bottom-h1"], [1, "leading-normal", "text-base", "md:text-2xl", "mb-8", "text-center", "md:text-left", "slide-in-bottom-subtitle"], [3, "author"]],
  template: function RandomComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RandomComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.cite$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_0__.LinkCitesByAuthorComponent],
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=src_app_components_random_random_component_ts.js.map