import {
  BehaviorSubject,
  from,
  Observable,
  concatAll,
  distinct,
  groupBy,
  map,
  mergeMap,
  skipUntil,
  switchMap,
  take,
  toArray,
} from "rxjs";
import { Injectable, inject } from "@angular/core";
import { Cites } from "../Cites";
import { Author, AuthorI } from "../../models/Authors";
import { CiteI } from "../../models/Cite";

@Injectable()
export class Authors {
  protected citeService = inject(Cites);

  protected authors: BehaviorSubject<AuthorI[]> = new BehaviorSubject<
    AuthorI[]
  >([]);
  public authors$: Observable<AuthorI[]> = this.authors.asObservable().pipe(
    // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
    // won't alter every subcriber that has saved the data
    // map(next => rfdc({proto: true})(next)), // @todo find why it destroy the original object : Author
    // become a simple object & the proto is not copied
    map((next: AuthorI[]) => {
      return next.map((author) => {
        return new Author(author.getName(), author.getCount());
      });
    }),
    distinct(),
    take(1), // auto unsubscribe, force complete
  );
  // local cache for the counter
  protected count = 0;

  public constructor() {
    // @todo migrate all to Signal pattern from Josh Morony service pattern
    const citeService = this.citeService;

    const authors: AuthorI[] = [];

    citeService.cites$
      .pipe(
        switchMap((next: CiteI[]) => from(next)),
        map((next: CiteI) => next.getAuthor()),
        map((next: string) => {
          let author: AuthorI;
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
        groupBy((next: AuthorI) =>
          next.getName().toLowerCase().includes("proverbe"),
        ),
        mergeMap((group: Observable<AuthorI>) =>
          group.pipe(
            toArray(),
            map((next: AuthorI[]) => {
              return next.sort((a, b) => {
                const aParts = a.getName().split(" ");
                const bParts = b.getName().split(" ");
                const aLastname =
                  (aParts.length > 1 ? aParts.pop() : aParts.shift()) ?? "";
                const aFirstname = aParts[0];
                const bLastname =
                  (bParts.length > 1 ? bParts.pop() : bParts.shift()) ?? "";
                const bFirstname = bParts[0];

                if (aLastname.toLowerCase() < bLastname.toLowerCase()) {
                  return -1;
                } else if (aLastname.toLowerCase() > bLastname.toLowerCase()) {
                  return 1;
                } else if (aFirstname) {
                  if (aFirstname.toLowerCase() < bFirstname.toLowerCase()) {
                    return -1;
                  } else if (
                    aFirstname.toLowerCase() > bFirstname.toLowerCase()
                  ) {
                    return 1;
                  }

                  return 0;
                }

                return 0;
              });
            }),
          ),
        ),
        concatAll(),
        toArray(),
        take(1), // auto unsubscribe, force complete
      )
      .subscribe((next: unknown) => {
        // @todo why unknown here whereas toArray() define return as AuthorI[] ?
        this.authors.next(next as AuthorI[]);
      });
  }
}
