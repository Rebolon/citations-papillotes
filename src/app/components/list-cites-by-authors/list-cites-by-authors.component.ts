/* eslint-disable prettier/prettier */
import { NgPlural, NgPluralCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, ReplaySubject, Subject, map, mergeWith, startWith, switchMap, tap } from 'rxjs';
import { Cite, CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { PagerComponent } from '../pager/pager.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-cites-by-authors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container mb-36">
      @if (authorOfCites(); as author) {
      <h1
        [ngPlural]="citesCount()"
        class="text-3xl font-bold text-stone-900 mb-2"
      >
        <ng-template ngPluralCase="=0"
          >Aucune citation de "{{ author }}"&nbsp;</ng-template
        >
        <ng-template ngPluralCase="=1"
          >1 citation de "{{ author }}":&nbsp;</ng-template
        >
        <ng-template ngPluralCase="other"
          >{{ citesCount() }} citations de "{{ author }}":&nbsp;</ng-template
        >
      </h1>
      }

      <ul class="list-none">
        @for (item of displayedPaginatedCites(); track item.getId()) {
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
            [list]="cites()"
            [options]="{ itemPerPage: getItemsPerPage() }"
            (paginatedList$)="setPaginatedList($event)"
          ></app-pager>
        </section>
      </div>
    </div>
  `,
  standalone: true,
  imports: [NgPlural, NgPluralCase, PagerComponent],
})
export class ListCitesByAuthorsComponent
  extends BasePaginatedComponent
{
  @Input({ required: true })
  set author(author: string) {
    if (!author) {
      author = '';
    }
    this.authorOfCites.set(author);
    this.author$.next(author);
  };
  protected authorOfCites = signal('');
  private author$: ReplaySubject<string> = new ReplaySubject(1);
  protected cites = signal([] as CiteI[]);
  private cites$: Observable<CiteI[]> = this.author$.pipe(
    switchMap((author) => this.citeService.searchByAuthor(author)),
    startWith([]),
    tap((cites) => this.cites.set(cites)),
    takeUntilDestroyed(),
  );
  protected citesCount = signal(0);
  private citesCount$: Observable<number> = this.cites$.pipe(
    map((cites) => cites.length),
    startWith(0),
    tap((count) => this.citesCount.set(count)),
    takeUntilDestroyed(),
  );
  private pagerPaginatedCites$: Subject<CiteI[]> = new Subject();
  protected displayedPaginatedCites = signal([] as CiteI[]);
  private displayedPaginatedCites$: Observable<CiteI[]> = this.cites$.pipe(
    mergeWith(this.pagerPaginatedCites$),
    map((cites) => cites.slice(0, this.itemsPerPage)),
    tap((cites) => this.displayedPaginatedCites.set(cites)),
    takeUntilDestroyed(),
  );

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

    this.cites$.subscribe();
    this.citesCount$.subscribe();
    this.displayedPaginatedCites$.subscribe();
  }

  setPaginatedList(ev: unknown[]): void {
    // To prevent this check, maybe use Type
    if (ev[0] && (ev[0] instanceof Cite || !ev[0])) {
      this.pagerPaginatedCites$.next(ev as CiteI[]);
    }
  }
}
