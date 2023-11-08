/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Click } from '../../services/Click';
import { Title } from '@angular/platform-browser';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, ReplaySubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-random',
  template: `
    @if (cite$ | async) {
      <h1
        class="my-4 text-3xl md:text-5xl text-violet-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
      >
        {{ cite$.getValue().getCite() }}
      </h1>
      <p
        class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left
              slide-in-bottom-subtitle"
      >
        <app-link-cites-by-author
          [author]="cite$.getValue().getAuthor()"
        ></app-link-cites-by-author>
      </p>
    }
  `,
  standalone: true,
  imports: [NgIf, AsyncPipe, LinkCitesByAuthorComponent],
})
export class RandomComponent implements OnInit {
  protected cite$: BehaviorSubject<CiteI | null> = new BehaviorSubject(null);

  constructor(
    protected citesService: Cites,
    protected click: Click,
    protected title: Title
  ) {
    this.title.setTitle('Citations - Citation aléatoire');
  }

  ngOnInit(): void {
    this.click.refresh$
      .pipe(switchMap(() => this.citesService.getRandomCite()))
      .subscribe({
        next: (cite) => this.cite$.next(cite),
      });

    // for a page refresh, no click are thrown from the navbar, so i have to simulate it here : is there a best pattern
    this.click.click();
  }
}
