/* eslint-disable prettier/prettier */
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { Cites } from '../../services/Cites';
import { Click } from '../../services/Click';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';

@Component({
  selector: 'app-random',
  template: `
    @if (cite$ | async; as cite) {
      <h1
        class="my-4 text-3xl md:text-5xl text-violet-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
      >
        {{ cite.getCite() }}
      </h1>
      <p
        class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left
              slide-in-bottom-subtitle"
      >
        <app-link-cites-by-author
          [author]="cite.getAuthor()"
        ></app-link-cites-by-author>
      </p>
    }
  `,
  standalone: true,
  imports: [NgIf, AsyncPipe, LinkCitesByAuthorComponent],
})
export class RandomComponent {
  protected citesService: Cites = inject(Cites);
  protected click: Click = inject(Click);
  protected title: Title = inject(Title);
  protected cite$ = this.click.refresh$
    .pipe(switchMap(() => this.citesService.getRandomCite()));

  constructor(
  ) {
    this.title.setTitle('Citations - Citation aléatoire');
  }
}
