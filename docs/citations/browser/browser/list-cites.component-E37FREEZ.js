import {
  BasePaginatedComponent,
  PagerComponent
} from "./chunk-4FKMMV2Z.js";
import {
  Device
} from "./chunk-WNDRTAC7.js";
import {
  LinkCitesByAuthorComponent
} from "./chunk-O4IDYBQ7.js";
import {
  Cites,
  RouterLink
} from "./chunk-DQUYI5GF.js";
import {
  NgPlural,
  NgPluralCase,
  Title,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
} from "./chunk-XICENEYU.js";

// src/app/components/list-cites/list-cites.component.ts
var _forTrack0 = ($index, $item) => $item.getId();
function ListCitesComponent_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1('Aucune citation trouv\xE9e pour la recherche "', ctx_r2.q, '"\xA0');
  }
}
function ListCitesComponent_Conditional_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2("", ctx_r3.cites.length, ' citation trouv\xE9e pour la recherche "', ctx_r3.q, '":\xA0');
  }
}
function ListCitesComponent_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2("", ctx_r4.cites.length, ' citations trouv\xE9es pour la recherche "', ctx_r4.q, '":\xA0');
  }
}
function ListCitesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 9);
    \u0275\u0275template(1, ListCitesComponent_Conditional_4_ng_template_1_Template, 1, 1, "ng-template", 10)(2, ListCitesComponent_Conditional_4_ng_template_2_Template, 1, 2, "ng-template", 11)(3, ListCitesComponent_Conditional_4_ng_template_3_Template, 1, 2, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngPlural", ctx_r0.cites.length);
  }
}
function ListCitesComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "cite");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " de ");
    \u0275\u0275element(4, "app-link-cites-by-author", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201D", item_r5.getCite(), "\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275property("author", item_r5.getAuthor());
  }
}
var _c1 = (a0) => ({
  itemPerPage: a0
});
var ListCitesComponent = /* @__PURE__ */ (() => {
  const _ListCitesComponent = class _ListCitesComponent extends BasePaginatedComponent {
    constructor(citeService, title, device) {
      super();
      this.citeService = citeService;
      this.title = title;
      this.device = device;
      this.cites = [];
      this.paginatedCites = [];
      this.title.setTitle("Citations - Liste des citations");
      this.itemsPerPage = 12;
      if (device.isMobile()) {
        this.itemsPerPage = 4;
      }
    }
    ngOnInit() {
      this.citeService.cites$.subscribe({
        next: (next) => {
          this.fillCites(next);
        }
      });
      this.findCitesBySearch();
    }
    ngOnChanges() {
      this.findCitesBySearch();
    }
    findCitesBySearch() {
      if (this.q && this.q.trim() === "") {
        this.citeService.reset().subscribe();
        return;
      }
      this.citeService.search(this.q).subscribe((next) => this.fillCites(next));
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
  _ListCitesComponent.\u0275fac = function ListCitesComponent_Factory(t) {
    return new (t || _ListCitesComponent)(\u0275\u0275directiveInject(Cites), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Device));
  };
  _ListCitesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ListCitesComponent,
    selectors: [["app-list-cites"]],
    inputs: {
      q: "q"
    },
    standalone: true,
    features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
    decls: 12,
    vars: 7,
    consts: [[1, "container", "mb-36"], [1, "text-3xl", "font-bold", "text-stone-900", "mb-2"], ["routerLink", "/cites", 3, "queryParams"], ["class", "text-md text-gray-600", 3, "ngPlural"], [1, "list-none"], [1, "container"], [1, "w-full"], ["id", "bottom-navigation", 1, "block", "fixed", "inset-x-0", "bottom-10", "z-10", "bg-white"], [3, "list", "options", "paginatedList$"], [1, "text-md", "text-gray-600", 3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "other"], [1, "p-1"], [3, "author"], ["class", "p-1"]],
    template: function ListCitesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1)(2, "a", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ListCitesComponent_Conditional_4_Template, 4, 1, "h2", 3);
        \u0275\u0275elementStart(5, "ul", 4);
        \u0275\u0275repeaterCreate(6, ListCitesComponent_For_7_Template, 5, 2, "li", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "section", 7)(11, "app-pager", 8);
        \u0275\u0275listener("paginatedList$", function ListCitesComponent_Template_app_pager_paginatedList__11_listener($event) {
          return ctx.setPaginatedList($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("queryParams", null);
        \u0275\u0275advance(1);
        \u0275\u0275textInterpolate1("", ctx.citeService.countSearchFoundCites(), " Citations.");
        \u0275\u0275advance(1);
        \u0275\u0275conditional(4, ctx.q ? 4 : -1);
        \u0275\u0275repeater(6, ctx.paginatedCites);
        \u0275\u0275advance(7);
        \u0275\u0275property("list", ctx.cites)("options", \u0275\u0275pureFunction1(5, _c1, ctx.getItemsPerPage()));
      }
    },
    dependencies: [RouterLink, NgPlural, NgPluralCase, LinkCitesByAuthorComponent, PagerComponent],
    encapsulation: 2
  });
  let ListCitesComponent2 = _ListCitesComponent;
  return ListCitesComponent2;
})();
export {
  ListCitesComponent
};
//# sourceMappingURL=list-cites.component-E37FREEZ.js.map
