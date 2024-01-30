import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  DestroyRef
} from '@angular/core';
import { fromEvent, Subject, debounceTime, map, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  template: `
    <input
      #elSearchCite
      class=""
      id="search_input"
      type="text"
      placeholder="Rechercher..."
    />
  `,
  standalone: true,
})
export class SearchComponent implements AfterViewInit, OnInit {
  @ViewChild('elSearchCite', { static: true }) elSearchCite!: ElementRef;
  protected activatedRouter = inject(ActivatedRoute);
  protected router = inject(Router);
  #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // reset q input when route change
    this.activatedRouter.queryParamMap
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((params) => {
        if (!params.get('q')) {
          this.elSearchCite.nativeElement.value = '';

          return;
        }
      });
  }

  ngAfterViewInit(): void {
    fromEvent(this.elSearchCite.nativeElement, 'keyup')
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
          this.router.navigate(['/search'], { queryParams: { q: next } });
        },
      });
  }
}
