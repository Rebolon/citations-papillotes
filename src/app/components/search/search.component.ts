import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Router } from "@angular/router";
import { debounceTime, fromEvent, map } from "rxjs";

@Component({
  selector: "app-search",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input
      #elSearchCite
      class=""
      id="search_input"
      type="text"
      placeholder="Rechercher..." />
  `,
})
export class SearchComponent implements AfterViewInit, OnInit {
  @ViewChild("elSearchCite", { static: true }) elSearchCite!: ElementRef;
  protected activatedRouter = inject(ActivatedRoute);
  protected router = inject(Router);
  #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // reset q input when route change
    this.activatedRouter.queryParamMap
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((params) => {
        if (!params.get("q")) {
          this.elSearchCite.nativeElement.value = "";

          return;
        }
      });
  }

  ngAfterViewInit(): void {
    fromEvent(this.elSearchCite.nativeElement, "keyup")
      .pipe(
        map(
          (event: unknown) =>
            ((event as Event).currentTarget as HTMLInputElement).value,
        ),
        debounceTime(500),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe({
        next: (next: string) => {
          this.router.navigate(["/search"], { queryParams: { q: next } });
        },
      });
  }
}
