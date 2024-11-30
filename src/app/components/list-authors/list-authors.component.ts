import { NgClass, NgPlural, NgPluralCase } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import {
  Observable,
  Subject,
  map,
  mergeWith,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { Author, AuthorI } from "../../models/Authors";
import { Authors } from "../../services/Cites/Authors";
import { Device } from "../../tools/Device";
import { BasePaginatedComponent } from "../common/BasePaginatedComponent";
import { PagerComponent } from "../pager/pager.component";

@Component({
  selector: "app-list-authors",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgPlural, NgPluralCase, RouterLink, PagerComponent],
  template: `
    <div class="container mb-36">
      <h1
        class="text-3xl font-bold text-stone-900 mb-2"
        [ngPlural]="authorsCount()">
        <ng-template ngPluralCase="=0">0 Auteur.</ng-template>
        <ng-template ngPluralCase="=1">1 Auteur.</ng-template>
        <ng-template ngPluralCase="other"
          >{{ authorsCount() }} Auteurs.</ng-template
        >
      </h1>

      <button
        [ngClass]="{
          'font-semibold': isSortByText() === true,
          'font-normal': isSortByText() === false
        }"
        [disabled]="isSortByText()"
        (click)="sortByAuthor()"
        class="bg-gray-100 text-violet-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded-full mr-2"
        title="Trier par nom">
        Trier par nom
      </button>

      <button
        [ngClass]="{
          'font-semibold': isSortByTotal(),
          'font-normal': isSortByTotal()
        }"
        [disabled]="isSortByTotal()"
        (click)="sortByCount()"
        class="bg-gray-100 text-violet-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded-full"
        title="Trier par total de citations">
        Trier par total
      </button>

      <ul class="list-none">
        @for (item of displayedPaginatedAuthors(); track item.getName()) {
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
          id="bottom-navigation">
          <app-pager
            [list]="authors()"
            [options]="{ itemPerPage: getItemsPerPage() }"
            (paginatedList$)="setPaginatedList($event)"></app-pager>
        </section>
      </div>
    </div>
  `,
})
export class ListAuthorsComponent extends BasePaginatedComponent {
  authorService = inject(Authors);
  protected device = inject(Device);

  private sort = signal<"text" | "total">("text");
  protected readonly isSortByText = computed(() => this.sort() === "text");
  protected readonly isSortByTotal = computed(() => this.sort() === "total");
  protected authors = signal([] as AuthorI[]);
  private authors$: Observable<AuthorI[]> = toObservable(this.sort).pipe(
    switchMap((sort) =>
      sort === "text"
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
    tap((authors) => this.authors.set(authors)),
    takeUntilDestroyed(),
  );
  protected authorsCount = signal(0);
  private authorsCount$: Observable<number> = this.authors$.pipe(
    map((authors) => authors.length),
    startWith(0),
    tap((count) => this.authorsCount.set(count)),
    takeUntilDestroyed(),
  );
  private pagerPaginatedAuthors$: Subject<AuthorI[]> = new Subject();
  protected displayedPaginatedAuthors = signal([] as AuthorI[]);
  private displayedPaginatedAuthors$: Observable<AuthorI[]> =
    this.authors$.pipe(
      mergeWith(this.pagerPaginatedAuthors$),
      map((authors) => authors.slice(0, this.itemsPerPage)),
      tap((authors) => this.displayedPaginatedAuthors.set(authors)),
      takeUntilDestroyed(),
    );
  protected override currentPage: number = 0;
  protected override itemsPerPage = 11;

  constructor() {
    super();
    const device = this.device;

    if (device.isMobile()) {
      this.itemsPerPage = 8;
    }

    // @todo move this to signal to prevent manual subscribe
    this.authors$.subscribe();
    this.authorsCount$.subscribe();
    this.displayedPaginatedAuthors$.subscribe();
  }

  sortByAuthor(): void {
    this.sort.set("text");
  }

  sortByCount(): void {
    this.sort.set("total");
  }

  setPaginatedList(ev: unknown[]): void {
    // To prevent this check, maybe use Type
    if (ev[0] && (ev[0] instanceof Author || !ev[0])) {
      this.pagerPaginatedAuthors$.next(ev as AuthorI[]);
    }
  }
}
