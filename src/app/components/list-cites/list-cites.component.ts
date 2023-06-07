import { Component, Input, OnInit } from '@angular/core';
import { CiteI } from '../../models/Cite';
import { RouterLink } from '@angular/router';
import { Cites } from '../../services/Cites';
import { Title } from '@angular/platform-browser';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { PagerComponent } from '../pager/pager.component';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { NgIf, NgPlural, NgPluralCase, NgFor } from '@angular/common';
import { BehaviorSubject, filter } from 'rxjs';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-list-cites',
  template: `
    <div class="container mb-36">
      <h1 class="text-3xl font-bold text-stone-900 mb-2">
        <a routerLink="/cites" queryParams=""
          >{{ citeService.countSearchFoundCites() }} Citations.</a
        >
      </h1>

      <h2 *ngIf="q" [ngPlural]="cites.length" class="text-md text-gray-600">
        <ng-template ngPluralCase="=0"
          >Aucune citation trouvée pour la recherche "{{
            q
          }}"&nbsp;</ng-template
        >
        <ng-template ngPluralCase="=1"
          >{{ cites.length }} citation trouvée pour la recherche "{{
            q
          }}":&nbsp;</ng-template
        >
        <ng-template ngPluralCase="other"
          >{{ cites.length }} citations trouvées pour la recherche "{{
            q
          }}":&nbsp;</ng-template
        >
      </h2>

      <ul class="list-none">
        <li
          *ngFor="let item of paginatedCites; trackBy: trackByCiteId"
          class="p-1"
        >
          <cite>”{{ item.getCite() }}”</cite> de
          <app-link-cites-by-author
            [author]="item.getAuthor()"
          ></app-link-cites-by-author>
        </li>
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
  styles: [],
  providers: [Device],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgPlural,
    NgPluralCase,
    NgFor,
    LinkCitesByAuthorComponent,
    PagerComponent,
  ],
})
export class ListCitesComponent
  extends BasePaginatedComponent
  implements OnInit, OnChanges
{
  @Input() q: string;
  protected cites: CiteI[] = [];
  protected paginatedCites: CiteI[] = [];

  constructor(
    public citeService: Cites,
    protected title: Title,
    protected device: Device
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
    if (this.q.trim() === '') {
      this.citeService.reset().subscribe();

      return;
    }

    this.citeService.search(this.q).subscribe((next) => this.fillCites(next));
  }

  protected fillCites(citesList: CiteI[]): void {
    this.cites = [];
    this.paginatedCites = [];
    citesList.forEach((cite, index) => {
      this.cites.push(cite);
    });
    this.paginatedCites = this.cites.slice(0, this.itemsPerPage);
  }

  protected trackByCiteId(index, cite: CiteI): number {
    return cite.getId();
  }

  setPaginatedList(ev: CiteI[]): void {
    this.paginatedCites = ev;
  }
}
