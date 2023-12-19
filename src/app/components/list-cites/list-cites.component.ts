import { Component, Input, OnInit } from '@angular/core';
import { CiteI } from '../../models/Cite';
import { RouterLink } from '@angular/router';
import { Cites } from '../../services/Cites';
import { Title } from '@angular/platform-browser';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { PagerComponent } from '../pager/pager.component';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { NgPlural, NgPluralCase } from '@angular/common';
import { OnChanges } from '@angular/core';
import { SearchResultTitleComponent } from './search-result-title/search-result-title.component';

@Component({
  selector: 'app-list-cites',
  template: `
    <div class="container mb-36">
      <h1 class="text-3xl font-bold text-stone-900 mb-2">
        <a [queryParams]="null" routerLink="/cites"
          >{{ citeService.countSearchFoundCites() }} Citations.</a
        >
      </h1>

      <app-search-result-title [q]="q" [citesCount]="cites.length" />

      <ul class="list-none">
        @for (item of paginatedCites; track item.getId()) {
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
            [list]="cites"
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
  ],
})
export class ListCitesComponent
  extends BasePaginatedComponent
  implements OnInit, OnChanges
{
  @Input() q!: string;
  protected cites: CiteI[] = [];
  protected paginatedCites: CiteI[] = [];

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

  ngOnInit(): void {
    this.citeService.cites$.subscribe({
      next: (next: CiteI[]) => {
        this.fillCites(next);
      },
    });

    this.findCitesBySearch();
  }

  ngOnChanges(): void {
    this.findCitesBySearch();
  }

  protected findCitesBySearch() {
    // prerender crash without the first check
    if (this.q && this.q.trim() === '') {
      this.citeService.reset().subscribe();

      return;
    }

    this.citeService.search(this.q).subscribe((next) => this.fillCites(next));
  }

  protected fillCites(citesList: CiteI[]): void {
    this.cites = [];
    this.paginatedCites = [];
    citesList.forEach((cite) => {
      this.cites.push(cite);
    });
    this.paginatedCites = this.cites.slice(0, this.itemsPerPage);
  }

  setPaginatedList(ev: unknown[]): void {
    this.paginatedCites = ev as CiteI[];
  }
}
