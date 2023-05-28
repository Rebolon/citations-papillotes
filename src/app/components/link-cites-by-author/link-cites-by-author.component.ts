import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-link-cites-by-author',
    template: `
    <a
      routerLink="/authors/{{ author }}"
      title="Liste des citations de {{ author }}"
      attr.aria-label="Liste des citations de {{ author }}"
    >
      {{ author }}
    </a>
  `,
    styleUrls: [],
    standalone: true,
    imports: [RouterLink],
})
export class LinkCitesByAuthorComponent {
  @Input() author: string;
}
