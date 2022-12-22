import { BehaviorSubject, debounceTime, filter, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class Click {
  protected refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );
  public refresh$: Observable<boolean> = this.refresh.asObservable().pipe(
    filter((value) => !!value),
    debounceTime(250)
  );

  public click(): void {
    this.refresh.next(true);
  }
}
