import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { CiteOfTheDay } from '../../tools/CiteOfTheDay.service';

@Component({
  selector: 'app-home',
  template: `
<h1 *ngIf="cite" class="my-4 text-3xl md:text-5xl text-violet-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
  {{cite.getCite()}}
</h1>
<p *ngIf="cite" class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
  <app-link-cites-by-author [author]="cite.getAuthor()"></app-link-cites-by-author>
</p>

  `,
  styles: [],
  providers: [CiteOfTheDay]
})
export class HomeComponent implements OnInit {
  cite: CiteI;

  constructor(
    protected citesService: Cites,
    protected title: Title,
    protected citeOfTheDay: CiteOfTheDay
  ) {
    this.title.setTitle('Citations - Citation du jour');
  }

  ngOnInit(): void {
    this.citesService.cites$.subscribe({
      next: (cites) => {
        this.cite = this.citeOfTheDay.getCiteOfTheDay(cites);
      },
    });
  }
}
