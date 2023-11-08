/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { CiteOfTheDay } from '../../tools/CiteOfTheDay.service';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    @if (citesService.getCiteOfTheDay() | async) {
      <h1
        class="my-4 text-3xl md:text-5xl text-violet-800 font-bold leading-tight text-center md:text-left
              slide-in-bottom-h1"
      >
        {{ (citesService.getCiteOfTheDay() | async).getCite() }}
      </h1>
      <p
        class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"
      >
        <app-link-cites-by-author
          [author]="(citesService.getCiteOfTheDay() | async).getAuthor()"
        ></app-link-cites-by-author>
      </p>
    }
  `,
  styles: [],
  providers: [CiteOfTheDay],
  standalone: true,
  imports: [AsyncPipe, LinkCitesByAuthorComponent],
})
export class HomeComponent {
  constructor(protected citesService: Cites, protected title: Title) {
    this.title.setTitle('Citations - Citation du jour');
  }
}
