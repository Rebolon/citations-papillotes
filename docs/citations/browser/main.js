"use strict";
(self["webpackChunkcitations"] = self["webpackChunkcitations"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_navbar_mobile_navbar_mobile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar-mobile/navbar-mobile.component */ 6260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_navbar_desktop_navbar_desktop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar-desktop/navbar-desktop.component */ 6795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);





class AppComponent {
  constructor(title) {
    this.title = title;
    this.title.setTitle('Liste de Citations');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 7,
  vars: 0,
  consts: [["id", "app", 1, "container", "min-h-screen", "flex", "flex-col"], [1, "top-0", "fixed", "bg-white", "w-full"], [1, "grow", "p-4", "pt-24"], [1, "w-full"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-navbar-desktop");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "main", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "footer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-navbar-mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_components_navbar_desktop_navbar_desktop_component__WEBPACK_IMPORTED_MODULE_1__.NavbarDesktopComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_navbar_mobile_navbar_mobile_component__WEBPACK_IMPORTED_MODULE_0__.NavbarMobileComponent],
  encapsulation: 2
});


/***/ }),

/***/ 7110:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _services_Cites_Authors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/Cites/Authors */ 9028);
/* harmony import */ var _services_Cites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Cites */ 8073);
/* harmony import */ var _services_Click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/Click */ 623);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ 2016);
/* harmony import */ var _tools_CiteOfTheDay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/CiteOfTheDay.service */ 4276);











const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_4__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_6__.withComponentInputBinding)()), (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })), _services_Cites_Authors__WEBPACK_IMPORTED_MODULE_1__.Authors, _services_Cites__WEBPACK_IMPORTED_MODULE_2__.Cites, _tools_CiteOfTheDay_service__WEBPACK_IMPORTED_MODULE_5__.CiteOfTheDay, _services_Click__WEBPACK_IMPORTED_MODULE_3__.Click, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title, (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.provideAnimations)()]
};

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_home_home_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/home/home.component */ 159)).then(c => c.HomeComponent) /* */
}, {
  path: 'cites',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_common_BasePaginatedComponent_ts-src_app_components_pager_pager_co-634700"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_list-cites_list-cites_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/list-cites/list-cites.component */ 1915)).then(c => c.ListCitesComponent) /* */
}, {
  path: 'authors',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_common_BasePaginatedComponent_ts-src_app_components_pager_pager_co-634700"), __webpack_require__.e("src_app_components_list-authors_list-authors_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/list-authors/list-authors.component */ 7397)).then(c => c.ListAuthorsComponent) /* */
}, {
  path: 'authors/:author',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_common_BasePaginatedComponent_ts-src_app_components_pager_pager_co-634700"), __webpack_require__.e("src_app_components_list-cites-by-authors_list-cites-by-authors_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/list-cites-by-authors/list-cites-by-authors.component */ 1006)).then(c => c.ListCitesByAuthorsComponent) /* */
}, {
  path: 'random',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_random_random_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/random/random.component */ 6991)).then(c => c.RandomComponent) /* */
}, {
  path: 'search',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_common_BasePaginatedComponent_ts-src_app_components_pager_pager_co-634700"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_list-cites_list-cites_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/list-cites/list-cites.component */ 1915)).then(c => c.ListCitesComponent) /* */
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_components_pageNotFound_page-not-found_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/pageNotFound/page-not-found.component */ 3359)).then(c => c.PageNotFoundComponent) /* */
}];

/***/ }),

/***/ 4769:
/*!**********************************************************!*\
  !*** ./src/app/components/common/BaseNavbarComponent.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseNavbarComponent: () => (/* binding */ BaseNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_Click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Click */ 623);


class BaseNavbarComponent {
  constructor(click) {
    this.click = click;
  }
  refreshRandom() {
    this.click.click();
  }
}
BaseNavbarComponent.ɵfac = function BaseNavbarComponent_Factory(t) {
  return new (t || BaseNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_Click__WEBPACK_IMPORTED_MODULE_0__.Click));
};
BaseNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BaseNavbarComponent,
  selectors: [["ng-component"]],
  decls: 0,
  vars: 0,
  template: function BaseNavbarComponent_Template(rf, ctx) {},
  encapsulation: 2
});


/***/ }),

/***/ 6795:
/*!***********************************************************************!*\
  !*** ./src/app/components/navbar-desktop/navbar-desktop.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarDesktopComponent: () => (/* binding */ NavbarDesktopComponent)
/* harmony export */ });
/* harmony import */ var _common_BaseNavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/BaseNavbarComponent */ 4769);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ 9013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class NavbarDesktopComponent extends _common_BaseNavbarComponent__WEBPACK_IMPORTED_MODULE_0__.BaseNavbarComponent {}
NavbarDesktopComponent.ɵfac = /*@__PURE__*/function () {
  let ɵNavbarDesktopComponent_BaseFactory;
  return function NavbarDesktopComponent_Factory(t) {
    return (ɵNavbarDesktopComponent_BaseFactory || (ɵNavbarDesktopComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NavbarDesktopComponent)))(t || NavbarDesktopComponent);
  };
}();
NavbarDesktopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavbarDesktopComponent,
  selectors: [["app-navbar-desktop"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 30,
  vars: 0,
  consts: [[1, "flex", "items-center", "justify-between", "p-6", "container", "mx-auto"], ["routerLink", "/", "title", "Citation du jour", "aria-label", "Citation du jour"], ["version", "1.1", "width", "200", "height", "36", "preserveAspectRatio", "xMidYMid meet", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z"], ["d", "M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z"], ["x", "0", "y", "0", "width", "200", "height", "36", "fill-opacity", "0"], ["x", "36", "y", "35", 1, "text-4xl", "text-violet-700", "font-sans", "subpixel-antialiased"], [1, "text-sm", "text-gray-600", "sm:flex", 2, "padding-top", "16px"], [1, "text-lg", "hidden", "lg:flex"], ["routerLink", "/", "title", "Citation du jour", "aria-label", "Citation du jour", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["routerLink", "/cites", "title", "Liste des citations", "aria-label", "Liste des citations", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"], ["routerLink", "/authors", "title", "Liste des auteurs", "aria-label", "Liste des auteurs", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"], ["routerLink", "/random", "title", "Une citation au hasard", "aria-label", "Une citation au hasard", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"], ["href", "https://github.com/Rebolon/citations-papillotes", "title", "Acc\u00E8s au code source", "aria-label", "Acc\u00E8s au code source", 1, "block", "lg:inline-block", "hover:text-violet-800", "transform", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"]],
  template: function NavbarDesktopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 3)(4, "path", 4)(5, "rect", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "text", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Citations ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-search", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 10)(12, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "svg", 10)(16, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "svg", 10)(20, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarDesktopComponent_Template_a_click_22_listener() {
        return ctx.refreshRandom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "svg", 10)(24, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 10)(28, "svg", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  encapsulation: 2
});


/***/ }),

/***/ 6260:
/*!*********************************************************************!*\
  !*** ./src/app/components/navbar-mobile/navbar-mobile.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarMobileComponent: () => (/* binding */ NavbarMobileComponent)
/* harmony export */ });
/* harmony import */ var _common_BaseNavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/BaseNavbarComponent */ 4769);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class NavbarMobileComponent extends _common_BaseNavbarComponent__WEBPACK_IMPORTED_MODULE_0__.BaseNavbarComponent {}
NavbarMobileComponent.ɵfac = /*@__PURE__*/function () {
  let ɵNavbarMobileComponent_BaseFactory;
  return function NavbarMobileComponent_Factory(t) {
    return (ɵNavbarMobileComponent_BaseFactory || (ɵNavbarMobileComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](NavbarMobileComponent)))(t || NavbarMobileComponent);
  };
}();
NavbarMobileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarMobileComponent,
  selectors: [["app-navbar-mobile"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 26,
  vars: 0,
  consts: [["id", "bottom-navigation", 1, "md:hidden", "block", "fixed", "inset-x-0", "bottom-0", "z-10", "bg-white", "shadow"], ["id", "tabs", 1, "flex", "justify-between"], ["routerLink", "/", "title", "Citation du jour", "aria-label", "Citation du jour", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1"], ["width", "25", "height", "25", "viewBox", "0 0 42 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "inline-block", "mb-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "tab", "tab-home", "block", "text-xs"], ["routerLink", "/cites", "title", "Liste des citations", "aria-label", "Liste des citations", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1"], ["width", "25", "height", "25", "viewBox", "0 0 42 42", 1, "inline-block", "mb-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"], [1, "tab", "tab-kategori", "block", "text-xs"], ["routerLink", "/authors", "title", "Liste des auteurs", "aria-label", "Liste des auteurs", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"], [1, "tab", "tab-explore", "block", "text-xs"], ["routerLink", "/random", "title", "Une citation au hasard", "aria-label", "Une citation au hasard", "queryParams", "", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"], [1, "tab", "tab-whishlist", "block", "text-xs"]],
  template: function NavbarMobileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3)(4, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Aujourd'hui");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 8)(10, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Citations");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "svg", 8)(16, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Auteurs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarMobileComponent_Template_a_click_20_listener() {
        return ctx.refreshRandom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 8)(22, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Al\u00E9atoire");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  encapsulation: 2
});


/***/ }),

/***/ 9013:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);



const _c0 = ["elSearchCite"];
class SearchComponent {
  constructor(activatedRouter, router) {
    this.activatedRouter = activatedRouter;
    this.router = router;
    // Memory leak prevention: better implementation than an array of Subscription on which we wll loop over
    // (3 steps documented here)
    // #1 the properties that will clear Observable
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  ngOnInit() {
    // reset q input when route change
    this.activatedRouter.queryParamMap.subscribe(params => {
      if (!params.get('q')) {
        this.elSearchCite.nativeElement.value = '';
        return;
      }
    });
  }
  // #2 the event on which we will complete the main Observable property
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.elSearchCite.nativeElement, 'keyup').pipe(
    // #3 the function that will stop the Observable because of the complete event from Observable property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.ngUnsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(event => event.currentTarget.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(500)).subscribe({
      next: next => {
        this.router.navigate(['/search'], {
          queryParams: {
            q: next
          }
        });
      }
    });
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  viewQuery: function SearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.elSearchCite = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 0,
  consts: [["id", "search_input", "type", "text", "placeholder", "Rechercher...", 1, ""], ["elSearchCite", ""]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 0, 1);
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 8193:
/*!**********************************!*\
  !*** ./src/app/fixtures/data.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cites: () => (/* binding */ cites)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4611);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1414);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _models_Cite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Cite */ 1285);


/**
 * This file should be only imported from Service Cites that will simulate a DataStore
 */
const data = [{
  cite: `Chaque commencement recèle une magie cachée.`,
  author: `Hermann Hesse`,
  tags: ['espoir']
}, {
  cite: `Rarement nous pensons à ce que nous avons, mais souvent à ce qui nous manque.`,
  author: `Arthur Schopenhauer`,
  tags: ['simplicité']
}, {
  cite: `Comme le dauphin j'ai le dos fin.`,
  author: `Maître Reiki Kanak`
}, {
  cite: `L'âme porte les couleurs de tes pensées.`,
  author: `Marc Aurèle`
}, {
  cite: `Apprenons à tendre la main pas seulement pour recevoir, mais également pour donner.`,
  author: `Wembo Jah Olela`,
  tags: ['générosité']
}, {
  cite: `Peu importe où nous sommes, ma maison n'est pas un lieu, ma maison c'est toi.`,
  author: `Fynn Kliemann`,
  tags: ['amour']
}, {
  cite: `Pour faire du bien, personne n'a besoin de réfléchir.`,
  author: `Johann Wolfgang Von Goethe`,
  tags: ['bienveillance']
}, {
  cite: `Il n'y a que deux façons de vivre sa vie : l'une en faisant comme si rien n'était un miracle, l'autre en faisant comme si tout était un miracle.`,
  author: `Albert Einstein`,
  tags: ['joie']
}, {
  cite: `La faculté de se mettre dans la peau des autres et de réfléchir à la manière dont on agirait à leur place est très utile si on veut apprendre à aimer quelqu'un.`,
  author: `Dalai Lama`,
  tags: ['amour']
}, {
  cite: `Répands tes bienfaits sur tes amis, pour qu'ils t'aiment plus tendrement encore ; répands-les sur tes ennemis, pour qu'ils deviennent enfin tes amis.`,
  author: `Cléobus de Lindos`,
  tags: ['amitié']
}, {
  cite: `Souris au monde et le monde te sourira.`,
  author: `Soeur Emmanuelle`,
  tags: ['joie']
}, {
  cite: `L'humour a non seulement quelque chose de libérateur, mais encore quelque chose de sublime et d'élevé.`,
  author: `Sigmund Freud`,
  tags: ['rire']
}, {
  cite: `On ne voit bien qu'avec le coeur. L'essentiel est invisible pour les yeux.`,
  author: `Antoine de Saint-Exupéry`
}, {
  cite: `Seuls les sens peuvent guérir l'âme, tout comme l'âme seule peut guérir les sens.`,
  author: `Oscar Wilde`
}, {
  cite: `L'amour n'est pas dans l'autre, il est en nous-mêmes ; nous le réveillons. Mais pour ce réveil, nous avons besoin de l'autre.`,
  author: `Paulo Coelho`
}, {
  cite: `L'ornement de la main, ce sont ses doigts.`,
  author: `Proverbe africain`,
  tags: ['proverbe']
}, {
  cite: `L'optimiste rit pour oublier ; le pessimiste oublie de rire.`,
  author: `Anonyme`
}, {
  cite: `Parfois on ne perçoit l'amour car la vie quotidienne peut nous rendre aveugle.`,
  author: `Anonyme`
}, {
  cite: `Ecouter, c'est aimer.`,
  author: `François Lelord`,
  tags: ['amour']
}, {
  cite: `Si tu veux la lune, ne te cache pas durant la nuit. Si tu veux une rose, n'aie pas peur des épines. Si tu veux l'amour, ne cache pas ta vrai personne.`,
  author: `Rumi`,
  tags: ['amour']
}, {
  cite: `Les rêves éveillés maintiennent notre équilibre mental.`,
  author: `Elisabeth Maria Maurer`
}, {
  cite: `L'énergie suit les pensées.`,
  author: `Tony Robbins`
}, {
  cite: `Les questions sont les clés pour accéder au trésors.`,
  author: `Georg-Wilhelm Exler`
}, {
  cite: `L'amour ne voit pas avec les yeux mais avec l'âme.`,
  author: `William Shakespeare`
}, {
  cite: `L'espoir, c'est rentrer sous la pluie et sortir sous un beau soleil.`,
  author: `Proverbe africain`,
  tags: ['proverbe']
}, {
  cite: `Les folies sont les seules choses qu'on ne regrette jamais.`,
  author: `Oscar Wilde`
}, {
  cite: `Un sourire est une clef secrète qui ouvre bien des coeurs.`,
  author: `Baden-Powell`
}, {
  cite: `Le chocolat plonge des êtres par ailleurs normaux dans d'étranges états extatiques.`,
  author: `John West`
}, {
  cite: `On a deux vies. La deuxième commence le jour où on réalise qu'on en a juste une.`,
  author: `Confucius`
}, {
  cite: `Je vais être jaloux de cette tour. Elle est plus célèbre que moi.`,
  author: `Gustave Eiffel`
}, {
  cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`,
  author: `Jules Renard`
}, {
  cite: `Nous portons en nous des merveilles que nous cherchons en dehors de nous.`,
  author: `Thomas Browne`
}, {
  cite: `Là où l'on s'aime il ne fait jamais nuit.`,
  author: `Proverbe africain`,
  tags: ['proverbe']
}, {
  cite: `Le risque de prendre une mauvaise décision n'est rien comparé à la terreur de l'indécision.`,
  author: `Maimonide`
}, {
  cite: `En tentant l'impossible, on peut atteindre le plus haut niveau du possible.`,
  author: `August Strindberg`
}, {
  cite: `Souris à la vie pour qu'elle te sourit.`,
  author: `Proverbe tunisien`,
  tags: ['proverbe']
}, {
  cite: `A coeur vaillant rien d'impossible.`,
  author: `Jacques Coeur`
}, {
  cite: `L'important n'est pas ce que l'on regarde mais ce que l'on voit.`,
  author: `Henry David Thoreau`
}, {
  cite: `A travers les feuilles d'un bon livre, on pourra entendre un écho qui ressemble aux bruits des fôrets.`,
  author: `Henry David Thoreau`
}, {
  cite: `Assure-toi que la bougie est allumée avant d'éteindre l'allumette.`,
  author: `Proverbe créole`,
  tags: ['proverbe']
}, {
  cite: `Quand l'amour grandit en toi, la beauté fat de même. Car l'amour est la beauté de l'âme.`,
  author: `Marcel Proust`
}, {
  cite: `Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.`,
  author: `Marcel Proust`
}, {
  cite: `Dans la vie tu as deux choix le matin : soit tu te recouches pour poursuivre ton rêve, soit tu te lèves pour le réaliser.`,
  author: `Axel Albanel`
}, {
  cite: `La diplomatie, c'est faire et dire les plus vilaines choses de la manière la plus élégante.`,
  author: `Isaac Goldberg`
}, {
  cite: `Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.`,
  author: `Confucius`
}, {
  cite: `L'imagination vaut bien des voyages et elle coûte moins cher.`,
  author: `George William Curtis`
}, {
  cite: `Faites que le rêve dévore votre vie, afin que la vie ne dévore votre rêve.`,
  author: `Antoine de Saint-Exupéry`
}, {
  cite: `Deviens sans cesse celui que tu es, sois le maître et le sculpteur de toi-même.`,
  author: `Friederich Nietzsche`
}, {
  cite: `La nature nous a donné une langue et deux oreilles, afin que nous écoutions le double de ce que nous disons.`,
  author: `Zénon`
}, {
  cite: `Chaque baiser est un tremblement de terre.`,
  author: `George Gordon Byron`
}, {
  cite: `Un grand écrivain se remarque au nombre de pages qu'il ne publie pas.`,
  author: `Stéphane Mallarmé`
}, {
  cite: `Fais ce que tu aimes et fais-le souvent.`,
  author: `Anonyme`
}, {
  cite: `Aimer savoir est humain, savoir aimer est divin.`,
  author: `Joseph Roux`
}, {
  cite: `Plus le visage est sérieux, plus le sourire est beau.`,
  author: `François René de Chateaubriand`
}, {
  cite: `Le sourire que tu envoies revient vers toi.`,
  author: `Proverbe hindou`,
  tags: ['proverbe']
}, {
  cite: `Le sourire fait fondre la glace, installe la confiance et guérit les blessures, c'est la clef des relations humaines sincères.`,
  author: `Voltaire`
}, {
  cite: `On n'est jamais puni pour avoir fait mourir de rire.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Il y a autant de beautés qu'il y a de manières habituelles de chercher le bonheur.`,
  author: `Charles Baudelaire`
}, {
  cite: `Toute révélation d'un secret est la faute de celui qui l'a confié.`,
  author: `Jean de La Bruyère`
}, {
  cite: `A celui qui sait attendre tout vient à temps .`,
  author: `François Rabelais`
}, {
  cite: `On voyage pour changer, non de lieu, mais d'idées.`,
  author: `Hippolyte Taine`
}, {
  cite: `Fruits et racines ont même commune mesure qui est l'arbre.`,
  author: `Antoine de Saint-Exupéry`
}, {
  cite: `La beauté est dans les yeux de celui qui regarde.`,
  author: `Oscar Wilde`
}, {
  cite: `Les amis sont des compagnons de voyage, qui nous aident à avancer sur le chemin d’une vie plus heureuse.`,
  author: `Pythagore`
}, {
  cite: `Le plaisir est le bonheur des fous, le bonheur est le plaisir des sages.`,
  author: `Jules Barbey d'Aurevilly`
}, {
  cite: `La joie est en tout, il suffit de savoir l'extraire.`,
  author: `Confucius`
}, {
  cite: `La table est l'entremetteuse de l'amitié.`,
  author: `Proverbe français`,
  tags: ['proverbe']
}, {
  cite: `Le génie, c'est l'enfance retrouvée à volonté.`,
  author: `Charles Baudelaire`
}, {
  cite: `Le remède à l'ennui c'est la curiosité. La curiosité elle, est sans remède.`,
  author: `Anonyme`
}, {
  cite: `Il n'est pas de plaisir plus doux que de surprendre un homme en lui donnant plus qu'il n'espère.`,
  author: `Charles Baudelaire`
}, {
  cite: `Sachez vous éloigner car, lorsque vous reviendrez à votre travail votre jugement sera plus sûr.`,
  author: `Léonard de Vinci`
}, {
  cite: `C'est l'incertitude qui nous charme. Tout devient merveilleux dans la brume.`,
  author: `Oscar Wilde`
}, {
  cite: `La bonne volonté raccourcit le chemin.`,
  author: `Proverbe brésilien`,
  tags: ['proverbe']
}, {
  cite: `Bonne cuisine et bon vin, c'est le paradis sur terre.`,
  author: `Henri IV`
}, {
  cite: `La musique est la langue des émotions.`,
  author: `Emmanuel Kant`
}, {
  cite: `Guérir parfois, soulager souvent, écouter toujours.`,
  author: `Louis Pasteur`
}, {
  cite: `Les mots manquent aux émotions.`,
  author: `Victor Hugo`
}, {
  cite: `Le plaisir se ramasse la joie se cueille et le bonheur se cultive.`,
  author: `Bouddha`
}, {
  cite: `Que ton baiser ait l'ardeur du soleil et la rose te donnera tout son parfum.`,
  author: `Proverbe kurde`,
  tags: ['proverbe']
}, {
  cite: `Quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie, le bonheur vous appartient.`,
  author: `Gandhi`
}, {
  cite: `Qui veut faire le bonheur des autres a déjà fait le sien.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit.`,
  author: `Oscar Wilde`
}, {
  cite: `Eclaire demain avec aujourd'hui !`,
  author: `Elizabeth Barret Browning`
}, {
  cite: `Apprends à écrire tes blessures dans le sable et à graver tes joies dans la pierre.`,
  author: `Lao Tseu`
}, {
  cite: `Maison de paille où l'on rit vaut mieux qu'un palais où l'on pleure.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Toute l'invention consiste à faire quelque chose de rien.`,
  author: `Jean Racine`
}, {
  cite: `L'idéal de l'amitié c'est de se sentir un et de rester deux.`,
  author: `Anne Sophie Swetchine`
}, {
  cite: `Un seul homme armé de courage vaut une majorité.`,
  author: `Andrew Jackson`
}, {
  cite: `La Tour Eiffel ne devait durer que 20 ans, ... elle est devenue aussi éternelle que Paris !`,
  author: `Anonyme`
}, {
  cite: `En se posant sur la branche, le papillon craint de la briser.`,
  author: `Proverbe arménien`,
  tags: ['proverbe']
}, {
  cite: `Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l'avenir.`,
  author: `Jean Jaurès`
}, {
  cite: `Un peu de jalousie éveille un amour heureux qui s'endort.`,
  author: `Mme Deshoulières`
}, {
  cite: `La simplicité est la sophistication suprême.`,
  author: `Léonard de Vinci`
}, {
  cite: `Supprimons de la vie toute raison d'ennuis : car il est court le temps qui nous est imparti !`,
  author: `Ménandre`
}, {
  cite: `Quelque délicat que l'on soit en amour, on pardonne plus de fautes que dans l'amitié.`,
  author: `Jean de La Bruyère`
}, {
  cite: `Le travail, en autres avantages, a celui de raccourcir les journées et d'étendre la vie.`,
  author: `Denis Diderot`
}, {
  cite: `Si nous prenons la nature pour guide, nous ne nous égarerons jamais.`,
  author: `Cicéron`
}, {
  cite: `L'accent circonflexe est l'hirondelle de l'écriture.`,
  author: `Jules Renard`
}, {
  cite: `L'émotion artistique cesse où l'analyse et la pensée interviennent.`,
  author: `Max Jacob`
}, {
  cite: `La pensée n'est qu'un éclair au milieu de la nuit. Mais c'est cet éclair qui est tout.`,
  author: `Henri Poincaré`
}, {
  cite: `L'accent est l'âme du discours, il lui donne le sentiment et la vérité.`,
  author: `Jean-Jacques Rousseau`
}, {
  cite: `La crainte du danger est mille fois plus terrifiante que le danger présent.`,
  author: `Daniel Defoe`
}, {
  cite: `La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conquête.`,
  author: `Georges Meredith`
}, {
  cite: `De toutes les passions, la seule vraiment respectable me parait être la gourmandise.`,
  author: `Guy de Maupassant`
}, {
  cite: `Jamais les mots ne manquent aux idées ; ce sont les idées qui manquent aux mots.`,
  author: `Joseph Joubert`
}, {
  cite: `L'âge auquel on partage tout est généralement l'âge où on n'a rien.`,
  author: `Alphonse Karr`
}, {
  cite: `Une erreur originale vaut mieux qu'une vérité banale.`,
  author: `Fiodor Dostoïevski`
}, {
  cite: `Le veinard est celui qui arrive à tout ; le malchanceux est celui à qui tout arrive.`,
  author: `Eugène Labiche`
}, {
  cite: `La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.`,
  author: `Franklin Delano Roosevelt`
}, {
  cite: `Il n'y a pas de moyen pour polir le hérisson.`,
  author: `Aristophane`
}, {
  cite: `L'amour qui naît subitement est le plus long à guérir.`,
  author: `Jean de La Bruyère`
}, {
  cite: `Il n'y a pas de plus grande joie que celle qu'on n'attend pas.`,
  author: `Sophocle`
}, {
  cite: `Quand la colère emplit ton coeur, ne laisse pas ta langue aboyer en vain.`,
  author: `Sappho`
}, {
  cite: `Un grain de gaieté assaisonne tout.`,
  author: `Baltasar Gracian`
}, {
  cite: `Qui rougit est déjà coupable, la vraie innocence n'a honte de rien.`,
  author: `Jean-Jacques Rousseau`
}, {
  cite: `Il n'y a point de génie sans grain de folie.`,
  author: `Aristote`
}, {
  cite: `J'aime le lit, c'est le seul endroit où, comme le chat, je puis faire le mort en respirant, tout en étant vivant.`,
  author: `Arthur Cravan`
}, {
  cite: `Le seul homme à ne jamais faire d'erreur est celui qui ne fait rien.`,
  author: `Théodore Roosevelt`
}, {
  cite: `Le plus grand voyageur est celui qui a su faire une fois le tour de lui-même.`,
  author: `Confucius`
}, {
  cite: `C'est la nuit qu'il est beau de croire à la lumière.`,
  author: `Edmond Rostand`
}, {
  cite: `Pour l'amour d'une rose, le jardinier devient l'esclave de mille épines.`,
  author: `Proverbe turc`,
  tags: ['proverbe']
}, {
  cite: `Déploie ton jeune courage, enfant ; c'est ainsi qu'on s'élève jusqu'aux astres.`,
  author: `Virgile`
}, {
  cite: `Nul ne veut le bien public que quand il s'accorde avec le sien.`,
  author: `Jean-Jacques Rousseau`
}, {
  cite: `On avale à pleine gorgée le mensonge qui nous flatte, et l'on boit goutte à goutte une vérité qui nous est amère.`,
  author: `Denis Diderot`
}, {
  cite: `Appelons hommes de génie qui font vite ce que nous faisons lentement.`,
  author: `Joseph Joubert`
}, {
  cite: `Rien n'est sérieux en ce bas monde que le rire.`,
  author: `Gustave Flaubert`
}, {
  cite: `Les soucis enlaidissent, c'est la joie qui fait fleurir.`,
  author: `Proverbe berbère`,
  tags: ['proverbe']
}, {
  cite: `Qui fait rire l'esprit se rend maître du coeur.`,
  author: `Cardinal de Bernis`
}, {
  cite: `On ne peut apprendre au crabe à marcher droit.`,
  author: `Aristophane`
}, {
  cite: `Ferme les yeux et tu verras.`,
  author: `Joseph Joubert`
}, {
  cite: `L'homme le plus heureux est celui qui fait le bonheur d'un plus grand nombre d'autres.`,
  author: `Denis Diderot`
}, {
  cite: `A l'oiseau, le nid; à l'araignée, la toile; à l'homme, l'amitié.`,
  author: `William Blake`
}, {
  cite: `Rien ne s'accomplit dans ce monde sans passion.`,
  author: `Georg Whilhelm Friedrich Hegel`
}, {
  cite: `N'engage pas de débat lors d'un dîner car celui qui n'a pas faim aura le dernier mot.`,
  author: `Richard Whately`
}, {
  cite: `Les paroles sages tombent quelquefois dans l'oreille d'un sourd ; mais un mot gentil n'est jamais perdu.`,
  author: `Arthur Helps`
}, {
  cite: `Je crois beaucoup en la chance, et je constate que plus je travaille, plus elle me sourit.`,
  author: `Thomas Jefferson`
}, {
  cite: `L'expérience est un peigne que la nature nous donne une fois que nous sommes chauves.`,
  author: `Proverbe belge`,
  tags: ['proverbe']
}, {
  cite: `Le rire et le sommeil sont les meilleurs remèdes du monde.`,
  author: `Proverbe irlandais`,
  tags: ['proverbe']
}, {
  cite: `L'enfance est un papillon qui se hâte de brûler ses blanches ailes aux flammes de la jeunesse.`,
  author: `Aloysius Bertrand`
}, {
  cite: `La puissance, c'est imposer sa volonté aux autres. La force, c'est se l'imposer à soi-même.`,
  author: `Lao Zi`
}, {
  cite: `A Noël, je n'ai pas plus envie de rose que je ne voudrais de neige au printemps. J'aime chaque saison pour ce qu'elle apporte.`,
  author: `William Shakespeare`
}, {
  cite: `Le meilleur secret pour ne jamais tomber c'est de rester toujours assis.`,
  author: `Stendhal`
}, {
  cite: `La variété est la véritable épice de la vie. Qui lui donne toute sa saveur.`,
  author: `William Cowper`
}, {
  cite: `Pour retrouver sa jeunesse, il n'y a qu'à recommencer ses folies.`,
  author: `Théodore Roosevelt`
}, {
  cite: `Le rire que tu offres te sera rendu au centuple.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Pour les habits, rien ne vaut les neufs, pour les amis, rien ne vaut les vieux.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Il y a toujours un peu de folie dans l'amour mais il y a toujours un peu de raison dans la folie.`,
  author: `Friederich Nietzsche`
}, {
  cite: `Faire caca, c'est se libérer d'un poids.`,
  author: `Camille Richard`
}, {
  cite: `L'expérience est le nom que l'on donne à ses erreurs.`,
  author: `Oscar Wilde`
}, {
  cite: `Le bonheur est la plus grande des conquêtes, celle qu'on fait contre le destin qui nous est imposé.`,
  author: `Albert Camus`
}, {
  cite: `On ne devrait vivre que pour le plaisir. Rien ne vieillit comme le bonheur.`,
  author: `Oscar Wilde`
}, {
  cite: `Ne juge aucun homme avant d'avoir marché avec ses mocassins durant deux lunes.`,
  author: `Proverbe amérindien`,
  tags: ['proverbe']
}, {
  cite: `Vous ne parviendrez jamais à faire des sages si vous ne faites d'abord des polissons.`,
  author: `Jean-Jacques Rousseau`
}, {
  cite: `Ce qui étonne, étonne une fois, mais ce qui est admirable est de plus en plus admiré.`,
  author: `Joseph Joubert`
}, {
  cite: `Ce qui est admirable, ce n'est pas que le champ des étoiles soit si vaste, c'est que l'homme l'ait mesuré.`,
  author: `Anatole France`
}, {
  cite: `Le tout c'est d'avoir du génie à vingt ans et du talent à quatre-vingts.`,
  author: `Camille Corot`
}, {
  cite: `Une image vaut mille mots.`,
  author: `Confucius`
}, {
  cite: `La mesure de l'amour c'est d'aimer sans mesure.`,
  author: `Saint-Augustin`
}, {
  cite: `Noël n'est pas un jour ni une saison, c'est un état d'esprit.`,
  author: `John Calvin Coolidge`
}, {
  cite: `Il n'est pas d'hiver sans neige, de printemps sans soleil, et de joie sans être partagée.`,
  author: `Proverbe serbe`,
  tags: ['proverbe']
}, {
  cite: `Les plus beaux mots du monde ne sont que des sons inutiles si vous ne pouvez pas les comprendre.`,
  author: `Anatole France`
}, {
  cite: `Si haut que parvienne une chose lancée, c'est à terre qu'elle retourne.`,
  author: `Proverbe africain`,
  tags: ['proverbe']
}, {
  cite: `Hâte-toi de bien vivre et songe que chaque jour est à lui seul une vie.`,
  author: `Sénèque`
}, {
  cite: `Tout âge porte ses fruits, il faut savoir les cueillir.`,
  author: `Raymond Radiguet`
}, {
  cite: `Nul devoir n'est plus sous-estimé que celui d'être heureux.`,
  author: `Robert Louis Stevenson`
}, {
  cite: `Peu de gens ont le courage d'être lâches devant témoins.`,
  author: `Théophile Gautier`
}, {
  cite: `L'or te donne la terre, la terre te donne de l'or.`,
  author: `Proverbe indien`,
  tags: ['proverbe']
}, {
  cite: `Le regard est le médiateur des coeurs.`,
  author: `Anonyme`
}, {
  cite: `Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.`,
  author: `Sénèque`
}, {
  cite: `En art comme en amour, l'instinct suffit.`,
  author: `Anatole France`
}, {
  cite: `Le cadeau, dira-t-on, n'a rien de somptueux, mais venant d'un ami, tout nous est précieux.`,
  author: `Théocrite`
}, {
  cite: `La franchise ne consiste pas à dire tout ce que l'on pense mais à penser tout ce que l'on dit.`,
  author: `Proverbe tchadien`,
  tags: ['proverbe']
}, {
  cite: `Les petits cadeaux entretiennent l'amitié. Le premier qui a dit dela voulait se faire donner quelque chose.`,
  author: `Eugène Scribe`
}, {
  cite: `Les premiers sentiments sont toujours les plus naturels.`,
  author: `Madame de Sévigné`
}, {
  cite: `Qui ne peut comme il veut, doit vouloir comme il peut.`,
  author: `Térence`
}, {
  cite: `Etre jeune, c'est avoir un esprit qui calcule et un coeur qui ne calcule pas.`,
  author: `René Bazin`
}, {
  cite: `La séduction suprême n'est pas d'exprimer ses sentiments. C'est de les faire soupçonner.`,
  author: `Jules Barbey d'Aurevilly`
}, {
  cite: `L'action ne doit pas être une réaction mais une création.`,
  author: `Censier (droit féodal)`
}, {
  cite: `On ne devrait s'étonner que de pouvoir encore s'étonner.`,
  author: `François de La Rochefoucauld`
}, {
  cite: `Le coeur n'a pas de maître, il n'est pas un esclave, et de toute contrainte il sait briser l'entrave.`,
  author: `Adam Mickiewicz`
}, {
  cite: `Le passé est un phare, et non un port.`,
  author: `Proverbe russe`,
  tags: ['proverbe']
}, {
  cite: `La parole est moitié à celui qui parle, moitié à celui qui écoute.`,
  author: `Michel de Montaigne`
}, {
  cite: `Un poème est un mystère dont le lecteur doit chercher la clef.`,
  author: `Stéphane Mallarmé`
}, {
  cite: `La vie est trop courte pour être petite.`,
  author: `Proverbe anglais`,
  tags: ['proverbe']
}, {
  cite: `Dans une avalanche, aucun flocon ne se sent jamais responsable.`,
  author: `Voltaire`
}, {
  cite: `A vingt ans, c'est la volonté qui règne, à trente ans l'esprit, et à quarante le jugement.`,
  author: `Benjamin Franklin`
}, {
  cite: `Ayez le courage de ne pas savoir un grand nombre de choses afin d'éviter la certitude de ne rien savoir.`,
  author: `Sydney Smith`
}, {
  cite: `Je crois pouvoir dire d'un poste éminent et délicat qu'on y monte plus aisément qu'on ne s'y conserve.`,
  author: `Jean de La Bruyère`
}, {
  cite: `Ecrire, c'est déjà mettre du noir sur du blanc.`,
  author: `Stéphane Mallarmé`
}, {
  cite: `Il est temps de vivre la vie que tu t'es imaginée.`,
  author: `Henry James`
}, {
  cite: `Qu'importe aux coeurs unis ce qui change autour d'eux.`,
  author: `Alphonse de Lamartine`
}, {
  cite: `N'allez pas là où le chemin peut mener. Allez là où il n'y a pas de chemin et laissez une trace.`,
  author: `Ralph Waldo Emerson`
}, {
  cite: `Lorsqu'on tire sur un seul fil de la nature, on découvre qu'il est attaché au reste du monde.`,
  author: `John Muir`
}, {
  cite: `L'expérience est une lanterne que l'on porte sur le dos et qui n'éclaire jamais que le chemin parcouru.`,
  author: `Confucius`
}, {
  cite: `La nature fait les choses sans se presser, et pourtant tout est accompli.`,
  author: `Lao Zi`
}, {
  cite: `Apprends comme si tu devais vivre pour toujours et vis comme si tu devais mourir ce soir !`,
  author: `Proverbe tibétain`,
  tags: ['proverbe']
}, {
  cite: `Si tu veux être heureux, sois-le.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Le grand inconvénient des livres nouveaux est de nous empêcher de lire les anciens.`,
  author: `Joseph Joubert`
}, {
  cite: `On ne doit pas juger du mérite d'un homme par ses grandes qualités, mais par l'usage qu'il en sait faire.`,
  author: `Jean de La Bruyère`
}, {
  cite: `J'ai décidé d'être heureux, c'est meilleur pour la santé.`,
  author: `Voltaire`
}, {
  cite: `Un instant de bonheur vaut mille ans dans l'histoire.`,
  author: `Voltaire`
}, {
  cite: `Toute beauté est une joie éternelle.`,
  author: `John Keats`
}, {
  cite: `J'ai toujours préféré la folie des passions à la sagesse de l'indifférence.`,
  author: `Anatole France`
}, {
  cite: `Une joie partagée est une double joie, un chagrin partagé est un demi-chagrin.`,
  author: `Jacques Deval`
}, {
  cite: `Un seul être vous manque et tout est dépeuplé.`,
  author: `Alphonse de Lamartine`
}, {
  cite: `Si votre coeur est une rose, votre bouche dira des mots parfumés.`,
  author: `Proverbe russe`,
  tags: ['proverbe']
}, {
  cite: `Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.`,
  author: `Nicolas Boileau`
}, {
  cite: `Années de cerises rouges met le rire sur les bouches.`,
  author: `Proverbe français`,
  tags: ['proverbe']
}, {
  cite: `Quelle noblesse d'avoir un ami, mais combien plus noble d'être un ami.`,
  author: `Richard Wagner`
}, {
  cite: `Pour les femmes, la douceur est le meilleur moyen d'avoir raison.`,
  author: `Madame de Maintenon`
}, {
  cite: `La perfection est un chemin, non une fin.`,
  author: `Proverbe coréen`,
  tags: ['proverbe']
}, {
  cite: `Quiconque a bu une tasse de chocolat résiste à une journée de voyage.`,
  author: `Johann Wolfgang Von Goethe`
}, {
  cite: `Un des bonheurs de l'amitié, c'est de savoir à qui confier un secret.`,
  author: `Alessandro Manzoni`
}, {
  cite: `Dis-toi d'abord ce que tu veux être, puis fais ce qu'il faut pour le devenir.`,
  author: `Epictète`
}, {
  cite: `L'art est une démonstration dont la nature est la preuve.`,
  author: `George Sand`
}, {
  cite: `L'art d'être tantôt très audacieux et tantôt très prudent est l'art de réussir.`,
  author: `Napoléon Bonaparte`
}, {
  cite: `L’amour, c’est la fusion, l’identification de deux êtres qui s’admirent et s’adorent l’un l’autre.`,
  author: `George Sand`
}, {
  cite: `L'art de l'écrivain consiste surtout à nous faire oublier qu'il emploie des mots.`,
  author: `Henri Bergson`
}, {
  cite: `Le désordre est simplement l'ordre que nous ne cherchons pas.`,
  author: `Henri Bergson`
}, {
  cite: `Le style est comme le cristal, sa pureté fait son éclat.`,
  author: `Victor Hugo`
}, {
  cite: `L'homme devrait mettre autant d'ardeur à simplifier sa vie qu'il en met à la compliquer.`,
  author: `Henri Bergson`
}, {
  cite: `Il faut agir en homme de pensée et penser en homme d'action.`,
  author: `Henri Bergson`
}, {
  cite: `Rêver c'est se désintéresser.`,
  author: `Henri Bergson`
}, {
  cite: `Quoi que tu rêves d'entreprendre, commence-le. L'audace a du génie, du pouvoir, de la magie.`,
  author: `Johann Wolfgang Von Goethe`
}, {
  cite: `En matière de sentiment, le manque de logique est la meilleure preuve de la sincérité.`,
  author: `Léon Tolstoï`
}, {
  cite: `Le défaut de l'égalité, c'est que nous ne la voulons qu'avec nos supérieurs.`,
  author: `Henri Becque`
}, {
  cite: `Papillon, ce billet doux plié cherche une adresse de fleur.`,
  author: `Jules Renard`
}, {
  cite: `Si vous voulez que vos rêves se réalisent, ne dormez pas.`,
  author: `Proverbe juif`,
  tags: ['proverbe']
}, {
  cite: `Si les cieux pleurent, la terre vivra.`,
  author: `Proverbe hawaiien`,
  tags: ['proverbe']
}, {
  cite: `Les rêves d'un chat sont peuplés de souris.`,
  author: `Proverbe libanais`,
  tags: ['proverbe']
}, {
  cite: `Nul n'est plus chanceux que celui qui croit à sa chance.`,
  author: `Proverbe allemand`,
  tags: ['proverbe']
}, {
  cite: `On peut aussi bâtir quelque chose de beau avec les pierres qui entravent le chemin.`,
  author: `Johann Wolfgang Von Goethe`
}, {
  cite: `Tout ce que tu feras sera dérisoire, mais il est essentiel que tu le fasses.`,
  author: `Gandhi`
}, {
  cite: `La rose n'a d'épines que pour celui qui veut la cueillir.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Chaque homme cache en lui un enfant qui veut jouer..`,
  author: `Friederich Nietzsche`
}, {
  cite: `Pour savoir où l'on va, il faut savoir où l'on est.`,
  author: `Proverbe tchadien`,
  tags: ['proverbe']
}, {
  cite: `Sans la musique, la vie serait une erreur.`,
  author: `Friederich Nietzsche`
}, {
  cite: `A Noël, amusons-nous, profitons-en, car Noël ce n'est qu'une fois par an.`,
  author: `Thomas Tusser`
}, {
  cite: `Un homme sans culture, tel un chat sans moustaches, se sent perdu.`,
  author: `Anonyme`
}, {
  cite: `La science décrit la nature, la poésie la peint et l'embellit.`,
  author: `Georges-Louis Leclerc de Buffon`
}, {
  cite: `Si on ne cultive pas le bonheur comment voulez vous qu'il pousse ?`,
  author: `Poète inconnu`
}, {
  cite: `Une fleur fane même si on l'aime ; une mauvaise herbe croît même si on ne l'aime pas.`,
  author: `Dögen`
}, {
  cite: `Quand tu lances la flèche de la vérité, trempe toujours la pointe dans du miel.`,
  author: `Proverbe arabe`,
  tags: ['proverbe']
}, {
  cite: `L'espérance d'une joie est presque égale à la joie.`,
  author: `William Shakespeare`
}, {
  cite: `Qui donne ne doit jamais s'en souvenir. Qui reçoit ne doit jamais oublier.`,
  author: `Proverbe hébreu`,
  tags: ['proverbe']
}, {
  cite: `Une fois la partie terminée, le roi et le pion retournent dans la même boîte.`,
  author: `Proverbe italien`,
  tags: ['proverbe']
}, {
  cite: `Bien être : état d'esprit produit par la contemplation des ennuis d'autrui.`,
  author: `Ambrose Bierce`
}, {
  cite: `La vie, ce n'est pas d'attendre que l'orage passe, c'est d'apprendre à danser sous la pluie.`,
  author: `Sénèque`
}, {
  cite: `L'humour est une disposition d'esprit qui fait qu'on exprime avec gravité des choses frivoles et avec légèreté des choses sérieuses.`,
  author: `Afred Capus`
}, {
  cite: `Accepter l'idée d'une défaite, c'est être vaincu.`,
  author: `Maréchal Foch`
}, {
  cite: `Le but n'est pas toujours placé pour être atteint, mais pour servir de point de mire.`,
  author: `Joseph Joubert`
}, {
  cite: `Si on veut connaître un peuple, il faut écouter sa musique.`,
  author: `Platon`
}, {
  cite: `On peut peindre une fleur, mais pas son odeur.`,
  author: `Proverbe italien`,
  tags: ['proverbe']
}, {
  cite: `Parmi les cinq sens, la vue, l'ouïe et l'odorat connaissent moins d'interdits que le toucher et le goût.`,
  author: `Léonard de Vinci`
}, {
  cite: `On n'a jamais fait de grande découverte sans hypothèse audacieuse.`,
  author: `Léonard de Vinci`
}, {
  cite: `L'expérience prouve que celui qui n'a jamais confiance en personne ne sera jamais déçu.`,
  author: `Léonard de Vinci`
}, {
  cite: `L'attention de celui qui écoute sert d'accompagnement dans la musique du discours.`,
  author: `Joseph Joubert`
}, {
  cite: `L'homme n'a point de port, le temps n'a pas de rive ; Il coule et nous passons !`,
  author: `Alphonse de Lamartine`
}, {
  cite: `On se sert des couleurs, mais on peint avec le sentiment.`,
  author: `Jean Chardin`
}, {
  cite: `Si on ne peut pas rire au paradis, je ne tiens pas à y aller.`,
  author: `Martin Luther`
}, {
  cite: `L'amour n'est pas seulement un sentiment, il est un art aussi.`,
  author: `Honoré de Balzac`
}, {
  cite: `Un homme sans culture, c'est comme un zèbre sans rayure. C'est un âne.`,
  author: `Proverbe africain`,
  tags: ['proverbe']
}, {
  cite: `Nous pesons rarement dans la même balance des offenses que nous faisons et les offenses que l'on nous fait.`,
  author: `Esope`
}, {
  cite: `Il faut toujours se réserver le droit de rire le lendemain de ses idées de la veille.`,
  author: `Napoléon Bonaparte`
}, {
  cite: `Le cri du sentiment est toujours absurde ; mais il est sublime parce qu'il est absurde.`,
  author: `Charles Baudelaire`
}, {
  cite: `Lorsque les hommes travaillent ensemble, les montagnes se changent en or.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Il faut toujours bien faire ce qu'on fait, même une folie.`,
  author: `Honoré de Balzac`
}, {
  cite: `Sourire trois fois par tous les jours rend inutile tout médicament.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Le sourire est le même dans toutes les langues.`,
  author: `Proverbe mexicain`,
  tags: ['proverbe']
}, {
  cite: `Tout portrait qu'on peint avec âme est un portrait, non du modèle, mais de l'artiste.`,
  author: `Oscar Wilde`
}, {
  cite: `C'est par l'adresse que vaut le bûcheron, bien plus que par la force.`,
  author: `Homère`
}, {
  cite: `La plus perdue de toutes les journées est celle où l'on a pas ri.`,
  author: `Nicolas de Chamfort`
}, {
  cite: `Nous tissons notre destin, nous le tirons de nous comme l'araignée de la toile.`,
  author: `François Mauriac`
}, {
  cite: `Il faut faire le sacrifice de ses préférences mais pas celui de ses convictions.`,
  author: `René Bazin`
}, {
  cite: `La musique commence là où s'arrête le pouvoir des mots.`,
  author: `Richard Wagner`
}, {
  cite: `La joie n'est pas dans les choses, elle est en nous.`,
  author: `Richard Wagner`
}, {
  cite: `Toute ascension vers un endroit merveilleux se fait par un escalier en spirale.`,
  author: `François Bacon`
}, {
  cite: `La nature fait les hommes semblables, la vie les rend différents.`,
  author: `Confucius`
}, {
  cite: `Une heure de conversation vaut mieux que cinquante lettres.`,
  author: `Madame de Sévigné`
}, {
  cite: `Sabot qui brille n'est pas toujours celui qui chausse le mieux.`,
  author: `Proverbe français`,
  tags: ['proverbe']
}, {
  cite: `Ce qui est haïssable, ne le fait pas à ton prochain ; c'est là toute la loi. Le reste n'est que commentaire.`,
  author: `Rabi Hillel`
}, {
  cite: `Un rire sincère est un rayon de soleil dans une maison.`,
  author: `William Thackeray`
}, {
  cite: `Le bonheur c'est un regard, un mot, un sourire pour ceux qui s'aiment.`,
  author: `Delphine de Girardin`
}, {
  cite: `Nous sommes plus curieux du sens des rêves que des choses que nous voyons éveillés.`,
  author: `Diogène`
}, {
  cite: `Je ne te dis pas que tu es un bon à rien, je te dis que tu es mauvais en tout !`,
  author: `Le schpountz`
}, {
  cite: `Trouver n'est rien, c'est le plan qui est difficile.`,
  author: `Fiodor Dostoïevski`
}, {
  cite: `Le monde ne mourra jamais par manque de merveilles mais uniquement par manque d'émerveillement.`,
  author: `Gilbert Keith Chersterton`
}, {
  cite: `La modestie est le meilleur appât pour aller à la pêche aux compliments.`,
  author: `Gilbert Keith Chersterton`
}, {
  cite: `Une civilisation me parait se définir à la fois pas des questions qu'elle pose et par celles qu'elle ne pose pas.`,
  author: `André Malraux`
}, {
  cite: `Si vous voulez que la vie vous sourit, apportez-lui d'abord votre bonne humeur.`,
  author: `Spinoza`
}, {
  cite: `Tant de mains pour transformer ce monde, et si peu de regards pour le contempler !`,
  author: `Julien Gracq`
}, {
  cite: `Trois bougies repoussent les ténèbres ; la vérité, la connaissance et les lois de la nature.`,
  author: `Proverbe celtique`,
  tags: ['proverbe']
}, {
  cite: `Aimez les yeux ouverts.`,
  author: `Jorge Bucay`,
  tags: ['extrait']
}, {
  cite: `La beauté des choses existe dans l'esprit de celui qui les contemple.`,
  author: `David Hume`
}, {
  cite: `Lire, c'est voyager ; voyager, c'est lire.`,
  author: `Victor Hugo`
}, {
  cite: `Le bonheur n'est pas la destination, mais la manière de voyager.`,
  author: `Proverbe brésilien`,
  tags: ['proverbe']
}, {
  cite: `Un roman, c'est un miroir qu'on promène le long du chemin.`,
  author: `Stendhal`
}, {
  cite: `Le bonheur arrive à ceux qui rient.`,
  author: `Proverbe japonais`,
  tags: ['proverbe']
}, {
  cite: `Le bonheur est une chose qui se multiplie quand il se divise.`,
  author: `Proverbe brésilien`,
  tags: ['proverbe']
}, {
  cite: `Il n'est pas de plus lourd fardeau que d'avoir trop de désirs.`,
  author: `Lao Zi`
}, {
  cite: `Le plaisir de l'habitude est souvent plus doux encore que celui de la nouveauté.`,
  author: `Marcel Proust`
}, {
  cite: `La nuit n'est peut-être que la paupière du jour.`,
  author: `Omar Khayyâm`
}, {
  cite: `La patience est l'art d'espérer.`,
  author: `Luc de Vauvenargues`
}, {
  cite: `Le bonheur, c'est de continuer à désirer ce qu'on possède.`,
  author: `Friederich Nietzsche`
}, {
  cite: `Le parfait bonheur ne consiste qu'à rendre les hommes heureux.`,
  author: `Jean-Baptiste Rousseau`
}, {
  cite: `Le soir de la vie apporte avec soi sa lampe.`,
  author: `Joseph Joubert`
}, {
  cite: `Les grandes choses peuvent se manifester par de petit signes.`,
  author: `Sigmund Freud`
}, {
  cite: `Il n'y a point de chemin vers le bonheur, le bonheur est le chemin.`,
  author: `Lao Tseu`
}, {
  cite: `Le bonheur est un rêve d'enfant réalisé à l'âge adulte.`,
  author: `Sigmund Freud`
}, {
  cite: `Fais ton bonheur par le bonheur d'autrui.`,
  author: `Voltaire`
}, {
  cite: `Le bonheur est en même temps ce qu'il y a de meilleur, de plus beau et de plus agréable.`,
  author: `Aristote`
}, {
  cite: `Il ne faut pas dire oui avec la bouche et non avec le coeur.`,
  author: `Lao Tseu`
}, {
  cite: `Ne fais rien dans ta vie, qui te fasse redouter que ton voisin en prenne connaissance.`,
  author: `Epicure`
}, {
  cite: `Qu'on me donne six heures pour couper un arbre, j'en passerai quatre à préparer ma hache.`,
  author: `Abraham Lincoln`
}, {
  cite: `On met plus de passion à obtenir ce qu'on n'a pas qu'à conserver ce qu'on a.`,
  author: `Stendhal`
}, {
  cite: `Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever chaque fois.`,
  author: `Confucius`
}, {
  cite: `Les conséquences de la colère sont beaucoup plus graves que les causes.`,
  author: `Marc Aurèle`
}, {
  cite: `Chaque coup de colère est un coup de vieux, chaque sourire est un coup de jeune.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `La découverte d'un mets nouveau fait plus pour le bonheur du genre humain que la découverte d'une étoile.`,
  author: `Jean Anthelme Brillat-Savarin`
}, {
  cite: `La science est le savoir organisé. La sagesse est la vie organisée.`,
  author: `Emmanuel Kant`
}, {
  cite: `Si je rêve tout seul, cela reste un rêve. Si nous rêvons ensemble, c'est le début de la réalité.`,
  author: `Proverbe persan`,
  tags: ['pensée positive', 'proverbe']
}, {
  cite: `Il n'est pas de joie qui égale celle de se créer de nouvelles amitiés.`,
  author: `Proverbe chinois`,
  tags: ['pensée positive', 'proverbe']
}, {
  cite: `L'échec est seulement l'opportunité de recommencer d'une façon plus intelligente.`,
  author: `Henry Ford`
}, {
  cite: `N'attendez pas d'être heureux pour sourire. Souriez plutôt afin d'être heureux.`,
  author: `Edward L. Kramer`
}, {
  cite: `Cherche un arbre et laisse-lui t'apprendre le calme.`,
  author: `Eckhart Tolle`
}, {
  cite: `S'éloigner de tout rapproche un peu de l'essentiel.`,
  author: `Loïc Peyron`
}, {
  cite: `Ceux qui rêvent éveillés ont connaissance de mille choses échappent à ceux qui ne rêvent qu'endormis.`,
  author: `Edgar Allan Poe`
}, {
  cite: `Qui m'aime me suive, disait le vent.`,
  author: `Sylvain Tesson`
}, {
  cite: `Ignore toutes les choses qui t'empêchent d'avancer, en particulier celles qui sont dans ta tête.`,
  author: `Meryl Streep`
}, {
  cite: `La vie seule ne suffit pas. On a aussi besoin d'un rayon de soleil, de liberté et d'une petite fleur.`,
  author: `Hans Christian Andersen`
}, {
  cite: `Les deux jours les plus importants de votre vie sont le jour où vous êtes né et le jour où vous découvrez pourquoi.`,
  author: `Mark Twain`
}, {
  cite: `Le bonheur est souvent la seule chose que l'on puisse donner sans l'avoir, et c'est en le donnant qu'on l'acquiert.`,
  author: `Voltaire`
}, {
  cite: `La vie, c'est un livre qu'on aime, c'est un enfant qui joue à vos pieds, un outil qu'on tient bien dans sa main, un banc pour se reposer le soir devant sa maison.`,
  author: `Jean Anouilh`,
  tags: ['extrait', 'Antigone']
}, {
  cite: `Je suis ma propre muse.`,
  author: `Frida Kahlo`
}, {
  cite: `Être heureux ne signifie pas que tout est parfait. Cela signifie que vous avez décidé de regarder au-delà des imperfections.`,
  author: `Aristote`
}, {
  cite: `Seule, je ne peux pas changer le monde, mais je peux jeter une pierre dans l'eau et créer de nombreuses ondulations.`,
  author: `Mère Teresa`
}, {
  cite: `Tout ce que les hommes ont fait de beau et de bien, ils l'ont fait avec leurs rêves.`,
  author: `Bernard Moitessier`
}, {
  cite: `Nous n'avons pas besoin de magie pour changer le monde. Nous portons déjà tout le pouvoir dont nous avons besoin à l'intérieur de nous.`,
  author: `J. K. Rowling`,
  tags: ['bien-être']
}, {
  cite: `Un seul moment de joie chasse cent moments de tristesse.`,
  author: `Proverbe chinois`,
  tags: ['proverbe', 'joie']
}, {
  cite: `N'oubliez pas que la terre se réjouit de sentir vos pieds nus et que les vents joueraient volontiers avec vos cheveux.`,
  author: `Khalil Gibran`
}, {
  cite: `Il n'y a pas de honte à préférer le bonheur.`,
  author: `Albert Camus`
}, {
  cite: `Il n'est jamais trop tard pour devenir ce que l'on aurait pu être.`,
  author: `George Eliot`
}, {
  cite: `Va prendre tes leçons dans la nature.`,
  author: `Léonard de Vinci`
}, {
  cite: `Le meilleur moment pour planter un arbre, c'était il y a vingt ans. Le second, c'est maintenant.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Je ne peux rester sans rien faire...  Je vais faire la sieste.`,
  author: `Yvan Audouard`
}, {
  cite: `La vie n'est pas faite pour se trouver ; la vie est faite pour se créer.`,
  author: `George Bernard Shaw`
}, {
  cite: `On voit mourir toute chose animée lorsque du corps l'âme subtile part. Je suis le corps, toi la meilleure part: Où es-tu donc, ö âme bien-aimée ?`,
  author: `Louise Labé`,
  tags: ['extrait', 'Sonnet VII']
}, {
  cite: `Dans la vie. Rien n'est à craindre. Tout est à comprendre.`,
  author: `Marie Curie`
}, {
  cite: `Rien n'est jamais fini. Il suffit d'un peu de bonheur pour que tout recommence.`,
  author: `Emile Zola`,
  tags: ['extrait', 'Germinal']
}, {
  cite: `Entourez-vous de choses qui vous rendent vraiment heureux.`,
  author: `Marie Kondo`
}, {
  cite: `Il se faut s'entraider c'est la loi de nature.`,
  author: `Jean de La Fontaine`
}, {
  cite: `Après le verbe aimer, aider est le plus beau verbe du monde.`,
  author: `Baronne Berthe Von Suttner`
}, {
  cite: `La curiosité est une gourmandise: voir, c'est dévorer.`,
  author: `Victor Hugo`
}, {
  cite: `La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.`,
  author: `Mère Teresa`
}, {
  cite: `Quelle musique, le silence !`,
  author: `Jean Anouilh`
}, {
  cite: `Le temps est notre ami.`,
  author: `Christine Cayol`
}, {
  cite: `Sans effort d'imagination, ou de rêves, nous perdons l'excitation des possibilités. Après tout, rêver est une sorte de planification.`,
  author: `Gloria Steinen`
}, {
  cite: `Je souhaite dans ma maison, Une femme ayant sa raison, Un chat passant parmi les livres, Des amis en toute saison Sans lesquels je ne peux pas vivre.`,
  author: `Guillaume Apollinaire`
}, {
  cite: `Grâce aux rêves le monde a été réinventé plus souvent qu'il n'y a d'étoiles dans le ciel.`,
  author: `Lloyd Jones`
}, {
  cite: `Ne garde rien de ce qui t'a fait tant de mal, les lettres, les photos, les listes dee courses, les partitions, les marque-pages. Ne garde rien, ne jette rien non plus, fais-en cadeau à quelqu'un qui trouvera ça beau.`,
  author: `Cécile Coulon`,
  tags: ['extrait', 'Les Ronces']
}, {
  cite: `Ne laissez personne vous voler votre imagination, votre créativité ou votre curiosité. C'est votre place dans le monde, c'est votre vie.`,
  author: `Mae C. Jemison`
}, {
  cite: `Si tu n'arrives pas à penser, marche ; Si tu penses trop, marche ; Si tu penses mal, marche encore.`,
  author: `Jean Giono`
}, {
  cite: `Le ciel étoilé offre une leçon de sagesse à qui sait le regarder: s'y perdre. C'est se trouver.`,
  author: `Michel Onfray`
}, {
  cite: `Ne renoncez pas à faire ce que vous voulez vraiment faire. Là où il y a des rêves, de l'amour et de l'inspiration, vous ne pourrez pas vous tromper.`,
  author: `Ella Fitzgerald`
}, {
  cite: `Le succès est de vous aimer, d'aimer ce que vous faites et d'aimer la façon dont vous le faites.`,
  author: `Maya Angelou`
}, {
  cite: `Ne cessez jamais d'être fantasque. Et ne donnez jamais à qui que ce soit la responsabilité de votre vie..`,
  author: `Mary Oliver`
}, {
  cite: `La joie est en tout, il faut savoir l'extraire.`,
  author: `Mary Oliver`
}, {
  cite: `La vie est une grande toile vierge: à vous d'y ajouter le plus de couleurs possible.`,
  author: `Danny Kaye`
}, {
  cite: `Quand je me promène, je sens toujours qu'au coin de la rue. Il y a quelque chose de merveilleux qui m'attend.`,
  author: `Sophia Loren`
}, {
  cite: `Le bonheur est un seul bouquet : confus léger fondant sucré.`,
  author: `Paul Eluard`
}, {
  cite: `Qui sème le silence récolte la paix.`,
  author: `Proverbe thaïlandais`,
  tags: ['proverbe']
}, {
  cite: `La vie a beaucoup plus d'imagination que nous.`,
  author: `François Truffaut`
}, {
  cite: `Le vrai bonheur serait de se souvenir du présent.`,
  author: `Jules Renard`
}, {
  cite: `Les erreurs ne se regrettent pas, elles s'assument. La peur ne se fuit pas, elle se surmonte. L'amour ne se crie pas, il se prouve !`,
  author: `Simone Weil`
}, {
  cite: `Il ne faut pas se mettre en colère contre les choses, cela ne leur fait absolument rien.`,
  author: `Germaine de Staël`
}, {
  cite: `Le bout du monde est le fond du jardin contiennent la même quantité de merveilles.`,
  author: `Christian Bobin`
}, {
  cite: `Vivre c'est aider un autre à vivre.`,
  author: `Jacques de Bourbon Busser`
}, {
  cite: `La véritable amitié ne gèle pas en hiver.`,
  author: `Proverbe allemand`,
  tags: ['proverbe']
}, {
  cite: `L'art est le plus beau des mensonges.`,
  author: `Claude Debussy`
}, {
  cite: `Ralentissez et tout devient plus beau.`,
  author: `David Lynch`
}, {
  cite: `Ecris sur ton coeur que chaque jour est le plus beau jour de l'année.`,
  author: `Ralph Waldo Emerson`
}, {
  cite: `Le plus grand échec est de ne pas avoir le courage d'oser.`,
  author: `Abbé Pierre`
}, {
  cite: `Avant de vous diagnostiquer comme dépressif ou en état de faible estime de vous-même, commencez par vous assurer que vous n'êtes juste pas, en fait, entouré par des trous du cul.`,
  author: `William Gibson`
}, {
  cite: `L'appétit vient en mangeant, la soif disparait en buvant.`,
  author: `François Rabelais`
}, {
  cite: `Le créateur, en obligeant l'homme à manger pour vivre, l'y invite par l'appétit et le récompense par le plaisir.`,
  author: `Jean Anthelme Brillat-Savarin`
}, {
  cite: `La gourmandise commence quand on n'a plus faim.`,
  author: `Alphonse Daudet`
}, {
  cite: `Si vous n'êtes pas capable d'un peu de sorcellerie, ce n'est pas la peine de vous mêler de cuisine.`,
  author: `Colette`
}, {
  cite: `Bien manger, c'est atteindre le ciel.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Si je pétais tout ce que j'ai mangé, je serais sur la lune.`,
  author: `Camille Richard`
}, {
  cite: `La joie prolonge la vie.`,
  author: `Ben Sira`
}, {
  cite: `La bouche garde le silence pour écouter parler le coeur.`,
  author: `Alfred de Musset`
}, {
  cite: `Il n'y a qu'une sorte d'amour, mais il y en a mille différentes copies.`,
  author: `François de La Rochefoucauld`
}, {
  cite: `La vie est courte, mais un sourire ne prend qu'une seconde.`,
  author: `Proverbe cubain`,
  tags: ['proverbe']
}, {
  cite: `Au milieu de l'hiver, j'ai découvert en moi un invincible été.`,
  author: `Albert Camus`
}, {
  cite: `Le voyage est un retour vers l'essentiel.`,
  author: `Proverbe tibétain`,
  tags: ['proverbe']
}, {
  cite: `Le bonheur est une petite chose que l'on grignote, assis par terre, au soleil.`,
  author: `Jean Giraudoux`
}, {
  cite: `Fais du bien à ton corps pour que ton âme ait envie d'y rester.`,
  author: `Proverbe indien`,
  tags: ['proverbe']
}, {
  cite: `Le bonheur a les bras ouverts et les yeux fermés.`,
  author: `Proverbe allemand`,
  tags: ['proverbe']
}, {
  cite: `Hâtons-nous de succomber à la tentation avant qu'elle ne s'éloigne.`,
  author: `Epicure`
}, {
  cite: `Il faut toujours viser la lune, car même en cas d'échec, on atterrit dans les étoiles.`,
  author: `Oscar Wilde`
}, {
  cite: `Vivre de telle sorte qu'il te faille désirer revivre, c'est là ton devoir.`,
  author: `Nietzsche`
}, {
  cite: `Les oreilles et les yeux sont les portes et les fenêtres de l'âme.`,
  author: `Joseph Joubert`
}, {
  cite: `Quelle flamme pourrait égaler le rayon de soleil d'un jour d'hiver ?`,
  author: `Henry David Thoreau`
}, {
  cite: `Grand est celui qui n'a pas perdu son coeur d'enfant.`,
  author: `Meng-Tsen`
}, {
  cite: `Je cherche les petites notes qui s'aiment.`,
  author: `Wolfgang Amadeus Mozart`
}, {
  cite: `La vrai générosité envers l'avenir consiste à tout donner au présent.`,
  author: `Albert Camus`,
  tags: ['générosité']
}, {
  cite: `L'été, un éblouissement comme est la neige, Celle qui vient légère et ne dure pas, et rien de nous n'en trouble la lumière D'eau qui s'est condensée puis s'évapore.`,
  author: `Yves Bonnefoy`,
  tags: []
}, {
  cite: `Noël n'est pas une saison, c'est un sentiment.`,
  author: `Edna Ferber`,
  tags: ['fête']
}, {
  cite: `Noël est là, ce joyeux noël, des cadeaux plein les bras, qui réchauffe nos coeurs et apporte la joie, jour des plus beaux souvenirs, plus beau jour de l'année.`,
  author: `Washington Irving`,
  tags: ['noël']
}, {
  cite: `La chose la plus commune, dès qu'on nous la cache, devient un délice.`,
  author: `Oscar Wilde`,
  tags: ['curiosité']
}, {
  cite: `Le bonheur n'est pas chose aisée. Il est très difficile de le trouver en nous, il est impossible de le trouver ailleurs.`,
  author: `Bouddha`,
  tags: ['bonheur', 'pensée']
}, {
  cite: `Entre amis, il est si beau que le silence soit d'or, mais le rire bon et frais l'est beaucoup plus encore.`,
  author: `Friederich Nietzsche`,
  tags: ['amitié']
}, {
  cite: `L'art vise à imprimer en nous des sentiments plutôt qu'à les exprimer.`,
  author: `Henri Bergson`,
  tags: ['art']
}, {
  cite: `Les hommes naissent ignorants, pas stupides, la stupidité est le résultat de l'éducation.`,
  author: `Bertrand Russell`,
  tags: ['éducation', 'intelligence']
}, {
  cite: `Il n'y a rien d'impossible quand on s'aime.`,
  author: `George Sand`,
  tags: ['amour']
}, {
  cite: `Il n'est pas de joie qui égale celle de se créer de nouvelles amitiés.`,
  author: `Proverbe japonais`,
  tags: ['proverbe']
}, {
  cite: `Veux-tu vivre heureux ? Voyage avec deux sacs, l'un pour donner, l'autre pour recevoir.`,
  author: `Johann Wolfgang Von Goethe`,
  tags: ['bonheur']
}, {
  cite: `La véritable indulgence consiste à comprendre et à pardonner les fautes qu'on ne serait pas capable de commettre.`,
  author: `Victor Hugo`,
  tags: ['pardon']
}, {
  cite: `Le plus grand secret pour le bonheur, c'est d'être bien avec soi.`,
  author: `Bernard Le Bouyer de Fontenelle`,
  tags: ['bonheur', 'bien-être']
}, {
  cite: `L'amitié double les joies et réduit de moitié les peines.`,
  author: `Francis Bacon`,
  tags: ['amitié']
}, {
  cite: `Tous les trésors de la terre ne valent pas le bonheur d'être aimé.`,
  author: `Calderon`,
  tags: ['amour']
}, {
  cite: `Il y a trois sortes de savoir : le savoir proprement dit, le savoir-faire et le savoir-vivre ; les deux derners dispensent assez bien du premier.`,
  author: `Charles Maurice de Talleyrand-Périgord`,
  tags: []
}, {
  cite: `Si vous avez confiance en vous-même, vous inspirerez confiance aux autres.`,
  author: `Johann Wolfgang Von Goethe`,
  tags: ['confiance']
}, {
  cite: `Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.`,
  author: `Antoine de Saint-Exupéry`,
  tags: ['amour']
}, {
  cite: `Il n'y a qu'un chemin possible pour le bonheur, c'est de cesser de nous tracasser pour des choses qui ne dépendent pas de notre volonté.`,
  author: `Epictète`,
  tags: ['bonheur']
}, {
  cite: `Là où le coeur est, les pieds n'hésitent pas à y aller.`,
  author: `Proverbe togolais`,
  tags: ['proverbe']
}, {
  cite: `Vis comme si tu devais mourir demain, apprends comme si tu devais vivre toujours.`,
  author: `Gandhi`,
  tags: ['motivation']
}, {
  cite: `Le contraire de la misère ce n'est pas la richesse. Le contraire de la misère, c'est le partage.`,
  author: `Abbé Pierre`,
  tags: ['partage']
}, {
  cite: `Chaque fois que l'on refuse 1 milliard pour le logement, c'est 10 milliards que l'on prépare pour les tribunaux, les prisons, les asiles de fous.`,
  author: `Abbé Pierre`,
  tags: ['perspective']
}, {
  cite: `La vie est un mystère qu'il faut vivre, et non un problème qu'il faut résoudre.`,
  author: `Gandhi`,
  tags: []
}, {
  cite: `La pensée n'est qu'un éclair qu milieu de la nuit. Mais c'est un éclair qui est tout.`,
  author: `Henri Pointcaré`,
  tags: []
}, {
  cite: `Le bonheur ne vient pas à ceux qui l'attendent assis.`,
  author: `Baden-Powell`,
  tags: ['bonheur']
}, {
  cite: `Le savant est fier d'avoir tant appris ; le sage est humble d'en savoir si peu.`,
  author: `William Cowper`,
  tags: []
}, {
  cite: `Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions.`,
  author: `Confucius`,
  tags: ['savoir']
}, {
  cite: `Rien ne peut résister à l'assaut du rire.`,
  author: `Mark Twain`,
  tags: ['rire']
}, {
  cite: `Celui qui a rendu service doit se taire, c'est à celui qui l'a reçu de parler.`,
  author: `Sénèque`,
  tags: []
}, {
  cite: `Curiosité n'est que vanité. Le plus souvent, on ne veut savoir que pour en parler.`,
  author: `Blaise Pascal`,
  tags: []
}, {
  cite: `L'erreur n'annule pas la valeur de l'effort accompli.`,
  author: `Proverbe africain`,
  tags: ['proverbe']
}, {
  cite: `L'art est une démonstration dont la nature est la preuve.`,
  author: `George Sand`,
  tags: []
}, {
  cite: `Le meilleur moyen de teninr sa parole est de ne jamais la donner.`,
  author: `Napoléon Bonaparte`,
  tags: []
}, {
  cite: `Les mots me font l'effet d'un pensionnat de petits garçons que la phrase mène en promenade.`,
  author: `Georges Courteline`,
  tags: ['littérature']
}, {
  cite: `Chacun est une lune, avec une face cachée.`,
  author: `Mark Twain`,
  tags: []
}, {
  cite: `Il faut deux ans pour apprendre à parler et toute une vie pour apprendre à se taire.`,
  author: `Proverbe chinois`,
  tags: ['proverbe']
}, {
  cite: `Deux choses instruisent l'homme de toute sa nature : l'instinct et l'expérience.`,
  author: `Blaise Pascal`,
  tags: []
}, {
  cite: `La critique est une chose bien commode : on attaque avec un mot, il faut des pages pour se défendre.`,
  author: `Jean-Jacques Rousseau`,
  tags: []
}, {
  cite: `L'amour n'est pas aveugle, il est aveuglant.`,
  author: `Yvan Audouard`,
  tags: ['amour']
}, {
  cite: `Une lecture amusante est aussi utile à la santé que l'exercice du corps.`,
  author: `Emmanuel Kant`,
  tags: []
}, {
  cite: `Touché par l'amour, tout homme devient poète.`,
  author: `Platon`,
  tags: ['amour']
}, {
  cite: `Il n'y a rien de plus triste qu'une vie sans hasard.`,
  author: `Honoré de Balzac`,
  tags: []
}, {
  cite: `La colère est comme une avalanche qui se brise sur ce qu'elle brise.`,
  author: `Sénèque`,
  tags: []
}, {
  cite: `Les merveilles naissent sans qu'on les sème.`,
  author: `Proverbe provençal`,
  tags: ['proverbe']
}, {
  cite: `Le silence est un ami qui ne trahit jamais.`,
  author: `Confucius`,
  tags: []
}, {
  cite: `Ecrire c'est une façon sans être interrompu.`,
  author: `Jules Renard`,
  tags: []
}, {
  cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`,
  author: `Jules Renard`,
  tags: ['connaissance']
}, {
  cite: `C'est Noël dans le coeur qui met Noël dans l'air.`,
  author: `William Thomas Ellis`,
  tags: ['noël']
}, {
  cite: `Un mois avant, un mois après Noël, le froid est bon et naturel.`,
  author: `Proverbe français`,
  tags: ['adage', 'proverbe', 'noël']
}, {
  cite: `Noël, c'est le printemps de l'esprit ; c'est tout promesse.`,
  author: `Alain`,
  tags: ['noël', 'Emile-Auguste Chartier', 'extrait', `Les saisons de l'esprit`]
}, {
  cite: `Il ne faut pas chercher à rajouter des années à sa vie, mais plutôt essayer de rajouter de la vie à ses années.`,
  author: `John Fitzgerald Kennedy`,
  tags: ['vie']
}, {
  cite: `Qu'elle soit nécessaire, ou même justifiée, ne croyez jamais que la guerre n'est pas un crime.`,
  author: `Ernest Hemingway`,
  tags: ['guerre', 'crime']
}, {
  cite: `La joie de vivre est une émotion contagieuse.`,
  author: `Edward D. Wynot`,
  tags: ['bonheur']
}, {
  cite: `La beauté commence le jour où tu décides d'être toi-même.`,
  author: `Coco Chanel`,
  tags: []
}, {
  cite: `Quand la vie te donne un lundi, plonge-le dans les paillettes et scintille toue la journée.`,
  author: `Ella Woodward`,
  tags: ['bonheur', 'difficultée']
}, {
  cite: `Sors des sentiers battus. Explore. Rêve. Découvre.`,
  author: `Mark Twain`,
  tags: []
}, {
  cite: `Je ne veux désormais collectionner que les moments de bonheur.`,
  author: `Stendhal`,
  tags: ['bonheur']
}, {
  cite: `Soyez vous-même, les autres sont déjà pris.`,
  author: `Oscar Wilde`,
  tags: []
}, {
  cite: `Je ne perds jamais, soit je gagne, soit j'apprends.`,
  author: `Nelson Mandela`,
  tags: []
}, {
  cite: `Fais de ta vie un rêve, et d'un rêve une réalité.`,
  author: `Antoinde de Saint-Exupéry`,
  tags: ['Rêve']
}, {
  cite: `Il n'y a rien de mieux qu'un ami. Sauf peut-être un ami avec du chocolat.`,
  author: `Lynda Grayson`,
  tags: ['amitié']
}, {
  cite: `Je peux le faire et le ferai. Vous pouvez commencer à regarder.`,
  author: `Carry Green`,
  tags: []
}, {
  cite: `"C'est impossible" di la fierté. "C'est risqué" dit l'expérience. "C'est sans issue" dit la raison."Essayons" mlurmure le coeur.`,
  author: `William Arthur Ward`,
  tags: []
}, {
  cite: `La vie, c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.`,
  author: `Winston groom`,
  tags: ['extrait', 'Forrest Gump']
}, {
  cite: `Donne à chaque jour la chance de devenir le plus beau jour de ta vie.`,
  author: `Makr Twain`,
  tags: ['bonheur']
}, {
  cite: `Tous les enfants ont du génie, le tout c'est de le faire apparaître.`,
  author: `Charlie Chaplin`,
  tags: ['enfance']
}, {
  cite: `La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.`,
  author: `Albert Einstein`,
  tags: []
}, {
  cite: `Il ne faut pas attendre d'être parfait pour commencer quelque chose de bien.`,
  author: `Abbé Pierre`,
  tags: []
}, {
  cite: `J'ai un petit côté sirène. Certains jours, on dirait que je me suis peignée avec une fourchette.`,
  author: `Emmanuelle Cortes`,
  tags: []
}, {
  cite: `Il n'y a aucune limite à ce que nous pouvons accomplir en tant que filles.`,
  author: `Michelle Obama`,
  tags: ['féminisme']
}, {
  cite: `Il y a deux choses qui changent notre vie : les gens que nous rencontrons et les livres que nous lisons.`,
  author: `Harvey MacKay`,
  tags: []
}, {
  cite: `Une journée sans rire est une journée de perdue.`,
  author: `Charlie Chaplin`,
  tags: ['rire', 'bonheur']
}, {
  cite: `N'oublions pas : un livre, un stylo, un enfant et un enseignant peuvent changer le monde.`,
  author: `Malala Yousazai`,
  tags: []
}, {
  cite: `Don't worry, be happy.`,
  author: `Bob Marley`,
  tags: ['Chanson']
}, {
  cite: `I have a dream.`,
  author: `Martin Luther King`,
  tags: []
}, {
  cite: `Neuf personnes sur dix aiment le chocolat ; la dixième ment.`,
  author: `John G. Tullius`,
  tags: []
}, {
  cite: `Mais alors, si le monde n'a absolument aucun sens, qu'est ce qui nous empêche d'en inventer un ?.`,
  author: `Lewis Caroll`,
  tags: []
}, {
  cite: `Le bonheur vient vers ceux qui croient en lui.`,
  author: `Ali Obn Abu Talib`,
  tags: ['bonheur']
}, {
  cite: `Pour être irremplaçable, il faut être différente.`,
  author: `Coco Chanel`,
  tags: []
}, {
  cite: `Être en vacances, c'est n'avoir rien à faire et avoir toute la journée pour le faire.`,
  author: `Robert Orban`,
  tags: ['vacance', 'oisiveté']
}, {
  cite: `On n'a jamais autant besoin de vacances que lorsqu'on en revient.`,
  author: `Ann Landers`,
  tags: ['fatigue']
}, {
  cite: `Celui qui dit que le bonheur ne s'achète pas à oublié qu'il y a les petits chiots.`,
  author: `Gene Hill`,
  tags: ['bonheur', 'capitalisme']
}, {
  cite: `Le secret du bonheuret le comble de l'art, c'est de vivre comme tout le monde, en n'étant comme personne.`,
  author: `Simone de Beauvoir`,
  tags: []
}, {
  cite: `La fin d'une chose marque le commencement d'une nouvelle.`,
  author: `Antoine de Saint-Exupéry`,
  tags: []
}, {
  cite: `La musique donne une âme à nos coeurs et des ailes à la pensée.`,
  author: `Platon`,
  tags: []
}, {
  cite: `Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.`,
  author: `Abbé Pierre`,
  tags: []
}, {
  cite: `Les grandes choses peuvent se manifester par de petits signes.`,
  author: `Freud`,
  tags: []
}, {
  cite: `Aimer une personne pour son apparence, c'est comme aimer un livre pour sa reliure.`,
  author: `Laure Conan`,
  tags: ['amour']
}, {
  cite: `Si nous voulons nous pardonner les uns aux autres, commençons d'abord par nous comprendre les uns les autres.`,
  author: `Emma Goldman`,
  tags: ['pardon']
}, {
  cite: `Ceux qui ne bougent pas, ne remarquent pas leur chaînes.`,
  author: `Rosa Luxembourg`,
  tags: ['liberté']
}, {
  cite: `La révolution sera la floraison de l'humanité comme l'amour est la floraison du coeur.`,
  author: `Louise Michel`,
  tags: ['amour', 'liberté']
}, {
  cite: `Ne jamais se laisser abattre par des personnes ou par des événements.`,
  author: `Marie Curie`,
  tags: []
}, {
  cite: `Si nous faisions tout ce que nous sommes capables de faire, nous en serions abasourdis.`,
  author: `Thomas Edison`,
  tags: []
}, {
  cite: `Si ta volonté te lâche, dépasse-la !.`,
  author: `Emily Dickinson`,
  tags: ['ostination']
}, {
  cite: `Que cette année vous soit heureuse ; que la paix, le repos et la santé vous tiennent lieu de fortune.`,
  author: `Madame de Sévigné`,
  tags: []
}, {
  cite: `Le véritable amour ne connaît ni le soupçon ni la méfiance.`,
  author: `George Sand`,
  tags: ['amour']
}, {
  cite: `Un des bonheurs de l'amitié c'est d'avoir à qui confier un secret.`,
  author: `Alessandro Mansoni`,
  tags: ['amitié']
}, {
  cite: `Le bonheur tient dans la main, il suffit d'un tout petit rien, mais beaucoup de coeur pour qu'il sonne l'heure.`,
  author: `Josiane Coeijmans`,
  tags: ['bonheur']
}, {
  cite: `Tout s'arrange sous l'influence d'une pensée heureuse et optimiste.`,
  author: `George Sand`,
  tags: []
}, {
  cite: `Le courage est le prix que la vie exige pour accorder la paix.`,
  author: `Amelia Earhart`,
  tags: ['courage']
}, {
  cite: `Impossible de bien réfléchir, de bien aimer, de bien dormir si on n'a pas mangé.`,
  author: `Virginia Woolf`,
  tags: ['nourriture']
}, {
  cite: `Chacun recèle en lui une forêt vierge, une étendue de neige où nul oiseau n'a laissé son empreinte.`,
  author: `Virginia Woolf`,
  tags: []
}, {
  cite: `Ma devise - sans limites.`,
  author: `Isadora Duncan`,
  tags: []
}, {
  cite: `Forte comme un homme, plus forte que la plupart d'entre eux.`,
  author: `Lozen`,
  tags: ['féminisme']
}, {
  cite: `L'amour a d'autres yeux que le commun des hommes.`,
  author: `Jean Racine`,
  tags: ['amour']
}, {
  cite: `N'oublions jamais que Noël est le souci du vrai partage, ce n'est pas un miracle, mais une façon de vivre quotidien.`,
  author: `Josiane Coeijmans`,
  tags: ['Noël']
}, {
  cite: `Une lumière ici requiert une ombre là-bas.`,
  author: `Virginia Woolf`,
  tags: []
}, {
  cite: `La femme est précieuse, elle donne naissance aux enfants.`,
  author: `Olympe de Gouges`,
  tags: []
}, {
  cite: `Les plus beaux livres sont ceux qui n'ont jamais été écrits.`,
  author: `Anatole France`,
  tags: ['litérature']
}, {
  cite: `Je n'enseigne pas aux enfants, je leur donne de la joie.`,
  author: `Isadora Duncan`,
  tags: ['bonheur']
}, {
  cite: `La danse est le mouvement de l'univers concentré dans un individu.`,
  author: `Isadora Duncan`,
  tags: []
}, {
  cite: `La paresse peut paraître attrayante, mais le travail apporte la satisfaction.`,
  author: `Anne Frank`,
  tags: ['travail']
}, {
  cite: `Un livre, c'est un billet de voyage à la portée de tous.`,
  author: `Josiane Coeijmans`,
  tags: ['litérature']
}, {
  cite: `Tous les secrets de l'âme d'un auteur, toutes sses expériences, toutes les qualités de son esprit sont gravés dans son oeuvre.`,
  author: `Virginia Woolf`,
  tags: ['litérature']
}, {
  cite: `N'oubliez pas qu'il faut prendre la vie avec sérénité et joie quoi qu'il arrive.`,
  author: `Rosa Luxembourg`,
  tags: ['bonheur', 'joie']
}, {
  cite: `L'humour est le premier des dons à périr dans une langue étrangère.`,
  author: `Virginia Woolf`,
  tags: ['humour']
}, {
  cite: `D'une façon générale, on ne doit pas oublier d'être bon, car la bonté, dans les relations avec les hommes, fait bien plus qua la sévérité.`,
  author: `Rosa Luxembourg`,
  tags: []
}, {
  cite: `Prenez-moi tout mais laissez-moi l'extase et je serai plus riche que mes semblables.`,
  author: `Emily Dickinson`,
  tags: ['plaisir']
}, {
  cite: `Quand on a bonne conscience, c'est Noël en permanence.`,
  author: `Benjamin Franklin`,
  tags: ['honnêteté']
}, {
  cite: `Si la vie est un roman, prends ta plume et viens écrire avec moi, les plus beaux chapitres.`,
  author: `Josiane Coeijmans`,
  tags: ['amour']
}, {
  cite: `Notre plus grande faiblesse réside dans l'abandon ; la façon la plus sûre de réussir est d'essayer une autre fois.`,
  author: `Thomas Edison`,
  tags: ['succès', 'persévérance']
}, {
  cite: `Le courage croit en osant et la peur en hésitant.`,
  author: `Proverbe romain`,
  tags: ['courage', 'peur']
}, {
  cite: `Dans les grandes choses, avant l'effort qui réussit, il y a presque toujours des efforts qui passent inaperçus.`,
  author: `Laure Conan`,
  tags: []
}, {
  cite: `Le bonheur, c'est cet instant, cette lueur qui embellit le jour et rejaillit sur autrui.`,
  author: `Josiane Coeijmans`,
  tags: ['bonheur']
}, {
  cite: `Les choses n'arrivent quasi jamais comme on se les imagine.`,
  author: `Madame de Sévigné`,
  tags: ['hasard']
}, {
  cite: `Il n’y a pas plus de raison de trop s’accuser de ses défauts que de s’en trop excuser.`,
  author: `Madeleine de Souvré`,
  tags: ['humilité', 'confiance']
}, {
  cite: `La nature est éternellement jeune, belle et généreuse. Elle verse la poésie et la beauté à tous les êtres, à toutes les plantes, qu'on laisse s'y développer.`,
  author: `George Sand`,
  tags: []
}, {
  cite: `La famille, c'est l'amour sans regrets et sans amertume.`,
  author: `Ninon de Lenclos`,
  tags: ['amour']
}, {
  cite: `Cultive tes pensées, des fleurs pourraient en fleurir.`,
  author: `Josiane Coeijmans`,
  tags: ['pensée']
}, {
  cite: `Il n'appartient qu'à celle que le hasard a élevée à une place éminente, de donner du poids à l'essor des Droits de la Femme et d'en accélérer les succès.`,
  author: `Olympe de Gouges`,
  tags: []
}, {
  cite: `L'amour a un caractère si particulier qu'on ne peut le cacher où il est, ni le feindre où il n'est pas.`,
  author: `Madeleine de Souvré`,
  tags: ['amour']
}, {
  cite: `La vie chante aussi dans le sable qui craque sous les pas lents et lourds des gardes, quand on sait l'écouter.`,
  author: `Rosa Luxemburg`,
  tags: []
}, {
  cite: `La gastronomie fait trembler d'intelligence nos narines.`,
  author: `Charles Monselet`,
  tags: ['épicurien']
}, {
  cite: `Quand on rentre en soi-même, on s'aperçoit qu'on possède exactement ce que l'on désirait.`,
  author: `Simone Weil`,
  tags: []
}, {
  cite: `Les choses ne sont pas bonnes parce qu'elles sont vieilles, elles sont vieilles parce qu'elles sont bonnes.`,
  author: `A. Toulouse`,
  tags: []
}, {
  cite: `Nous devons croire que nous sommes doués pour quelque chose, et que cette chose, à n'importe quel prix, doit être atteinte.`,
  author: `Marie Curie`,
  tags: ['confiance']
}, {
  cite: `Soyez des hommes ou mieux : des surhommes. Soyez fidèles aux buts tracés.`,
  author: `Mary Shelley`,
  tags: []
}, {
  cite: `Je suis une femme libre.`,
  author: `Olympe de Gouges`,
  tags: ['féminisme']
}, {
  cite: `Je fais le plus de choses que je peux par amour pour me reposer d'en faire tant par nécessité.`,
  author: `Marie Noël`,
  tags: []
}, {
  cite: `Les chefs-d'oeuvres ne sont jamais que des tentatives heureuses.`,
  author: `George Sand`,
  tags: ['chance']
}, {
  cite: `Les détails font la perfection, et la perfection n'est pas un détail.`,
  author: `Léonard de Vinci`,
  tags: []
}, {
  cite: `Je fais le plus de choses que je peux par amour pour me reposer d'en faire tant par nécessité.`,
  author: `Marie Noël`,
  tags: ['amour']
}, {
  cite: `Celui même qui veut écrire son rêve se doit d'être infiniment éveillé.`,
  author: `Paul Valéry`,
  tags: []
}, {
  cite: `Le beau est ce qu'on ne peut pas vouloir change.`,
  author: `Simone Weil`,
  tags: []
}, {
  cite: `C'est le miracle de l'amour de n'avoir pas besoin de mots pour se comprendre.`,
  author: `Laure Conan`,
  tags: ['amour']
}, {
  cite: `L'attention est la forme la plus rare et la plus pure de la générosité.`,
  author: `Simone Weil`,
  tags: []
}
// {cite: `.`, author: ``, tags: []},
];
// 2 juillet / 10 juin
// Because RxJs is the life, so we don't export array, but an Observable. It will be used by the service to share data with the application
const cites = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(data).pipe(
// filter to prevent duplicated rows
(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinct)(({
  cite
}) => cite),
// transform each item into a Cite Object
(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((next, index) => {
  return new _models_Cite__WEBPACK_IMPORTED_MODULE_0__.Cite().setId(index).setCite(next.cite).setAuthor(next.author).setTags(next.tags);
}),
// restore into one stream of items (from() will send a complete event that allows toArray() to be triggered)
(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.toArray)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1) // auto unsubscribe, force complete
);

/***/ }),

/***/ 1298:
/*!***********************************!*\
  !*** ./src/app/models/Authors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Author: () => (/* binding */ Author)
/* harmony export */ });
class Author {
  constructor(name, count = 1) {
    this.name = name;
    this.count = count;
  }
  getName() {
    return this.name;
  }
  getCount() {
    return this.count;
  }
  addCount() {
    this.count++;
    return this.count;
  }
}

/***/ }),

/***/ 1285:
/*!********************************!*\
  !*** ./src/app/models/Cite.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cite: () => (/* binding */ Cite)
/* harmony export */ });
class Cite {
  constructor() {
    this.tags = [];
    this.tags = [];
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
    return this;
  }
  getAuthor() {
    return this.author;
  }
  setAuthor(author) {
    this.author = author;
    return this;
  }
  getCite() {
    return this.cite;
  }
  setCite(cite) {
    this.cite = cite;
    return this;
  }
  getTags() {
    return this.tags;
  }
  setTags(tags = []) {
    this.tags = tags;
    return this;
  }
  addTag(tag) {
    if (!this.tags.includes(tag.trim())) {
      this.tags.push(tag.trim());
    }
    return this;
  }
  hasTags() {
    return !!this.tags.length;
  }
}

/***/ }),

/***/ 8073:
/*!***********************************!*\
  !*** ./src/app/services/Cites.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cites: () => (/* binding */ Cites)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4611);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1414);
/* harmony import */ var _fixtures_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fixtures/data */ 8193);
/* harmony import */ var _models_Cite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Cite */ 1285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _tools_CiteOfTheDay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/CiteOfTheDay.service */ 4276);






class Cites {
  constructor(router, citeOfTheDay) {
    this.router = router;
    this.citeOfTheDay = citeOfTheDay;
    this.originalCites = [];
    this.cites = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.cites$ = this.cites.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(value => !!value),
    // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
    // won't alter every subcriber that has saved the data
    // map(next => rfdc()(next)), // @todo find why it destroy the original object : Cite
    // become a simple object & the proto is not copied
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(next => {
      return next.map(cite => {
        const newCite = new _models_Cite__WEBPACK_IMPORTED_MODULE_1__.Cite();
        newCite.setId(cite.getId()).setAuthor(cite.getAuthor()).setCite(cite.getCite()).setTags(cite.getTags());
        return newCite;
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinct)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1) // auto unsubscribe, force complete
    );
    // local cache for the counter
    this.count = 0;
    _fixtures_data__WEBPACK_IMPORTED_MODULE_0__.cites.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(next => this.originalCites = next), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(next => this.count = next.length), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.reset())).subscribe();
  }
  reset() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.originalCites).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(value => !!value), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(next => this.cites.next(next)));
  }
  search(search) {
    if (!this.cites.getValue()) {
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.cites.getValue()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(next => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(next)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(item => {
      if (!search) {
        return true;
      }
      return item && (item.getCite().toLowerCase().includes(search.toLowerCase()) || item.getAuthor().toLowerCase().includes(search.toLowerCase()) || item.getTags().includes(search.toLowerCase()));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.toArray)());
  }
  searchByAuthor(author) {
    if (!this.cites.getValue()) {
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.cites.getValue()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(next => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(next)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(item => {
      return item && item.getAuthor().toLowerCase().includes(author.toLowerCase());
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.toArray)());
  }
  countSearchFoundCites() {
    // if there is a pending Search
    if (this.router.snapshot.queryParams && this.router.snapshot.queryParams.q) {
      return this.count;
    }
    if (this.originalCites) {
      this.count = this.originalCites.length;
    }
    return this.count;
  }
  getCiteOfTheDay() {
    return this.cites$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(cites => this.citeOfTheDay.getCiteOfTheDay(cites)));
  }
  getRandomCite() {
    return this.cites$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(cites => cites[Math.floor(Math.random() * cites.length)]));
  }
}
Cites.ɵfac = function Cites_Factory(t) {
  return new (t || Cites)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_tools_CiteOfTheDay_service__WEBPACK_IMPORTED_MODULE_2__.CiteOfTheDay));
};
Cites.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
  token: Cites,
  factory: Cites.ɵfac
});


/***/ }),

/***/ 9028:
/*!*******************************************!*\
  !*** ./src/app/services/Cites/Authors.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Authors: () => (/* binding */ Authors)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4611);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 7272);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1414);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9089);
/* harmony import */ var _models_Authors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Authors */ 1298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Cites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cites */ 8073);




class Authors {
  constructor(citeService) {
    this.citeService = citeService;
    this.authors = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.authors$ = this.authors.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(value => !!value),
    // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
    // won't alter every subcriber that has saved the data
    // map(next => rfdc({proto: true})(next)), // @todo find why it destroy the original object : Author
    // become a simple object & the proto is not copied
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(next => {
      return next.map(author => {
        return new _models_Authors__WEBPACK_IMPORTED_MODULE_0__.Author(author.getName(), author.getCount());
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.distinct)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1) // auto unsubscribe, force complete
    );
    // local cache for the counter
    this.count = 0;
    const authors = [];
    citeService.cites$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(next => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(next)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(next => next.getAuthor()), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(next => {
      let author;
      if (authors.find(item => item.getName() === next)) {
        const index = authors.findIndex(item => item.getName() === next);
        authors[index].addCount();
        author = authors[index];
      } else {
        author = new _models_Authors__WEBPACK_IMPORTED_MODULE_0__.Author(next);
        authors.push(author);
      }
      return author;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.distinct)(),
    // prevent going further until cites is not fully loaded
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.skipUntil)(citeService.cites$),
    // build to 2 streams : one with proverbe and another with the rest to improve the sort
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.groupBy)(next => next.getName().toLowerCase().includes('proverbe')), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(group => group.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.toArray)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(next => {
      return next.sort((a, b) => {
        const aParts = a.getName().split(' ');
        const bParts = b.getName().split(' ');
        const aLastname = aParts.length > 1 ? aParts.pop() : aParts.shift();
        const aFirstname = aParts[0];
        const bLastname = bParts.length > 1 ? bParts.pop() : bParts.shift();
        const bFirstname = bParts[0];
        if (aLastname.toLowerCase() < bLastname.toLowerCase()) {
          return -1;
        } else if (aLastname.toLowerCase() > bLastname.toLowerCase()) {
          return 1;
        } else if (aFirstname) {
          if (aFirstname.toLowerCase() < bFirstname.toLowerCase()) {
            return -1;
          } else if (aFirstname.toLowerCase() > bFirstname.toLowerCase()) {
            return 1;
          }
          return 0;
        }
        return 0;
      });
    }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.concatAll)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.toArray)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1) // auto unsubscribe, force complete
    ).subscribe(next => {
      this.authors.next(next);
    });
  }
}
Authors.ɵfac = function Authors_Factory(t) {
  return new (t || Authors)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_Cites__WEBPACK_IMPORTED_MODULE_1__.Cites));
};
Authors.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
  token: Authors,
  factory: Authors.ɵfac
});


/***/ }),

/***/ 623:
/*!***********************************!*\
  !*** ./src/app/services/Click.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Click: () => (/* binding */ Click)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);


class Click {
  constructor() {
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.refresh$ = this.refresh.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(value => !!value), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(250));
  }
  click() {
    this.refresh.next(true);
  }
}
Click.ɵfac = function Click_Factory(t) {
  return new (t || Click)();
};
Click.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: Click,
  factory: Click.ɵfac
});


/***/ }),

/***/ 4276:
/*!***********************************************!*\
  !*** ./src/app/tools/CiteOfTheDay.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CiteOfTheDay: () => (/* binding */ CiteOfTheDay)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CiteOfTheDay {
  static getStartYear(citesCount) {
    let startPoint = 1;
    let padding = '';
    let substrLength = 4;
    while (citesCount > startPoint * 365 && startPoint <= 10000) {
      startPoint *= 10;
      padding += '0';
      substrLength--;
    }
    const startYearDate = new Date();
    startYearDate.setFullYear(parseInt(new Date().getFullYear().toString(10).substr(0, substrLength) + padding, 0));
    return startYearDate.getFullYear();
  }
  static yearIs366Days(year) {
    const monthFebruaryIndex = 1;
    const estimatedLastDayOfFebruary = new Date(year, monthFebruaryIndex, 29);
    return estimatedLastDayOfFebruary.getMonth() === monthFebruaryIndex;
  }
  static getLastDayOfMonth(iYear, jMonth) {
    return new Date(iYear, jMonth + 1, 0).getDate();
  }
  static getNumberOfDayInCurrentYear(today, iYear) {
    let numberOfDayInCurrentYear = 0;
    for (let jMonth = 0; jMonth <= today.getMonth(); jMonth++) {
      if (jMonth === today.getMonth()) {
        numberOfDayInCurrentYear += today.getDate();
        break;
      }
      numberOfDayInCurrentYear += CiteOfTheDay.getLastDayOfMonth(iYear, jMonth);
    }
    return numberOfDayInCurrentYear;
  }
  static getStackOfYears(aDate, startYear) {
    const years = [];
    const currentYear = aDate.getFullYear();
    if (currentYear === startYear) {
      years[currentYear] = CiteOfTheDay.getNumberOfDayInCurrentYear(aDate, currentYear);
      return years;
    }
    for (let iYear = startYear; iYear <= currentYear; iYear++) {
      if (iYear === currentYear) {
        years[iYear] = CiteOfTheDay.getNumberOfDayInCurrentYear(aDate, iYear);
        break;
      }
      years[iYear] = CiteOfTheDay.yearIs366Days(iYear) ? 366 : 365;
    }
    return years;
  }
  getCiteOfTheDay(cites) {
    const startYear = CiteOfTheDay.getStartYear(cites.length);
    const years = CiteOfTheDay.getStackOfYears(new Date(), startYear);
    const days = years.reduce((previous, current) => previous + current);
    let citeIndex = 0;
    for (let i = 1; i <= days; i++) {
      if (citeIndex === cites.length) {
        citeIndex = 0;
        continue;
      }
      citeIndex++;
    }
    return cites[citeIndex];
  }
}
CiteOfTheDay.ɵfac = function CiteOfTheDay_Factory(t) {
  return new (t || CiteOfTheDay)();
};
CiteOfTheDay.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CiteOfTheDay,
  factory: CiteOfTheDay.ɵfac
});


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 553);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6401);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.config */ 7110);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
function bootstrap() {
  (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig).catch(err => console.error(err));
}
if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map