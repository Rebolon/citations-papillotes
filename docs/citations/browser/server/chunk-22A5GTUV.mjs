import './polyfills.server.mjs';
import {
  Cites
} from "./chunk-FNKKVVHO.mjs";
import {
  BehaviorSubject,
  concatAll,
  distinct,
  from,
  groupBy,
  map,
  mergeMap,
  skipUntil,
  switchMap,
  take,
  toArray,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-N7L7EGLX.mjs";

// src/app/models/Authors.ts
var Author = class {
  constructor(name, count = 1) {
    this.name = name;
    this.count = count;
  }
  getName() {
    return this.name;
  }
  getCount() {
    return this.count;
  }
  addCount() {
    this.count++;
    return this.count;
  }
};

// src/app/services/Cites/Authors.ts
var Authors = /* @__PURE__ */ (() => {
  const _Authors = class _Authors {
    constructor(citeService) {
      this.citeService = citeService;
      this.authors = new BehaviorSubject([]);
      this.authors$ = this.authors.asObservable().pipe(
        // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
        // won't alter every subcriber that has saved the data
        // map(next => rfdc({proto: true})(next)), // @todo find why it destroy the original object : Author
        // become a simple object & the proto is not copied
        map((next) => {
          return next.map((author) => {
            return new Author(author.getName(), author.getCount());
          });
        }),
        distinct(),
        take(1)
        // auto unsubscribe, force complete
      );
      this.count = 0;
      const authors = [];
      citeService.cites$.pipe(
        switchMap((next) => from(next)),
        map((next) => next.getAuthor()),
        map((next) => {
          let author;
          if (authors.find((item) => item.getName() === next)) {
            const index = authors.findIndex((item) => item.getName() === next);
            authors[index].addCount();
            author = authors[index];
          } else {
            author = new Author(next);
            authors.push(author);
          }
          return author;
        }),
        distinct(),
        // prevent going further until cites is not fully loaded
        skipUntil(citeService.cites$),
        // build to 2 streams : one with proverbe and another with the rest to improve the sort
        groupBy((next) => next.getName().toLowerCase().includes("proverbe")),
        mergeMap((group) => group.pipe(toArray(), map((next) => {
          return next.sort((a, b) => {
            const aParts = a.getName().split(" ");
            const bParts = b.getName().split(" ");
            const aLastname = (aParts.length > 1 ? aParts.pop() : aParts.shift()) ?? "";
            const aFirstname = aParts[0];
            const bLastname = (bParts.length > 1 ? bParts.pop() : bParts.shift()) ?? "";
            const bFirstname = bParts[0];
            if (aLastname.toLowerCase() < bLastname.toLowerCase()) {
              return -1;
            } else if (aLastname.toLowerCase() > bLastname.toLowerCase()) {
              return 1;
            } else if (aFirstname) {
              if (aFirstname.toLowerCase() < bFirstname.toLowerCase()) {
                return -1;
              } else if (aFirstname.toLowerCase() > bFirstname.toLowerCase()) {
                return 1;
              }
              return 0;
            }
            return 0;
          });
        }))),
        concatAll(),
        toArray(),
        take(1)
        // auto unsubscribe, force complete
      ).subscribe((next) => {
        this.authors.next(next);
      });
    }
  };
  _Authors.\u0275fac = function Authors_Factory(t) {
    return new (t || _Authors)(\u0275\u0275inject(Cites));
  };
  _Authors.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Authors,
    factory: _Authors.\u0275fac
  });
  let Authors2 = _Authors;
  return Authors2;
})();

export {
  Authors
};
//# sourceMappingURL=chunk-22A5GTUV.mjs.map
