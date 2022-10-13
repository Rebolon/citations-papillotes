import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject, debounceTime, map, takeUntil, tap} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  template: `
<!-- don't know why a & input are on 2 rows whereas that if directly in app-component it's on 1 row ??? -->
<!--a>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a-->
<input class="" id="search_input" type="text" placeholder="Rechercher..." #elSearchCite>
`,
  styles: []
})
export class SearchComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('elSearchCite', {static: true}) elSearchCite: ElementRef;

  // Memory leak prevention: better implementation than an array of Subscription on which we wll loop over (3 steps documented here)
  // #1 the properties that will clear Observable
  protected ngUnsubscribe: Subject<void> = new Subject();

  constructor(protected activatedRouter: ActivatedRoute, protected router: Router) {
  }

  ngOnInit(): any {
    // reset q input when route change
    this.activatedRouter.queryParamMap.subscribe(params => {
      if (!params.get('q')) {
        this.elSearchCite.nativeElement.value = '';

        return;
      }
    });
  }

  // #2 the event on which we will complete the main Observable property
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterViewInit(): void {
    fromEvent(
      this.elSearchCite.nativeElement, 'keyup'
    ).pipe(
      // #3 the function that will stop the Observable because of the complete event from Observable property
      takeUntil(this.ngUnsubscribe),
      map((event: Event) => (event.currentTarget as HTMLInputElement).value),
      debounceTime(500),
    ).subscribe({
      next: (next) => {
        this.router.navigate(['/search'], {queryParams: {q: next}});
      }
    });
  }
}
