import { Component, Input, OnInit } from '@angular/core';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Title } from '@angular/platform-browser';
import { Device } from '../../tools/Device';
import { BasePaginatedComponent } from '../common/BasePaginatedComponent';
import { PagerComponent } from '../pager/pager.component';
import { NgIf, NgPlural, NgPluralCase, NgFor } from '@angular/common';
import { BehaviorSubject, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-cites-by-authors',
  template: `
    <div class="container mb-36">
      <h1
        *ngIf="author"
        [ngPlural]="cites.length"
        class="text-3xl font-bold text-stone-900 mb-2"
      >
        <ng-template ngPluralCase="=0"
          >Aucune citation de "{{ author }}"&nbsp;</ng-template
        >
        <ng-template ngPluralCase="=1"
          >{{ cites.length }} citation de "{{ author }}":&nbsp;</ng-template
        >
        <ng-template ngPluralCase="other"
          >{{ cites.length }} citations de "{{ author }}":&nbsp;</ng-template
        >
      </h1>

      <ul class="list-none">
        <li
          *ngFor="let item of paginatedCites; trackBy: trackByCiteId"
          class="p-1"
        >
          <cite>”{{ item.getCite() }}”</cite>
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
  imports: [NgIf, NgPlural, NgPluralCase, NgFor, PagerComponent],
})
export class ListCitesByAuthorsComponent
  extends BasePaginatedComponent
  implements OnInit
{
  @Input({ required: true }) author: string;
  cites: CiteI[] = [];
  paginatedCites: CiteI[] = [];

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

  ngOnInit(): void {
    this.citeService
      .searchByAuthor(this.author)
      .subscribe((cites) => this.fillCites(cites));
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
