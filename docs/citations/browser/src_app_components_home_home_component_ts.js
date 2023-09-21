"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["src_app_components_home_home_component_ts"],{

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _tools_CiteOfTheDay_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/CiteOfTheDay.service */ 4276);
/* harmony import */ var _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link-cites-by-author/link-cites-by-author.component */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_Cites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Cites */ 8073);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);






function HomeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-link-cites-by-author", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx_r0.citesService.getCiteOfTheDay()).getCite(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("author", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, ctx_r0.citesService.getCiteOfTheDay()).getAuthor());
  }
}
class HomeComponent {
  constructor(citesService, title) {
    this.citesService = citesService;
    this.title = title;
    this.title.setTitle('Citations - Citation du jour');
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Cites__WEBPACK_IMPORTED_MODULE_2__.Cites), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_tools_CiteOfTheDay_service__WEBPACK_IMPORTED_MODULE_0__.CiteOfTheDay]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "my-4", "text-3xl", "md:text-5xl", "text-violet-800", "font-bold", "leading-tight", "text-center", "md:text-left", "slide-in-bottom-h1"], [1, "leading-normal", "text-base", "md:text-2xl", "mb-8", "text-center", "md:text-left", "slide-in-bottom-subtitle"], [3, "author"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 7, 6, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.citesService.getCiteOfTheDay()));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_1__.LinkCitesByAuthorComponent],
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=src_app_components_home_home_component_ts.js.map