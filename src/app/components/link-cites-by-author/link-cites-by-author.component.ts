import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-link-cites-by-author",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a
      routerLink="/authors/{{ author() }}"
      title="Liste des citations de {{ author() }}"
      attr.aria-label="Liste des citations de {{ author() }}">
      {{ author() }}
    </a>
  `,
})
export class LinkCitesByAuthorComponent {
  author = input.required<string>();
}
