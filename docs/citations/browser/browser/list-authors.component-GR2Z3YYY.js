import {
  Authors
} from "./chunk-YVCJ5A5F.js";
import {
  BasePaginatedComponent,
  PagerComponent
} from "./chunk-4FKMMV2Z.js";
import {
  Device
} from "./chunk-WNDRTAC7.js";
import {
  RouterLink
} from "./chunk-DQUYI5GF.js";
import {
  NgClass,
  Title,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XICENEYU.js";

// src/app/components/list-authors/list-authors.component.ts
var _forTrack0 = ($index, $item) => $item.getName();
function ListAuthorsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275propertyInterpolate1("routerLink", "/authors/", item_r1.getName(), "");
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1("", item_r1.getName(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", item_r1.getCount(), ")");
  }
}
var _c1 = (a0, a1) => ({
  "font-semibold": a0,
  "font-normal": a1
});
var _c2 = (a0) => ({
  itemPerPage: a0
});
var ListAuthorsComponent = /* @__PURE__ */ (() => {
  const _ListAuthorsComponent = class _ListAuthorsComponent extends BasePaginatedComponent {
    constructor(authorService, title, device) {
      super();
      this.authorService = authorService;
      this.title = title;
      this.device = device;
      this.authors = [];
      this.paginatedAuthors = [];
      this.itemsPerPage = 11;
      this.sort = "text";
      this.title.setTitle("Citations - Liste des auteurs");
      this.itemsPerPage = 11;
      if (device.isMobile()) {
        this.itemsPerPage = 8;
      }
    }
    ngOnInit() {
      this.sortByAlpha();
    }
    sortByAlpha() {
      this.sort = "text";
      this.authorService.authors$.subscribe({
        next: (next) => {
          this.authors = next;
        },
        complete: () => {
          this.paginatedAuthors = this.authors.slice(0, this.itemsPerPage);
        }
      });
    }
    sortByCount() {
      this.sort = "total";
      this.authorService.authors$.subscribe({
        next: (next) => {
          this.authors = next.sort((a, b) => {
            if (a.getCount() > b.getCount()) {
              return -1;
            }
            if (a.getCount() < b.getCount()) {
              return 1;
            }
            return 0;
          });
        },
        complete: () => {
          this.paginatedAuthors = this.authors.slice(0, this.itemsPerPage);
        }
      });
    }
    isSortByText() {
      return this.sort === "text";
    }
    isSortByTotal() {
      return this.sort === "total";
    }
    setPaginatedList(ev) {
      this.paginatedAuthors = ev;
    }
  };
  _ListAuthorsComponent.\u0275fac = function ListAuthorsComponent_Factory(t) {
    return new (t || _ListAuthorsComponent)(\u0275\u0275directiveInject(Authors), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Device));
  };
  _ListAuthorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ListAuthorsComponent,
    selectors: [["app-list-authors"]],
    standalone: true,
    features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 14,
    vars: 15,
    consts: [[1, "container", "mb-36"], [1, "text-3xl", "font-bold", "text-stone-900", "mb-2"], ["title", "Trier par nom", 1, "bg-gray-100", "text-violet-800", "text-xs", "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "mr-2", 3, "ngClass", "disabled", "click"], ["title", "Trier par total de citations", 1, "bg-gray-100", "text-violet-800", "text-xs", "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", 3, "ngClass", "disabled", "click"], [1, "list-none"], [1, "container"], [1, "w-full"], ["id", "bottom-navigation", 1, "block", "fixed", "inset-x-0", "bottom-10", "z-10", "bg-white"], [3, "list", "options", "paginatedList$"], [1, "p-1"], [3, "routerLink"], ["class", "p-1"]],
    template: function ListAuthorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function ListAuthorsComponent_Template_button_click_3_listener() {
          return ctx.sortByAlpha();
        });
        \u0275\u0275text(4, " Trier par nom ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function ListAuthorsComponent_Template_button_click_5_listener() {
          return ctx.sortByCount();
        });
        \u0275\u0275text(6, " Trier par total ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "ul", 4);
        \u0275\u0275repeaterCreate(8, ListAuthorsComponent_For_9_Template, 5, 3, "li", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "section", 7)(13, "app-pager", 8);
        \u0275\u0275listener("paginatedList$", function ListAuthorsComponent_Template_app_pager_paginatedList__13_listener($event) {
          return ctx.setPaginatedList($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.authors.length, " Auteurs. ");
        \u0275\u0275advance(1);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c1, ctx.isSortByText() === true, ctx.isSortByText() === false))("disabled", ctx.isSortByText());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c1, ctx.isSortByTotal() === true, ctx.isSortByTotal() === false))("disabled", ctx.isSortByTotal());
        \u0275\u0275repeater(8, ctx.paginatedAuthors);
        \u0275\u0275advance(8);
        \u0275\u0275property("list", ctx.authors)("options", \u0275\u0275pureFunction1(13, _c2, ctx.getItemsPerPage()));
      }
    },
    dependencies: [NgClass, RouterLink, PagerComponent],
    encapsulation: 2
  });
  let ListAuthorsComponent2 = _ListAuthorsComponent;
  return ListAuthorsComponent2;
})();
export {
  ListAuthorsComponent
};
//# sourceMappingURL=list-authors.component-GR2Z3YYY.js.map
