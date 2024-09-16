import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Lost In Space ?`,
  standalone: true,
})
export class PageNotFoundComponent {
  constructor(protected title: Title) {
    this.title.setTitle('Citations - Page non trouvée');
  }
}
