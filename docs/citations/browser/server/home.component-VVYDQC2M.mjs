import './polyfills.server.mjs';
import {
  LinkCitesByAuthorComponent
} from "./chunk-552EAXD2.mjs";
import {
  Cites
} from "./chunk-FNKKVVHO.mjs";
import "./chunk-NT6BZYSI.mjs";
import {
  AsyncPipe,
  Title,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-N7L7EGLX.mjs";
import "./chunk-MD6NWHS6.mjs";

// src/app/components/home/home.component.ts
function HomeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 1);
    \u0275\u0275element(3, "app-link-cites-by-author", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx.getCite(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("author", ctx.getAuthor());
  }
}
var HomeComponent = /* @__PURE__ */ (() => {
  const _HomeComponent = class _HomeComponent {
    constructor(citesService, title) {
      this.citesService = citesService;
      this.title = title;
      this.title.setTitle("Citations - Citation du jour");
    }
  };
  _HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)(\u0275\u0275directiveInject(Cites), \u0275\u0275directiveInject(Title));
  };
  _HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[1, "my-4", "text-3xl", "md:text-5xl", "text-violet-800", "font-bold", "leading-tight", "text-center", "md:text-left", "slide-in-bottom-h1"], [1, "leading-normal", "text-base", "md:text-2xl", "mb-8", "text-center", "md:text-left", "slide-in-bottom-subtitle"], [3, "author"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomeComponent_Conditional_0_Template, 4, 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let HomeComponent_contFlowTmp;
        \u0275\u0275conditional(0, (HomeComponent_contFlowTmp = \u0275\u0275pipeBind1(1, 1, ctx.citesService.getCiteOfTheDay())) ? 0 : -1, HomeComponent_contFlowTmp);
      }
    },
    dependencies: [AsyncPipe, LinkCitesByAuthorComponent],
    encapsulation: 2
  });
  let HomeComponent2 = _HomeComponent;
  return HomeComponent2;
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-VVYDQC2M.mjs.map
