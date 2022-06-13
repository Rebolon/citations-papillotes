import {Component, OnInit} from '@angular/core';
import {CiteI} from '../../models/Cite';
import {ActivatedRoute} from '@angular/router';
import {Cites} from '../../services/Cites';
import {tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {Device} from '../../tools/Device';

@Component({
  selector: 'app-list-cites-by-authors',
  templateUrl: './list-cites-by-authors.component.html',
  styleUrls: [],
  providers: [Device]
})
export class ListCitesByAuthorsComponent implements OnInit {
  author: string;
  cites: CiteI[] = [];
  paginatedCites: CiteI[] = [];
  protected currentPage: number;
  protected itemsPerPage = 10;

  constructor(
    protected route: ActivatedRoute,
    public citeService: Cites,
    protected title: Title,
    protected device: Device
  ) {
    this.title.setTitle('Citations - Liste des citations');
    if (device.isMobile()) {
      this.itemsPerPage = 4;
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.author = params.get('author');
      this.citeService.searchByAuthor(this.author).pipe(
        tap(next => this.fillCites(next))
      ).subscribe();
    });
  }

  protected fillCites(citesList: CiteI[]): void {
    this.cites = [];
    this.paginatedCites = [];
    citesList.forEach((cite, index) => {
      this.cites.push(cite)
    });
    this.paginatedCites = this.cites.slice(0, this.itemsPerPage)
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentPage(event): void {
    this.currentPage = event;
  }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  setPaginatedList(ev: CiteI[]): void {
    this.paginatedCites = ev;
  }
}
