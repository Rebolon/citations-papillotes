"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["common"],{

/***/ 3325:
/*!***********************************************************************************!*\
  !*** ./src/app/components/link-cites-by-author/link-cites-by-author.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkCitesByAuthorComponent: () => (/* binding */ LinkCitesByAuthorComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class LinkCitesByAuthorComponent {}
LinkCitesByAuthorComponent.ɵfac = function LinkCitesByAuthorComponent_Factory(t) {
  return new (t || LinkCitesByAuthorComponent)();
};
LinkCitesByAuthorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LinkCitesByAuthorComponent,
  selectors: [["app-link-cites-by-author"]],
  inputs: {
    author: "author"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 4,
  consts: [[3, "routerLink", "title"]],
  template: function LinkCitesByAuthorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/authors/", ctx.author, "")("title", "Liste des citations de ", ctx.author, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("aria-label", "Liste des citations de ", ctx.author, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.author, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2
});


/***/ })

}]);
//# sourceMappingURL=common.js.map