import './polyfills.server.mjs';
import {
  Click
} from "./chunk-SHYQPRTJ.mjs";
import {
  provideAnimations,
  provideServerRendering
} from "./chunk-QYUXFS6W.mjs";
import {
  Authors
} from "./chunk-22A5GTUV.mjs";
import {
  Device,
  PagerService
} from "./chunk-SFJVDCTP.mjs";
import {
  Cites
} from "./chunk-FNKKVVHO.mjs";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter,
  withComponentInputBinding,
  withRouterConfig
} from "./chunk-NT6BZYSI.mjs";
import {
  APP_ID,
  APP_INITIALIZER,
  ApplicationRef,
  BrowserModule,
  InjectionToken,
  Injector,
  NEVER,
  NgZone,
  PLATFORM_ID,
  Subject,
  Title,
  bootstrapApplication,
  concat,
  debounceTime,
  defer,
  delay,
  filter,
  fromEvent,
  importProvidersFrom,
  isPlatformBrowser,
  makeEnvironmentProviders,
  map,
  merge,
  mergeApplicationConfig,
  of,
  publish,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-N7L7EGLX.mjs";
import {
  __spreadValues
} from "./chunk-MD6NWHS6.mjs";

// src/app/components/common/BaseNavbarComponent.ts
var BaseNavbarComponent = /* @__PURE__ */ (() => {
  const _BaseNavbarComponent = class _BaseNavbarComponent {
    constructor(click) {
      this.click = click;
    }
    refreshRandom() {
      this.click.click();
    }
  };
  _BaseNavbarComponent.\u0275fac = function BaseNavbarComponent_Factory(t) {
    return new (t || _BaseNavbarComponent)(\u0275\u0275directiveInject(Click));
  };
  _BaseNavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BaseNavbarComponent,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function BaseNavbarComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
  let BaseNavbarComponent2 = _BaseNavbarComponent;
  return BaseNavbarComponent2;
})();

// src/app/components/navbar-mobile/navbar-mobile.component.ts
var NavbarMobileComponent = /* @__PURE__ */ (() => {
  const _NavbarMobileComponent = class _NavbarMobileComponent extends BaseNavbarComponent {
  };
  _NavbarMobileComponent.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275NavbarMobileComponent_BaseFactory;
    return function NavbarMobileComponent_Factory(t) {
      return (\u0275NavbarMobileComponent_BaseFactory || (\u0275NavbarMobileComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NavbarMobileComponent)))(t || _NavbarMobileComponent);
    };
  })();
  _NavbarMobileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavbarMobileComponent,
    selectors: [["app-navbar-mobile"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 26,
    vars: 4,
    consts: [["id", "bottom-navigation", 1, "md:hidden", "block", "fixed", "inset-x-0", "bottom-0", "z-10", "bg-white", "shadow"], ["id", "tabs", 1, "flex", "justify-between"], ["routerLink", "/", "title", "Citation du jour", "aria-label", "Citation du jour", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1", 3, "queryParams"], ["width", "25", "height", "25", "viewBox", "0 0 42 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "inline-block", "mb-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "tab", "tab-home", "block", "text-xs"], ["routerLink", "/cites", "title", "Liste des citations", "aria-label", "Liste des citations", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1", 3, "queryParams"], ["width", "25", "height", "25", "viewBox", "0 0 42 42", 1, "inline-block", "mb-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"], [1, "tab", "tab-kategori", "block", "text-xs"], ["routerLink", "/authors", "title", "Liste des auteurs", "aria-label", "Liste des auteurs", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1", 3, "queryParams"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"], [1, "tab", "tab-explore", "block", "text-xs"], ["routerLink", "/random", "title", "Une citation au hasard", "aria-label", "Une citation au hasard", "routerLinkActive", "focus:text-violet-800", 1, "w-full", "hover:text-stone-500", "justify-center", "inline-block", "text-center", "pt-2", "pb-1", 3, "queryParams", "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"], [1, "tab", "tab-whishlist", "block", "text-xs"]],
    template: function NavbarMobileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3)(4, "svg", 4);
        \u0275\u0275element(5, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Aujourd'hui");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 8)(10, "svg", 4);
        \u0275\u0275element(11, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "span", 10);
        \u0275\u0275text(13, "Citations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "a", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 8)(16, "svg", 4);
        \u0275\u0275element(17, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19, "Auteurs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "a", 14);
        \u0275\u0275listener("click", function NavbarMobileComponent_Template_a_click_20_listener() {
          return ctx.refreshRandom();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 8)(22, "svg", 4);
        \u0275\u0275element(23, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25, "Al\xE9atoire");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(6);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(6);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(6);
        \u0275\u0275property("queryParams", null);
      }
    },
    dependencies: [RouterLink, RouterLinkActive],
    encapsulation: 2
  });
  let NavbarMobileComponent2 = _NavbarMobileComponent;
  return NavbarMobileComponent2;
})();

// src/app/components/search/search.component.ts
var _c0 = ["elSearchCite"];
var SearchComponent = /* @__PURE__ */ (() => {
  const _SearchComponent = class _SearchComponent {
    constructor(activatedRouter, router) {
      this.activatedRouter = activatedRouter;
      this.router = router;
      this.ngUnsubscribe = new Subject();
    }
    ngOnInit() {
      this.activatedRouter.queryParamMap.subscribe((params) => {
        if (!params.get("q")) {
          this.elSearchCite.nativeElement.value = "";
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
      fromEvent(this.elSearchCite.nativeElement, "keyup").pipe(map((event) => event.currentTarget.value), debounceTime(500), takeUntil(this.ngUnsubscribe)).subscribe({
        next: (next) => {
          this.router.navigate(["/search"], {
            queryParams: {
              q: next
            }
          });
        }
      });
    }
  };
  _SearchComponent.\u0275fac = function SearchComponent_Factory(t) {
    return new (t || _SearchComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  _SearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchComponent,
    selectors: [["app-search"]],
    viewQuery: function SearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elSearchCite = _t.first);
      }
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["id", "search_input", "type", "text", "placeholder", "Rechercher...", 1, ""], ["elSearchCite", ""]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "input", 0, 1);
      }
    },
    encapsulation: 2
  });
  let SearchComponent2 = _SearchComponent;
  return SearchComponent2;
})();

// src/app/components/navbar-desktop/navbar-desktop.component.ts
var NavbarDesktopComponent = /* @__PURE__ */ (() => {
  const _NavbarDesktopComponent = class _NavbarDesktopComponent extends BaseNavbarComponent {
  };
  _NavbarDesktopComponent.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275NavbarDesktopComponent_BaseFactory;
    return function NavbarDesktopComponent_Factory(t) {
      return (\u0275NavbarDesktopComponent_BaseFactory || (\u0275NavbarDesktopComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NavbarDesktopComponent)))(t || _NavbarDesktopComponent);
    };
  })();
  _NavbarDesktopComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NavbarDesktopComponent,
    selectors: [["app-navbar-desktop"]],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 30,
    vars: 4,
    consts: [[1, "flex", "items-center", "justify-between", "p-6", "container", "mx-auto"], ["routerLink", "/", "title", "Citation du jour", "aria-label", "Citation du jour"], ["version", "1.1", "width", "200", "height", "36", "preserveAspectRatio", "xMidYMid meet", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z"], ["d", "M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z"], ["x", "0", "y", "0", "width", "200", "height", "36", "fill-opacity", "0"], ["x", "36", "y", "35", 1, "text-4xl", "text-violet-700", "font-sans", "subpixel-antialiased"], [1, "text-sm", "text-gray-600", "sm:flex", 2, "padding-top", "16px"], [1, "text-lg", "hidden", "lg:flex"], ["routerLink", "/", "title", "Citation du jour", "aria-label", "Citation du jour", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10", 3, "queryParams"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["routerLink", "/cites", "title", "Liste des citations", "aria-label", "Liste des citations", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10", 3, "queryParams"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"], ["routerLink", "/authors", "title", "Liste des auteurs", "aria-label", "Liste des auteurs", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10", 3, "queryParams"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"], ["routerLink", "/random", "title", "Une citation au hasard", "aria-label", "Une citation au hasard", "routerLinkActive", "focus:text-violet-800", 1, "block", "mt-4", "lg:inline-block", "hover:text-violet-800", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10", 3, "queryParams", "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"], ["href", "https://github.com/Rebolon/citations-papillotes", "title", "Acc\xE8s au code source", "aria-label", "Acc\xE8s au code source", 1, "block", "lg:inline-block", "hover:text-violet-800", "transform", "motion-safe:hover:scale-110", "lg:mt-0", "mr-10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"]],
    template: function NavbarDesktopComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "path", 3)(4, "path", 4)(5, "rect", 5);
        \u0275\u0275elementStart(6, "text", 6);
        \u0275\u0275text(7, " Citations ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(8, "app-search", 7);
        \u0275\u0275elementStart(9, "div", 8)(10, "a", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 10)(12, "svg", 11);
        \u0275\u0275element(13, "path", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "a", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 10)(16, "svg", 11);
        \u0275\u0275element(17, "path", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "a", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 10)(20, "svg", 11);
        \u0275\u0275element(21, "path", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "a", 17);
        \u0275\u0275listener("click", function NavbarDesktopComponent_Template_a_click_22_listener() {
          return ctx.refreshRandom();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 10)(24, "svg", 11);
        \u0275\u0275element(25, "path", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "a", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 10)(28, "svg", 11);
        \u0275\u0275element(29, "path", 20);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(4);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(4);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(4);
        \u0275\u0275property("queryParams", null);
      }
    },
    dependencies: [RouterLink, SearchComponent, RouterLinkActive],
    encapsulation: 2
  });
  let NavbarDesktopComponent2 = _NavbarDesktopComponent;
  return NavbarDesktopComponent2;
})();

// src/app/app.component.ts
var AppComponent = /* @__PURE__ */ (() => {
  const _AppComponent = class _AppComponent {
    constructor(title) {
      this.title = title;
      this.title.setTitle("Liste de Citations");
    }
  };
  _AppComponent.\u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)(\u0275\u0275directiveInject(Title));
  };
  _AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 7,
    vars: 0,
    consts: [["id", "app", 1, "container", "min-h-screen", "flex", "flex-col"], [1, "top-0", "fixed", "bg-white", "w-full"], [1, "grow", "p-4", "pt-24"], [1, "w-full"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1);
        \u0275\u0275element(2, "app-navbar-desktop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "main", 2);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "footer", 3);
        \u0275\u0275element(6, "app-navbar-mobile");
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [NavbarDesktopComponent, RouterOutlet, NavbarMobileComponent],
    encapsulation: 2
  });
  let AppComponent2 = _AppComponent;
  return AppComponent2;
})();

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
function errorObservable(message) {
  return defer(() => throwError(new Error(message)));
}
var NgswCommChannel = class {
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = fromEvent(serviceWorker, "controllerchange");
      const controllerChanges = controllerChangeEvents.pipe(map(() => serviceWorker.controller));
      const currentController = defer(() => of(serviceWorker.controller));
      const controllerWithChanges = concat(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe(filter((c) => !!c));
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration()));
      const rawEvents = fromEvent(serviceWorker, "message");
      const rawEventPayload = rawEvents.pipe(map((event) => event.data));
      const eventsUnconnected = rawEventPayload.pipe(filter((event) => event && event.type));
      const events = eventsUnconnected.pipe(publish());
      events.connect();
      this.events = events;
    }
  }
  postMessage(action, payload) {
    return this.worker.pipe(take(1), tap((sw) => {
      sw.postMessage(__spreadValues({
        action
      }, payload));
    })).toPromise().then(() => void 0);
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
      if (event.result !== void 0) {
        return event.result;
      }
      throw new Error(event.error);
    })).toPromise();
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = /* @__PURE__ */ (() => {
  const _SwPush = class _SwPush {
    /**
     * True if the Service Worker is enabled (supported by the browser and enabled via
     * `ServiceWorkerModule`).
     */
    get isEnabled() {
      return this.sw.isEnabled;
    }
    constructor(sw) {
      this.sw = sw;
      this.pushManager = null;
      this.subscriptionChanges = new Subject();
      if (!sw.isEnabled) {
        this.messages = NEVER;
        this.notificationClicks = NEVER;
        this.subscription = NEVER;
        return;
      }
      this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
      this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
      this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
      const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
      this.subscription = merge(workerDrivenSubscriptions, this.subscriptionChanges);
    }
    /**
     * Subscribes to Web Push Notifications,
     * after requesting and receiving user permission.
     *
     * @param options An object containing the `serverPublicKey` string.
     * @returns A Promise that resolves to the new subscription object.
     */
    requestSubscription(options) {
      if (!this.sw.isEnabled || this.pushManager === null) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }
      const pushOptions = {
        userVisibleOnly: true
      };
      let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
      let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
      for (let i = 0; i < key.length; i++) {
        applicationServerKey[i] = key.charCodeAt(i);
      }
      pushOptions.applicationServerKey = applicationServerKey;
      return this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).toPromise().then((sub) => {
        this.subscriptionChanges.next(sub);
        return sub;
      });
    }
    /**
     * Unsubscribes from Service Worker push notifications.
     *
     * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
     *          active subscription or the unsubscribe operation fails.
     */
    unsubscribe() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }
      const doUnsubscribe = (sub) => {
        if (sub === null) {
          throw new Error("Not subscribed to push notifications.");
        }
        return sub.unsubscribe().then((success) => {
          if (!success) {
            throw new Error("Unsubscribe failed!");
          }
          this.subscriptionChanges.next(null);
        });
      };
      return this.subscription.pipe(take(1), switchMap(doUnsubscribe)).toPromise();
    }
    decodeBase64(input) {
      return atob(input);
    }
  };
  _SwPush.\u0275fac = function SwPush_Factory(t) {
    return new (t || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  _SwPush.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
  let SwPush2 = _SwPush;
  return SwPush2;
})();
var SwUpdate = /* @__PURE__ */ (() => {
  const _SwUpdate = class _SwUpdate {
    /**
     * True if the Service Worker is enabled (supported by the browser and enabled via
     * `ServiceWorkerModule`).
     */
    get isEnabled() {
      return this.sw.isEnabled;
    }
    constructor(sw) {
      this.sw = sw;
      if (!sw.isEnabled) {
        this.versionUpdates = NEVER;
        this.unrecoverable = NEVER;
        return;
      }
      this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
      this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
    }
    /**
     * Checks for an update and waits until the new version is downloaded from the server and ready
     * for activation.
     *
     * @returns a promise that
     * - resolves to `true` if a new version was found and is ready to be activated.
     * - resolves to `false` if no new version was found
     * - rejects if any error occurs
     */
    checkForUpdate() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }
      const nonce = this.sw.generateNonce();
      return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
        nonce
      }, nonce);
    }
    /**
     * Updates the current client (i.e. browser tab) to the latest version that is ready for
     * activation.
     *
     * In most cases, you should not use this method and instead should update a client by reloading
     * the page.
     *
     * <div class="alert is-important">
     *
     * Updating a client without reloading can easily result in a broken application due to a version
     * mismatch between the [application shell](guide/glossary#app-shell) and other page resources,
     * such as [lazy-loaded chunks](guide/glossary#lazy-loading), whose filenames may change between
     * versions.
     *
     * Only use this method, if you are certain it is safe for your specific use case.
     *
     * </div>
     *
     * @returns a promise that
     *  - resolves to `true` if an update was activated successfully
     *  - resolves to `false` if no update was available (for example, the client was already on the
     *    latest version).
     *  - rejects if any error occurs
     */
    activateUpdate() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }
      const nonce = this.sw.generateNonce();
      return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
        nonce
      }, nonce);
    }
  };
  _SwUpdate.\u0275fac = function SwUpdate_Factory(t) {
    return new (t || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  _SwUpdate.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
  let SwUpdate2 = _SwUpdate;
  return SwUpdate2;
})();
var SCRIPT = /* @__PURE__ */ new InjectionToken("NGSW_REGISTER_SCRIPT");
function ngswAppInitializer(injector, script, options, platformId) {
  return () => {
    if (!(isPlatformBrowser(platformId) && "serviceWorker" in navigator && options.enabled !== false)) {
      return;
    }
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (navigator.serviceWorker.controller !== null) {
        navigator.serviceWorker.controller.postMessage({
          action: "INITIALIZE"
        });
      }
    });
    let readyToRegister$;
    if (typeof options.registrationStrategy === "function") {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister$ = of(null);
          break;
        case "registerWithDelay":
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister$ = !args[0] ? whenStable(injector) : merge(whenStable(injector), delayWithTimeout(+args[0]));
          break;
        default:
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    const ngZone = injector.get(NgZone);
    ngZone.runOutsideAngular(() => readyToRegister$.pipe(take(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch((err) => console.error("Service worker registration failed with:", err))));
  };
}
function delayWithTimeout(timeout) {
  return of(null).pipe(delay(timeout));
}
function whenStable(injector) {
  const appRef = injector.get(ApplicationRef);
  return appRef.isStable.pipe(filter((stable) => stable));
}
function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel(isPlatformBrowser(platformId) && opts.enabled !== false ? navigator.serviceWorker : void 0);
}
var SwRegistrationOptions = class {
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, PLATFORM_ID]
  }, {
    provide: APP_INITIALIZER,
    useFactory: ngswAppInitializer,
    deps: [Injector, SCRIPT, SwRegistrationOptions, PLATFORM_ID],
    multi: true
  }]);
}
var ServiceWorkerModule = /* @__PURE__ */ (() => {
  const _ServiceWorkerModule = class _ServiceWorkerModule {
    /**
     * Register the given Angular Service Worker script.
     *
     * If `enabled` is set to `false` in the given options, the module will behave as if service
     * workers are not supported by the browser, and the service worker will not be registered.
     */
    static register(script, options = {}) {
      return {
        ngModule: _ServiceWorkerModule,
        providers: [provideServiceWorker(script, options)]
      };
    }
  };
  _ServiceWorkerModule.\u0275fac = function ServiceWorkerModule_Factory(t) {
    return new (t || _ServiceWorkerModule)();
  };
  _ServiceWorkerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  _ServiceWorkerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
  let ServiceWorkerModule2 = _ServiceWorkerModule;
  return ServiceWorkerModule2;
})();

// src/environments/environment.ts
var environment = {
  production: false
};

// src/app/app.routes.ts
var routes = [{
  path: "",
  loadComponent: () => import("./home.component-VVYDQC2M.mjs").then((c) => c.HomeComponent)
  /* */
}, {
  path: "cites",
  loadComponent: () => import("./list-cites.component-GWW2C3OK.mjs").then((c) => c.ListCitesComponent)
  /* */
}, {
  path: "authors",
  loadComponent: () => import("./list-authors.component-AMLZJ4ME.mjs").then((c) => c.ListAuthorsComponent)
  /* */
}, {
  path: "authors/:author",
  loadComponent: () => import("./list-cites-by-authors.component-6ZAQ4YMM.mjs").then((c) => c.ListCitesByAuthorsComponent)
  /* */
}, {
  path: "random",
  loadComponent: () => import("./random.component-ARF73ZNH.mjs").then((c) => c.RandomComponent)
  /* */
}, {
  path: "search",
  loadComponent: () => import("./list-cites.component-GWW2C3OK.mjs").then((c) => c.ListCitesComponent)
  /* */
}, {
  path: "**",
  loadComponent: () => import("./page-not-found.component-L3SGCXA3.mjs").then((c) => c.PageNotFoundComponent)
  /* */
}];

// src/app/app.config.ts
var appConfig = {
  providers: [BrowserModule, {
    provide: APP_ID,
    useValue: "serverApp"
  }, provideRouter(routes, withComponentInputBinding(), withRouterConfig({
    onSameUrlNavigation: "reload"
  })), importProvidersFrom(ServiceWorkerModule.register("ngsw-worker.js", {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: "registerWhenStable:30000"
  })), Authors, Cites, Click, Title, PagerService, Device, provideAnimations()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [provideServerRendering()]
};
var config = mergeApplicationConfig(appConfig, serverConfig);
global.navigator = {};

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v17.0.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/service-worker/fesm2022/service-worker.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-WTA2FAMZ.mjs.map
