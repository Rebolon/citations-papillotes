import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Cites } from '../../services/Cites';
import { CiteComponent } from '../cite/cite.component';

@Component({
  selector: 'app-home',
  template: `
    @if (citesService.getCiteOfTheDay() | async; as citeOfTheDay) {
      <app-cite [cite]="citeOfTheDay" />
    }
  `,
  standalone: true,
  imports: [AsyncPipe, CiteComponent],
})
export class HomeComponent {
  constructor(
    protected citesService: Cites,
    protected title: Title,
  ) {
    this.title.setTitle('Citations - Citation du jour');
  }
}
