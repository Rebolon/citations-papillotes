import './polyfills.server.mjs';
import {
  PagerService
} from "./chunk-SFJVDCTP.mjs";
import {
  BehaviorSubject,
  NgClass,
  filter,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N7L7EGLX.mjs";

// src/app/components/common/BasePaginatedComponent.ts
var BasePaginatedComponent = class {
  constructor() {
    this.itemsPerPage = 10;
  }
  getCurrentPage() {
    return this.currentPage;
  }
  setCurrentPage(event) {
    this.currentPage = event;
  }
  getItemsPerPage() {
    return this.itemsPerPage;
  }
};

// src/app/components/pager/pager.component.ts
var _c0 = (a0) => ({
  current: a0
});
function PagerComponent_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 2)(1, "a", 3);
    \u0275\u0275listener("click", function PagerComponent_Conditional_1_For_10_Template_a_click_1_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r6);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.pager.goToPage(item_r2.index));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx_r1.isCurrentPage(item_r2.index)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var _c1 = (a0) => ({
  disabled: a0
});
function PagerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 1)(1, "li", 2)(2, "a", 3);
    \u0275\u0275listener("click", function PagerComponent_Conditional_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.pager.goToFirstPage());
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "li", 2)(6, "a", 3);
    \u0275\u0275listener("click", function PagerComponent_Conditional_1_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.pager.goToPreviousPage());
    });
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(9, PagerComponent_Conditional_1_For_10_Template, 4, 4, "li", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(11, "li", 2)(12, "a", 3);
    \u0275\u0275listener("click", function PagerComponent_Conditional_1_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.pager.goToNextPage());
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "li", 2)(16, "a", 3);
    \u0275\u0275listener("click", function PagerComponent_Conditional_1_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.pager.goToLastPage());
    });
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c1, ctx_r0.previousIsDisabled()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pager.getPagerItemList().getFirstEdges()[0].label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx_r0.previousIsDisabled()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pager.getPagerItemList().getFirstEdges()[1].label);
    \u0275\u0275repeater(9, ctx_r0.pager.getPagerItemList().getNumbers());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c1, ctx_r0.nextIsDisabled()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pager.getPagerItemList().getLastEdges()[0].label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c1, ctx_r0.nextIsDisabled()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pager.getPagerItemList().getLastEdges()[1].label);
  }
}
var PagerComponent = /* @__PURE__ */ (() => {
  const _PagerComponent = class _PagerComponent {
    constructor(pager) {
      this.pager = pager;
      this.list = 0;
      this.paginatedList = new BehaviorSubject(this.pager.getPaginatedList());
      this.paginatedList$ = this.paginatedList.asObservable().pipe(filter((value) => !!value));
    }
    // do i need ngOnInit, or ngOnChanges is enough ?
    ngOnInit() {
      this.pager.init(this.list, this.options);
      this.pager.currentOffset$.subscribe((value) => {
        this.paginatedList.next(this.pager.getPaginatedList());
      });
    }
    ngOnChanges(changes) {
      const list = changes["list"];
      if (!list) {
        return;
      }
      if (list.isFirstChange()) {
        return;
      }
      this.pager.init(list.currentValue, this.options);
    }
    previousIsDisabled() {
      return this.pager.getCurrentPage() === this.pager.getPreviousPage();
    }
    nextIsDisabled() {
      return this.pager.getCurrentPage() === this.pager.getNextPage();
    }
    isCurrentPage(index) {
      return this.pager.isCurrentPage(index);
    }
    hasList() {
      if (typeof this.list === "object") {
        return this.pager.getTotalPage() > 1;
      }
      return false;
    }
  };
  _PagerComponent.\u0275fac = function PagerComponent_Factory(t) {
    return new (t || _PagerComponent)(\u0275\u0275directiveInject(PagerService));
  };
  _PagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PagerComponent,
    selectors: [["app-pager"]],
    inputs: {
      list: "list",
      options: "options"
    },
    outputs: {
      paginatedList$: "paginatedList$"
    },
    standalone: true,
    features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [["class", "ng-pager nav", "aria-label", "Pagination"], ["aria-label", "Pagination", 1, "ng-pager", "nav"], [1, "w-12"], [3, "ngClass", "click"], ["class", "w-12"]],
    template: function PagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav");
        \u0275\u0275template(1, PagerComponent_Conditional_1_Template, 19, 16, "ul", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(1);
        \u0275\u0275conditional(1, ctx.hasList() ? 1 : -1);
      }
    },
    dependencies: [NgClass],
    styles: ["\n\n.ng-pager[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 1rem;\n}\n.ng-pager[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nul.ng-pager[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 10px;\n  list-style: none;\n  width: 40px;\n}\n.ng-pager[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ng-pager[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.current[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.ng-pager[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  background: #2199e8;\n  color: #fefefe;\n  cursor: default;\n}\n.ng-pager[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  color: #cacaca;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIubmctcGFnZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm5nLXBhZ2VyID4gb2wsIHVsLCBtZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bC5uZy1wYWdlciA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5uZy1wYWdlciA+IGxpID4gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5nLXBhZ2VyID4gbGkgPiBhLmN1cnJlbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5nLXBhZ2VyIC5jdXJyZW50IHtcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmctcGFnZXIgLmRpc2FibGVkIHtcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xuICBjb2xvcjogI2NhY2FjYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLENBQUE7QUFDRSxlQUFBO0FBQ0EsaUJBQUE7O0FBR0YsQ0FMQSxTQUtBLEVBQUE7QUFBQTtBQUFBO0FBQ0UsY0FBQTtBQUNBLFVBQUE7QUFDQSxXQUFBOztBQUdGLEVBQUEsQ0FYQSxTQVdBLEVBQUE7QUFDRSxXQUFBO0FBQ0EsV0FBQSxJQUFBO0FBQ0EsY0FBQTtBQUNBLFNBQUE7O0FBR0YsQ0FsQkEsU0FrQkEsRUFBQSxHQUFBLEVBQUE7QUFDRSxVQUFBOztBQUdGLENBdEJBLFNBc0JBLEVBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQTtBQUNFLGVBQUE7O0FBR0YsQ0ExQkEsU0EwQkEsQ0FKQTtBQUtFLFdBQUEsVUFBQTtBQUNBLGNBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTs7QUFHRixDQWpDQSxTQWlDQSxDQUFBO0FBQ0UsV0FBQSxVQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"]
  });
  let PagerComponent2 = _PagerComponent;
  return PagerComponent2;
})();

export {
  BasePaginatedComponent,
  PagerComponent
};
//# sourceMappingURL=chunk-ILNTECL3.mjs.map
