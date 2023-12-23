import { AsyncPipe, NgPlural, NgPluralCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  Observable,
  ReplaySubject,
  Subject,
  map,
  mergeWith,
  startWith,
  switchMap,
} from 'rxjs';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { PagerComponent } from '../pager/pager.component';
import { SearchResultTitleComponent } from './search-result-title/search-result-title.component';

@Component({
  selector: 'app-list-cites',
  template: `
    <div class="container mb-36">
      <h1 class="text-3xl font-bold text-stone-900 mb-2">
        <a
          [queryParams]="null"
          routerLink="/cites"
          [ngPlural]="(citesCount$ | async) ?? 0"
        >
          <ng-template ngPluralCase="=0"
            >{{ citesCount$ | async }} Citation.</ng-template
          >
          <ng-template ngPluralCase="=1"
            >{{ citesCount$ | async }} Citation.</ng-template
          >
          <ng-template ngPluralCase="other"
            >{{ citesCount$ | async }} Citations.</ng-template
          >
        </a>
      </h1>

      <app-search-result-title
        [q]="q"
        [citesCount]="(citesCount$ | async) ?? 0"
      />

      <ul class="list-none">
        @for (item of displayedPaginatedCites$ | async; track item.getId()) {
          <li class="p-1">
            <cite>”{{ item.getCite() }}”</cite> de
            <app-link-cites-by-author
              [author]="item.getAuthor()"
            ></app-link-cites-by-author>
          </li>
        }
      </ul>
    </div>

    <div class="container">
      <div class="w-full">
        <section
          class="block fixed inset-x-0 bottom-10 z-10 bg-white"
          id="bottom-navigation"
        >
          <app-pager
            [list]="(cites$ | async) ?? []"
            [options]="{ itemPerPage: getItemsPerPage() }"
            (paginatedList$)="setPaginatedList($event)"
          ></app-pager>
        </section>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    RouterLink,
    NgPlural,
    NgPluralCase,
    LinkCitesByAuthorComponent,
    SearchResultTitleComponent,
    PagerComponent,
    AsyncPipe,
  ],
})
export class ListCitesComponent extends BasePaginatedComponent {
  @Input()
  set q(search: string) {
    this.q$.next(search.trim());
  }
  private q$: ReplaySubject<string> = new ReplaySubject(1);
  protected cites$: Observable<CiteI[]> = this.q$.pipe(
    startWith(''),
    switchMap((q: string) =>
      q ? this.citeService.search(q) : this.citeService.cites$,
    ),
  );
  protected citesCount$: Observable<number> = this.cites$.pipe(
    map((cites) => cites.length),
    startWith(0),
  );
  private pagerPaginatedCites$: Subject<CiteI[]> = new Subject();
  protected displayedPaginatedCites$: Observable<CiteI[]> = this.cites$.pipe(
    mergeWith(this.pagerPaginatedCites$),
    map((cites) => cites.slice(0, this.itemsPerPage)),
  );

  constructor(
    public citeService: Cites,
    protected title: Title,
    protected device: Device,
  ) {
    super();
    this.title.setTitle('Citations - Liste des citations');
    this.itemsPerPage = 12;
    if (device.isMobile()) {
      this.itemsPerPage = 4;
    }
  }

  setPaginatedList(ev: unknown[]): void {
    this.pagerPaginatedCites$.next(ev as CiteI[]);
  }
}
