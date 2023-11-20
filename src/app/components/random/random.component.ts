/* eslint-disable prettier/prettier */
import { Component, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CiteI } from '../../models/Cite';
import { Cites } from '../../services/Cites';
import { Click } from '../../services/Click';
import { Title } from '@angular/platform-browser';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, ReplaySubject, skip, switchMap, tap } from 'rxjs';

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
  providers: [],
  imports: [NgIf, AsyncPipe, LinkCitesByAuthorComponent],
})
export class RandomComponent implements OnInit {
  private cite: BehaviorSubject<CiteI> = new BehaviorSubject({} as CiteI);
  protected cite$ = this.cite.asObservable().pipe(skip(1));
  
  protected citesService: Cites = inject(Cites);
  protected click: Click = inject(Click);
  protected title: Title = inject(Title);

  constructor(
  ) {
    this.title.setTitle('Citations - Citation aléatoire');

    this.click.refresh$
      .pipe(tap((value) => console.info('refresh subscribe', value)), switchMap(() => this.citesService.getRandomCite()))
      .subscribe({
        next: (cite) => this.cite.next(cite),
      });
  }

  ngOnInit(): void {
    
  }
}
