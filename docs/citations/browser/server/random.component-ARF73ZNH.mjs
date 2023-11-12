import './polyfills.server.mjs';
import {
  Click
} from "./chunk-SHYQPRTJ.mjs";
import {
  LinkCitesByAuthorComponent
} from "./chunk-552EAXD2.mjs";
import {
  Cites
} from "./chunk-FNKKVVHO.mjs";
import "./chunk-NT6BZYSI.mjs";
import {
  AsyncPipe,
  BehaviorSubject,
  Title,
  inject,
  skip,
  switchMap,
  tap,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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

// src/app/components/random/random.component.ts
function RandomComponent_Conditional_0_Template(rf, ctx) {
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
var RandomComponent = /* @__PURE__ */ (() => {
  const _RandomComponent = class _RandomComponent {
    constructor() {
      this.cite = new BehaviorSubject({});
      this.cite$ = this.cite.asObservable().pipe(skip(1));
      this.citesService = inject(Cites);
      this.click = inject(Click);
      this.title = inject(Title);
      this.title.setTitle("Citations - Citation al\xE9atoire");
      this.click.refresh$.pipe(tap((value) => console.info("refresh subscribe", value)), switchMap(() => this.citesService.getRandomCite())).subscribe({
        next: (cite) => this.cite.next(cite)
      });
    }
    ngOnInit() {
    }
  };
  _RandomComponent.\u0275fac = function RandomComponent_Factory(t) {
    return new (t || _RandomComponent)();
  };
  _RandomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RandomComponent,
    selectors: [["app-random"]],
    standalone: true,
    features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[1, "my-4", "text-3xl", "md:text-5xl", "text-violet-800", "font-bold", "leading-tight", "text-center", "md:text-left", "slide-in-bottom-h1"], [1, "leading-normal", "text-base", "md:text-2xl", "mb-8", "text-center", "md:text-left", "slide-in-bottom-subtitle"], [3, "author"]],
    template: function RandomComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RandomComponent_Conditional_0_Template, 4, 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let RandomComponent_contFlowTmp;
        \u0275\u0275conditional(0, (RandomComponent_contFlowTmp = \u0275\u0275pipeBind1(1, 1, ctx.cite$)) ? 0 : -1, RandomComponent_contFlowTmp);
      }
    },
    dependencies: [AsyncPipe, LinkCitesByAuthorComponent],
    encapsulation: 2
  });
  let RandomComponent2 = _RandomComponent;
  return RandomComponent2;
})();
export {
  RandomComponent
};
//# sourceMappingURL=random.component-ARF73ZNH.mjs.map
