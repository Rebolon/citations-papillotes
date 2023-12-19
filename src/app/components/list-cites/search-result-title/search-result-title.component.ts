import { NgPlural, NgPluralCase } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-title',
  template: `
    @if (q) {
      <h2 [ngPlural]="citesCount" class="text-md text-gray-600">
        <ng-template ngPluralCase="=0"
          >Aucune citation trouvée pour la recherche "{{
            q
          }}"&nbsp;</ng-template
        >
        <ng-template ngPluralCase="=1"
          >{{ citesCount }} citation trouvée pour la recherche "{{
            q
          }}":&nbsp;</ng-template
        >
        <ng-template ngPluralCase="other"
          >{{ citesCount }} citations trouvées pour la recherche "{{
            q
          }}":&nbsp;</ng-template
        >
      </h2>
    }
  `,
  standalone: true,
  imports: [NgPlural, NgPluralCase],
})
export class SearchResultTitleComponent {
  @Input({ required: true }) citesCount: number = 0;
  @Input() q!: string;
}
