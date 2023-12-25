/* eslint-disable prettier/prettier */
import { AsyncPipe, NgPlural, NgPluralCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, ReplaySubject, Subject, map, mergeWith, startWith, switchMap } from 'rxjs';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { PagerComponent } from '../pager/pager.component';

@Component({
  selector: 'app-list-cites-by-authors',
  template: `
    <div class="container mb-36">
      @if (author$ | async; as author) {
      <h1
        [ngPlural]="(citesCount$ | async) ?? 0"
        class="text-3xl font-bold text-stone-900 mb-2"
      >
        <ng-template ngPluralCase="=0"
          >Aucune citation de "{{ author }}"&nbsp;</ng-template
        >
        <ng-template ngPluralCase="=1"
          >1 citation de "{{ author }}":&nbsp;</ng-template
        >
        <ng-template ngPluralCase="other"
          >{{ citesCount$ | async }} citations de "{{ author }}":&nbsp;</ng-template
        >
      </h1>
      }

      <ul class="list-none">
        @for (item of displayedPaginatedCites$ | async; track item.getId()) {
        <li
          class="p-1"
        >
          <cite>”{{ item.getCite() }}”</cite>
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
  imports: [AsyncPipe, NgPlural, NgPluralCase, PagerComponent],
})
export class ListCitesByAuthorsComponent
  extends BasePaginatedComponent
{
  @Input({ required: true })
  set author(author: string) {
    this.author$.next(author);
  };
  author$: ReplaySubject<string> = new ReplaySubject(1);
  cites$: Observable<CiteI[]> = this.author$.pipe(switchMap((author) => this.citeService.searchByAuthor(author)), startWith([]));
  citesCount$: Observable<number> = this.cites$.pipe(map((cites) => cites.length), startWith(0));
  pagerPaginatedCites$: Subject<CiteI[]> = new Subject();
  displayedPaginatedCites$: Observable<CiteI[]> = this.cites$.pipe(
    mergeWith(this.pagerPaginatedCites$),
    map((cites) => cites.slice(0, this.itemsPerPage)
  ));

  constructor(
    public citeService: Cites,
    protected title: Title,
    protected device: Device
  ) {
    super();
    this.title.setTitle('Citations - Liste des citations');
    this.itemsPerPage = 10;
    if (device.isMobile()) {
      this.itemsPerPage = 4;
    }
  }

  setPaginatedList(ev: unknown[]): void {
    this.pagerPaginatedCites$.next(ev as CiteI[]);
  }
}
