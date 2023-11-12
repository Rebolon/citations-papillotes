import {
  Title,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵtext
} from "./chunk-XICENEYU.js";

// src/app/components/pageNotFound/page-not-found.component.ts
var PageNotFoundComponent = /* @__PURE__ */ (() => {
  const _PageNotFoundComponent = class _PageNotFoundComponent {
    constructor(title) {
      this.title = title;
      this.title.setTitle("Citations - Page non trouv\xE9e");
    }
  };
  _PageNotFoundComponent.\u0275fac = function PageNotFoundComponent_Factory(t) {
    return new (t || _PageNotFoundComponent)(\u0275\u0275directiveInject(Title));
  };
  _PageNotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PageNotFoundComponent,
    selectors: [["app-page-not-found"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 1,
    vars: 0,
    template: function PageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "Lost In Space ?");
      }
    },
    encapsulation: 2
  });
  let PageNotFoundComponent2 = _PageNotFoundComponent;
  return PageNotFoundComponent2;
})();
export {
  PageNotFoundComponent
};
//# sourceMappingURL=page-not-found.component-GRUJOO5B.js.map
