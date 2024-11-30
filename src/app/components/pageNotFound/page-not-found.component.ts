import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Lost In Space ?`,
})
export class PageNotFoundComponent {}
