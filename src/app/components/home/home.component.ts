/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Cites } from '../../services/Cites';
import { LinkCitesByAuthorComponent } from '../link-cites-by-author/link-cites-by-author.component';
import { AsyncPipe } from '@angular/common';
import { CiteComponent } from '../cite/cite.component';

@Component({
  selector: 'app-home',
  template: `
    @if (citesService.getCiteOfTheDay() | async; as citeOfTheDay) {
      <app-cite [cite]="citeOfTheDay" />
    }
  `,
  styles: [],
  providers: [],
  standalone: true,
  imports: [AsyncPipe, LinkCitesByAuthorComponent, CiteComponent],
})
export class HomeComponent {
  constructor(protected citesService: Cites, protected title: Title) {
    this.title.setTitle('Citations - Citation du jour');
  }
}
