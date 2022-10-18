import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-cites-by-author',
  template: `
<a routerLink="/authors/{{author}}"
   title="Liste des citations de {{author}}"
   attr.aria-label="Liste des citations de {{author}}">
   {{author}}
</a>
`,
  styleUrls: [],
})
export class LinkCitesByAuthorComponent {
  @Input() author: string;
}
