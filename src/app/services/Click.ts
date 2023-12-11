import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';

@Injectable()
export class Click {
  protected refresh: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public refresh$: Observable<boolean> = this.refresh
    .asObservable()
    .pipe(debounceTime(250));

  public click(): void {
    this.refresh.next(true);
  }
}
