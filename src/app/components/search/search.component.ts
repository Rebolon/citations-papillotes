import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { fromEvent, Subject, debounceTime, map, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
export class SearchComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('elSearchCite', { static: true }) elSearchCite!: ElementRef;
  protected ngUnsubscribe: Subject<void> = new Subject();
  protected activatedRouter = inject(ActivatedRoute);
  protected router = inject(Router);

  ngOnInit(): void {
    // reset q input when route change
    this.activatedRouter.queryParamMap
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params) => {
        if (!params.get('q')) {
          this.elSearchCite.nativeElement.value = '';

          return;
        }
      });
  }

  // #2 the event on which we will complete the main Observable property
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterViewInit(): void {
    fromEvent(this.elSearchCite.nativeElement, 'keyup')
      .pipe(
        map(
          (event: unknown) =>
            ((event as Event).currentTarget as HTMLInputElement).value,
        ),
        debounceTime(500),
        takeUntil(this.ngUnsubscribe),
      )
      .subscribe({
        next: (next: string) => {
          this.router.navigate(['/search'], { queryParams: { q: next } });
        },
      });
  }
}
