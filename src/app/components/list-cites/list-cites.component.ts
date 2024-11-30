import { NgPlural, NgPluralCase } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  inject,
  input,
} from "@angular/core";
import {
  takeUntilDestroyed,
  toObservable,
  toSignal,
} from "@angular/core/rxjs-interop";
import { Title } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";
import {
  ReplaySubject,
  Subject,
  filter,
  map,
  mergeWith,
  startWith,
  switchMap,
} from "rxjs";
import { Cite, CiteI } from "../../models/Cite";
import { Cites } from "../../services/Cites";
import { Device } from "../../tools/Device";
import { BasePaginatedComponent } from "../common/BasePaginatedComponent";
import { LinkCitesByAuthorComponent } from "../link-cites-by-author/link-cites-by-author.component";
import { PagerComponent } from "../pager/pager.component";
import { SearchResultTitleComponent } from "./search-result-title/search-result-title.component";

@Component({
  selector: "app-list-cites",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    NgPlural,
    NgPluralCase,
    LinkCitesByAuthorComponent,
    SearchResultTitleComponent,
    PagerComponent,
  ],
  template: `
    <div class="container mb-36">
      <h1 class="text-3xl font-bold text-stone-900 mb-2">
        <a [queryParams]="null" routerLink="/cites" [ngPlural]="citesCount()">
          <ng-template ngPluralCase="=0">0 Citation.</ng-template>
          <ng-template ngPluralCase="=1">1 Citation.</ng-template>
          <ng-template ngPluralCase="other"
            >{{ citesCount() }} Citations.</ng-template
          >
        </a>
      </h1>

      <app-search-result-title [q]="q()" [citesCount]="citesCount()" />

      <ul class="list-none">
        @for (item of displayedPaginatedCites(); track item.getId()) {
          <li class="p-1">
            <cite>”{{ item.getCite() }}”</cite> de
            <app-link-cites-by-author
              [author]="item.getAuthor()"></app-link-cites-by-author>
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
            [list]="cites()"
            [options]="{ itemPerPage: getItemsPerPage() }"
            (paginatedList$)="setPaginatedList($event)"></app-pager>
        </section>
      </div>
    </div>
  `,
})
export class ListCitesComponent extends BasePaginatedComponent {
  protected device = inject(Device);
  protected citeService = inject(Cites);

  q = input("", {
    transform: (value: string) => (value ? value.trim() : ""),
  });
  private q$: ReplaySubject<string> = new ReplaySubject(1);
  protected cites: Signal<CiteI[]> = computed<CiteI[]>(
    () => this.citesSource() ?? ([] as CiteI[]),
  );
  private citesSource = toSignal(
    toObservable(this.q).pipe(
      startWith(""),
      switchMap((q: string) =>
        q ? this.citeService.search(q) : this.citeService.cites$,
      ),
      takeUntilDestroyed(),
    ),
  );
  protected citesCount: Signal<number> = computed(
    () => this.citesCountSource() ?? 0,
  );
  private citesCountSource = toSignal(
    toObservable(this.citesSource).pipe(
      filter((value): value is CiteI[] => !!value),
      map((cites: CiteI[]) => cites.length),
      startWith(0),
      takeUntilDestroyed(),
    ),
  );
  private pagerPaginatedCites$: Subject<CiteI[]> = new Subject();
  protected displayedPaginatedCites: Signal<CiteI[]> = computed(
    () => this.displayedPaginatedCitesSource() ?? ([] as CiteI[]),
  );
  private displayedPaginatedCitesSource = toSignal(
    toObservable(this.citesSource).pipe(
      filter((value): value is CiteI[] => !!value),
      mergeWith(this.pagerPaginatedCites$),
      map((cites: CiteI[]) => cites.slice(0, this.itemsPerPage)),
      takeUntilDestroyed(),
    ),
  );

  // eslint-disable-next-line prettier/prettier
  constructor() {
    super();
    const device = this.device;

    this.itemsPerPage = 12;
    if (device.isMobile()) {
      this.itemsPerPage = 4;
    }
  }

  setPaginatedList(ev: unknown[]): void {
    // To prevent this check, maybe use Type
    if (ev[0] && (ev[0] instanceof Cite || !ev[0])) {
      this.pagerPaginatedCites$.next(ev as CiteI[]);
    }
  }
}
