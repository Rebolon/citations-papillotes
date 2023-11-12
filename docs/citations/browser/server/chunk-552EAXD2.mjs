import './polyfills.server.mjs';
import {
  RouterLink
} from "./chunk-NT6BZYSI.mjs";
import {
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattributeInterpolate1,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpropertyInterpolate1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-N7L7EGLX.mjs";

// src/app/components/link-cites-by-author/link-cites-by-author.component.ts
var LinkCitesByAuthorComponent = /* @__PURE__ */ (() => {
  const _LinkCitesByAuthorComponent = class _LinkCitesByAuthorComponent {
  };
  _LinkCitesByAuthorComponent.\u0275fac = function LinkCitesByAuthorComponent_Factory(t) {
    return new (t || _LinkCitesByAuthorComponent)();
  };
  _LinkCitesByAuthorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _LinkCitesByAuthorComponent,
    selectors: [["app-link-cites-by-author"]],
    inputs: {
      author: "author"
    },
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 4,
    consts: [[3, "routerLink", "title"]],
    template: function LinkCitesByAuthorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275propertyInterpolate1("routerLink", "/authors/", ctx.author, "")("title", "Liste des citations de ", ctx.author, "");
        \u0275\u0275attributeInterpolate1("aria-label", "Liste des citations de ", ctx.author, "");
        \u0275\u0275advance(1);
        \u0275\u0275textInterpolate1(" ", ctx.author, " ");
      }
    },
    dependencies: [RouterLink],
    encapsulation: 2
  });
  let LinkCitesByAuthorComponent2 = _LinkCitesByAuthorComponent;
  return LinkCitesByAuthorComponent2;
})();

export {
  LinkCitesByAuthorComponent
};
//# sourceMappingURL=chunk-552EAXD2.mjs.map
