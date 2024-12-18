import { Injectable, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  distinct,
  filter,
  from,
  map,
  of,
  switchMap,
  take,
  tap,
  toArray,
} from "rxjs";
import { cites } from "../fixtures/data";
import { Cite, CiteI } from "../models/Cite";
import { CiteOfTheDay } from "../tools/CiteOfTheDay.service";

@Injectable()
export class Cites {
  protected router = inject(ActivatedRoute);

  protected originalCites: CiteI[] = [];
  protected cites: BehaviorSubject<CiteI[]> = new BehaviorSubject<CiteI[]>([]);
  public cites$: Observable<CiteI[]> = this.cites.asObservable().pipe(
    // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
    // won't alter every subcriber that has saved the data
    // map(next => rfdc()(next)), // @todo find why it destroy the original object : Cite
    // become a simple object & the proto is not copied
    map((next: CiteI[]) => {
      return next.map((cite) => {
        const newCite = new Cite();
        newCite
          .setId(cite.getId())
          .setAuthor(cite.getAuthor())
          .setCite(cite.getCite())
          .setTags(cite.getTags());

        return newCite;
      });
    }),
    distinct(),
    take(1), // auto unsubscribe, force complete
  );
  // local cache for the counter
  protected count = 0;

  public constructor() {
    // @todo migrate all this to Signal pattern
    cites
      .pipe(
        tap((next: CiteI[]) => (this.originalCites = next)),
        tap((next: CiteI[]) => (this.count = next.length)),
        switchMap(() => this.reset()),
      )
      .subscribe();
  }

  public reset(): Observable<CiteI[]> {
    return of(this.originalCites).pipe(
      filter((value: CiteI[]) => !!value),
      tap((next: CiteI[]) => this.cites.next(next)),
    );
  }

  public search(search: string): Observable<CiteI[]> {
    if (!this.cites.getValue()) {
      return EMPTY;
    }

    return of(this.cites.getValue()).pipe(
      switchMap((next: CiteI[]) => from(next)),
      filter((item: CiteI) => {
        if (!search) {
          return true;
        }

        return (
          item &&
          (item.getCite().toLowerCase().includes(search.toLowerCase()) ||
            item.getAuthor().toLowerCase().includes(search.toLowerCase()) ||
            item.getTags().includes(search.toLowerCase()))
        );
      }),
      toArray(),
    );
  }

  public searchByAuthor(author: string): Observable<CiteI[]> {
    if (!this.cites.getValue() || !author) {
      return EMPTY;
    }

    return of(this.cites.getValue()).pipe(
      switchMap((next: CiteI[]) => from(next)),
      filter((item: CiteI) => {
        return (
          item && item.getAuthor().toLowerCase().includes(author.toLowerCase())
        );
      }),
      toArray(),
    );
  }

  countSearchFoundCites(): number {
    // if there is a pending Search
    // @todo i would like to remove ActivatedRoute From this service
    if (
      //this.router.snapshot.queryParams &&
      this.router.snapshot?.queryParams["q"]
    ) {
      return this.count;
    }

    if (this.originalCites) {
      this.count = this.originalCites.length;
    }

    return this.count;
  }

  getCiteOfTheDay(): Observable<CiteI> {
    return this.cites.pipe(
      map((cites: CiteI[]) => CiteOfTheDay.getCiteOfTheDay(cites)),
    );
  }

  getRandomCite(): Observable<CiteI> {
    return this.cites.pipe(
      map((cites: CiteI[]) => cites[Math.floor(Math.random() * cites.length)]),
    );
  }
}
