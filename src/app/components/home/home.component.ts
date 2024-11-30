import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Cites } from "../../services/Cites";
import { CiteComponent } from "../cite/cite.component";

@Component({
  selector: "app-home",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CiteComponent],
  template: `
    @if (citesService.getCiteOfTheDay() | async; as citeOfTheDay) {
      <app-cite [cite]="citeOfTheDay" />
    }
  `,
})
export class HomeComponent {
  protected citesService = inject(Cites);
}
