import './polyfills.server.mjs';
import {
  BasePaginatedComponent,
  PagerComponent
} from "./chunk-ILNTECL3.mjs";
import {
  Device
} from "./chunk-SFJVDCTP.mjs";
import {
  Cites
} from "./chunk-FNKKVVHO.mjs";
import "./chunk-NT6BZYSI.mjs";
import {
  NgPlural,
  NgPluralCase,
  Title,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-N7L7EGLX.mjs";
import "./chunk-MD6NWHS6.mjs";

// src/app/components/list-cites-by-authors/list-cites-by-authors.component.ts
var _forTrack0 = ($index, $item) => $item.getId();
function ListCitesByAuthorsComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1('Aucune citation de "', ctx_r2.author, '"\xA0');
  }
}
function ListCitesByAuthorsComponent_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2("", ctx_r3.cites.length, ' citation de "', ctx_r3.author, '":\xA0');
  }
}
function ListCitesByAuthorsComponent_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2("", ctx_r4.cites.length, ' citations de "', ctx_r4.author, '":\xA0');
  }
}
function ListCitesByAuthorsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 7);
    \u0275\u0275template(1, ListCitesByAuthorsComponent_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", 8)(2, ListCitesByAuthorsComponent_Conditional_1_ng_template_2_Template, 1, 2, "ng-template", 9)(3, ListCitesByAuthorsComponent_Conditional_1_ng_template_3_Template, 1, 2, "ng-template", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngPlural", ctx_r0.cites.length);
  }
}
function ListCitesByAuthorsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "cite");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201D", item_r5.getCite(), "\u201D");
  }
}
var _c1 = (a0) => ({
  itemPerPage: a0
});
var ListCitesByAuthorsComponent = /* @__PURE__ */ (() => {
  const _ListCitesByAuthorsComponent = class _ListCitesByAuthorsComponent extends BasePaginatedComponent {
    constructor(citeService, title, device) {
      super();
      this.citeService = citeService;
      this.title = title;
      this.device = device;
      this.cites = [];
      this.paginatedCites = [];
      this.title.setTitle("Citations - Liste des citations");
      this.itemsPerPage = 10;
      if (device.isMobile()) {
        this.itemsPerPage = 4;
      }
    }
    ngOnInit() {
      this.citeService.searchByAuthor(this.author).subscribe((cites) => this.fillCites(cites));
    }
    fillCites(citesList) {
      this.cites = [];
      this.paginatedCites = [];
      citesList.forEach((cite, index) => {
        this.cites.push(cite);
      });
      this.paginatedCites = this.cites.slice(0, this.itemsPerPage);
    }
    setPaginatedList(ev) {
      this.paginatedCites = ev;
    }
  };
  _ListCitesByAuthorsComponent.\u0275fac = function ListCitesByAuthorsComponent_Factory(t) {
    return new (t || _ListCitesByAuthorsComponent)(\u0275\u0275directiveInject(Cites), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Device));
  };
  _ListCitesByAuthorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ListCitesByAuthorsComponent,
    selectors: [["app-list-cites-by-authors"]],
    inputs: {
      author: "author"
    },
    standalone: true,
    features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 9,
    vars: 5,
    consts: [[1, "container", "mb-36"], ["class", "text-3xl font-bold text-stone-900 mb-2", 3, "ngPlural"], [1, "list-none"], [1, "container"], [1, "w-full"], ["id", "bottom-navigation", 1, "block", "fixed", "inset-x-0", "bottom-10", "z-10", "bg-white"], [3, "list", "options", "paginatedList$"], [1, "text-3xl", "font-bold", "text-stone-900", "mb-2", 3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"], [1, "p-1"], ["class", "p-1"]],
    template: function ListCitesByAuthorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ListCitesByAuthorsComponent_Conditional_1_Template, 4, 1, "h1", 1);
        \u0275\u0275elementStart(2, "ul", 2);
        \u0275\u0275repeaterCreate(3, ListCitesByAuthorsComponent_For_4_Template, 3, 1, "li", 12, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "section", 5)(8, "app-pager", 6);
        \u0275\u0275listener("paginatedList$", function ListCitesByAuthorsComponent_Template_app_pager_paginatedList__8_listener($event) {
          return ctx.setPaginatedList($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(1);
        \u0275\u0275conditional(1, ctx.author ? 1 : -1);
        \u0275\u0275repeater(3, ctx.paginatedCites);
        \u0275\u0275advance(7);
        \u0275\u0275property("list", ctx.cites)("options", \u0275\u0275pureFunction1(3, _c1, ctx.getItemsPerPage()));
      }
    },
    dependencies: [NgPlural, NgPluralCase, PagerComponent],
    encapsulation: 2
  });
  let ListCitesByAuthorsComponent2 = _ListCitesByAuthorsComponent;
  return ListCitesByAuthorsComponent2;
})();
export {
  ListCitesByAuthorsComponent
};
//# sourceMappingURL=list-cites-by-authors.component-6ZAQ4YMM.mjs.map
