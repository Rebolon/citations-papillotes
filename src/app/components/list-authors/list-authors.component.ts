import { AsyncPipe, NgClass, NgPlural, NgPluralCase } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  Subject,
  map,
  mergeWith,
  startWith,
  switchMap,
} from 'rxjs';
import { AuthorI } from '../../models/Authors';
import { Authors } from '../../services/Cites/Authors';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { PagerComponent } from '../pager/pager.component';

@Component({
  selector: 'app-list-authors',
  template: `
    <div class="container mb-36">
      <h1
        class="text-3xl font-bold text-stone-900 mb-2"
        [ngPlural]="(authorsCount$ | async) ?? 0"
      >
        <ng-template ngPluralCase="=0">0 Auteur.</ng-template>
        <ng-template ngPluralCase="=1">1 Auteur.</ng-template>
        <ng-template ngPluralCase="other"
          >{{ authorsCount$ | async }} Auteurs.</ng-template>
      </h1>

      <button
        [ngClass]="{
          'font-semibold': (isSortByText() | async) === true,
          'font-normal': (isSortByText() | async) === false
        }"
        [disabled]="isSortByText() | async"
        (click)="sortByAuthor()"
        class="bg-gray-100 text-violet-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded-full mr-2"
        title="Trier par nom"
      >
        Trier par nom
      </button>

      <button
        [ngClass]="{
          'font-semibold': (isSortByTotal() | async),
          'font-normal': (isSortByTotal() | async)
        }"
        [disabled]="isSortByTotal() | async"
        (click)="sortByCount()"
        class="bg-gray-100 text-violet-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded-full"
        title="Trier par total de citations"
      >
        Trier par total
      </button>

      <ul class="list-none">
        @for (
          item of displayedPaginatedAuthors$ | async;
          track item.getName()
        ) {
          <li class="p-1">
            <a routerLink="/authors/{{ item.getName() }}"
              >{{ item.getName() }} <small>({{ item.getCount() }})</small></a
            >
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
            [list]="(authors$ | async) ?? []"
            [options]="{ itemPerPage: getItemsPerPage() }"
            (paginatedList$)="setPaginatedList($event)"
          ></app-pager>
        </section>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    NgClass,
    NgPlural,
    NgPluralCase,
    RouterLink,
    PagerComponent,
    AsyncPipe,
  ],
})
export class ListAuthorsComponent extends BasePaginatedComponent {
  protected sort$: BehaviorSubject<string> = new BehaviorSubject('text');
  protected authors$: Observable<AuthorI[]> = this.sort$.asObservable().pipe(
    switchMap((sort) =>
      sort === 'text'
        ? this.authorService.authors$
        : this.authorService.authors$.pipe(
            map((authors: AuthorI[]) =>
              authors.sort((a, b) => {
                if (a.getCount() > b.getCount()) {
                  return -1;
                }
                if (a.getCount() < b.getCount()) {
                  return 1;
                }
                return 0;
              }),
            ),
          ),
    ),
  );
  protected authorsCount$: Observable<number> = this.authors$.pipe(
    map((authors) => authors.length),
    startWith(0),
  );
  private pagerPaginatedAuthors$: Subject<AuthorI[]> = new Subject();
  protected displayedPaginatedAuthors$: Observable<AuthorI[]> =
    this.authors$.pipe(
      mergeWith(this.pagerPaginatedAuthors$),
      map((authors) => authors.slice(0, this.itemsPerPage)),
    );
  protected override currentPage!: number;
  protected override itemsPerPage = 11;

  constructor(
    public authorService: Authors,
    protected title: Title,
    protected device: Device,
  ) {
    super();
    this.title.setTitle('Citations - Liste des auteurs');
    if (device.isMobile()) {
      this.itemsPerPage = 8;
    }
  }

  isSortByText(): Observable<boolean> {
    return this.sort$.pipe(map((sort) => sort === 'text'));
  }

  isSortByTotal(): Observable<boolean> {
    return this.sort$.pipe(map((sort) => sort === 'total'));
  }

  sortByAuthor(): void {
    this.sort$.next('text');
  }

  sortByCount(): void {
    this.sort$.next('total');
  }

  setPaginatedList(ev: unknown[]): void {
    this.pagerPaginatedAuthors$.next(ev as AuthorI[]);
  }
}
