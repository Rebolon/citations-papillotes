import { NgPlural, NgPluralCase } from '@angular/common';
import { computed } from '@angular/core';
import { input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result-title',
  template: `
    @if (q()) {
      <h2 [ngPlural]="count()" class="text-md text-gray-600">
        <ng-template ngPluralCase="=0"
          >Aucune citation trouvée pour la recherche "{{
            q()
          }}"&nbsp;</ng-template
        >
        <ng-template ngPluralCase="=1"
          >{{ count() }} citation trouvée pour la recherche "{{
            q()
          }}":&nbsp;</ng-template
        >
        <ng-template ngPluralCase="other"
          >{{ count() }} citations trouvées pour la recherche "{{
            q()
          }}":&nbsp;</ng-template
        >
      </h2>
    }
  `,
  standalone: true,
  imports: [NgPlural, NgPluralCase],
})
export class SearchResultTitleComponent {
  citesCount = input.required<number>();
  q = input<string>();

  protected count = computed(() => this.citesCount() ?? 0);
}
