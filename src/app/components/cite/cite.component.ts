/* eslint-disable prettier/prettier */
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Cites } from '../../services/Cites';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { CiteI } from '../../models/Cite';

@Component({
  selector: 'app-cite',
  template: `
      <h1
        class="my-4 text-3xl md:text-5xl text-violet-800 font-bold leading-tight text-center md:text-left
              slide-in-bottom-h1"
      >
        {{ cite.getCite() }}
      </h1>
      <p
        class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"
      >
        <app-link-cites-by-author
          [author]="cite.getAuthor()"
        ></app-link-cites-by-author>
      </p>
  `,
  styles: [],
  providers: [],
  standalone: true,
  imports: [LinkCitesByAuthorComponent],
})
export class CiteComponent {
  @Input({required: true}) cite!: CiteI;

  constructor(protected citesService: Cites, protected title: Title) {
    this.title.setTitle('Citations - Citation du jour');
  }
}
