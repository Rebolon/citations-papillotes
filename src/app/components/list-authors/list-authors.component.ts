import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authors } from '../../services/Cites/Authors';
import { AuthorI } from '../../models/Authors';
import { Title } from '@angular/platform-browser';
import { Device } from '../../tools/Device';
import { CiteI } from '../../models/Cite';
import {BasePaginatedComponent} from '../common/BasePaginatedComponent';

@Component({
  selector: 'app-list-authors',
  template: `
<div class="container mb-36">
  <h1 class="text-3xl font-bold text-stone-900 mb-2">
    {{authors?.length}} Auteurs.
  </h1>

  <button class="bg-gray-100 text-violet-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded-full mr-2"
          [ngClass]="{
            'font-semibold': isSortByText() === true,
            'font-normal': isSortByText() === false
          }"
          (click)="sortByAlpha()" title="Trier par nom" [disabled]="isSortByText()">
    Trier par nom
  </button>

  <button class="bg-gray-100 text-violet-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded-full"
          [ngClass]="{
            'font-semibold': isSortByTotal() === true,
            'font-normal': isSortByTotal() === false
          }"
          (click)="sortByCount()" title="Trier par total de citations" [disabled]="isSortByTotal()">
    Trier par total
  </button>

  <ul class="list-none">
    <li class="p-1" *ngFor="let item of paginatedAuthors; trackBy: trackByAuthorName">
      <a routerLink="/authors/{{item.getName()}}">{{item.getName()}} <small>({{item.getCount()}})</small></a>
    </li>
  </ul>
</div>

<div class="container">
  <div class="w-full">
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-10 z-10 bg-white">
      <app-pager [list]="authors" [options]="{itemPerPage: getItemsPerPage()}" (paginatedList$)="setPaginatedList($event)"></app-pager>
    </section>
  </div>
</div>
`,
  styles: [],
  providers: [Device]
})
export class ListAuthorsComponent extends BasePaginatedComponent implements OnInit {
  authors: AuthorI[] = [];
  paginatedAuthors: AuthorI[] = [];
  protected currentPage: number;
  protected itemsPerPage = 11;
  protected sort: 'text' | 'total' = 'text';

  constructor(
    protected route: ActivatedRoute,
    public authorService: Authors,
    protected title: Title,
    protected device: Device
  ) {
    super();
    this.title.setTitle('Citations - Liste des auteurs');
    this.itemsPerPage = 11;
    if (device.isMobile()) {
      this.itemsPerPage = 8;
    }
  }

  ngOnInit(): void {
    this.sortByAlpha();
  }

  sortByAlpha(): void {
    this.sort = 'text';

    this.authorService.authors$.subscribe({
      next: (next) => {
        this.authors = next;
      },
      complete: () => {
        this.paginatedAuthors = this.authors.slice(0, this.itemsPerPage);
      },
    });
  }

  sortByCount(): void {
    this.sort = 'total';
    this.authorService.authors$.subscribe({
      next: (next) => {
        this.authors = next.sort((a, b) => {
          if (a.getCount() > b.getCount()) {
            return -1;
          }
          if (a.getCount() < b.getCount()) {
            return 1;
          }
          return 0;
        });
      },
      complete: () => {
        this.paginatedAuthors = this.authors.slice(0, this.itemsPerPage);
      },
    });
  }

  isSortByText(): boolean {
    return this.sort === 'text';
  }

  isSortByTotal(): boolean {
    return this.sort === 'total';
  }

  protected trackByAuthorName(index, author: AuthorI): string {
    return author.getName();
  }

  setPaginatedList(ev: AuthorI[]): void {
    this.paginatedAuthors = ev;
  }
}
