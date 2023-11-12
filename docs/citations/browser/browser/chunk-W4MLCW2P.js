import {
  BehaviorSubject,
  debounceTime,
  ɵɵdefineInjectable
} from "./chunk-XICENEYU.js";

// src/app/services/Click.ts
var Click = /* @__PURE__ */ (() => {
  const _Click = class _Click {
    constructor() {
      this.refresh = new BehaviorSubject(false);
      this.refresh$ = this.refresh.asObservable().pipe(debounceTime(250));
    }
    click() {
      this.refresh.next(true);
    }
  };
  _Click.\u0275fac = function Click_Factory(t) {
    return new (t || _Click)();
  };
  _Click.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Click,
    factory: _Click.\u0275fac
  });
  let Click2 = _Click;
  return Click2;
})();

export {
  Click
};
//# sourceMappingURL=chunk-W4MLCW2P.js.map
