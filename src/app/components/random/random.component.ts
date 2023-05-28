import { Component, OnInit } from '@angular/core';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Click } from '../../services/Click';
import { Title } from '@angular/platform-browser';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-random',
    template: `
    <h1
      *ngIf="cite"
      class="my-4 text-3xl md:text-5xl text-violet-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
    >
      {{ cite.getCite() }}
    </h1>
    <p
      *ngIf="cite"
      class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left
             slide-in-bottom-subtitle"
    >
      <app-link-cites-by-author
        [author]="cite.getAuthor()"
      ></app-link-cites-by-author>
    </p>
  `,
    styles: [],
    standalone: true,
    imports: [NgIf, LinkCitesByAuthorComponent],
})
export class RandomComponent implements OnInit {
  cites: CiteI[];
  cite: CiteI;

  constructor(
    protected citesService: Cites,
    protected click: Click,
    protected title: Title
  ) {
    this.title.setTitle('Citations - Citation aléatoire');
  }

  ngOnInit(): void {
    this.citesService.cites$.subscribe((next) => {
      this.cites = next;
    });

    this.click.refresh$.subscribe((next) => {
      this.cite = this.cites[Math.floor(Math.random() * this.cites.length)];
    });

    // for a page refresh, no click are thrown from the navbar, so i have to simulate it here : is there a best pattern
    this.click.click();
  }
}
