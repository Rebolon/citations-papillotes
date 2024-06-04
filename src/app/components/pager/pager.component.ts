/* eslint-disable prettier/prettier */
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
  InputSignal,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { PagerOptionsInterface } from '../../services/Pager/pager.interface';
import { PagerService } from '../../services/Pager/pager.service';

@Component({
  selector: 'app-pager',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav>
      @if (hasList()) {
      <ul class="ng-pager nav" aria-label="Pagination">
        <li class="w-12">
          <a
            [ngClass]="{ disabled: previousIsDisabled() }"
            (click)="pager.goToFirstPage()"
          >
            <span>{{ pager.getPagerItemList().getFirstEdges()[0].label }}</span>
          </a>
        </li>
        <li class="w-12">
          <a
            [ngClass]="{ disabled: previousIsDisabled() }"
            (click)="pager.goToPreviousPage()"
          >
            <span>{{ pager.getPagerItemList().getFirstEdges()[1].label }}</span>
          </a>
        </li>

        @for (item of pager.getPagerItemList().getNumbers(); track item.index) {
        <li class="w-12"
        >
          <a
            [ngClass]="{ current: isCurrentPage(item.index) }"
            (click)="pager.goToPage(item.index)"
          >
            <span>{{ item.label }}</span>
          </a>
        </li>
        }

        <li class="w-12">
          <a
            [ngClass]="{ disabled: nextIsDisabled() }"
            (click)="pager.goToNextPage()"
          >
            <span>{{ pager.getPagerItemList().getLastEdges()[0].label }}</span>
          </a>
        </li>
        <li class="w-12">
          <a
            [ngClass]="{ disabled: nextIsDisabled() }"
            (click)="pager.goToLastPage()"
          >
            <span>{{ pager.getPagerItemList().getLastEdges()[1].label }}</span>
          </a>
        </li>
      </ul>
      }
    </nav>
  `,
  styleUrls: ['./pager.component.scss'],
  standalone: true,
  imports: [NgClass],
  providers: [PagerService] // Unwanted singleton for this service to get fresh Pager everyWhere
})
export class PagerComponent implements OnChanges, OnDestroy {
  @Input() list: Array<unknown> | number = 0;
  //protected list: InputSignal<Array<unknown> | number> = input.required<Array<unknown>|number>();
  @Input() options?: PagerOptionsInterface;
  private paginatedList: BehaviorSubject<Array<unknown>> = new BehaviorSubject(
    this.pager.getPaginatedList()
  );
  @Output() paginatedList$ = this.paginatedList
    .asObservable()
    .pipe(filter((value) => !!value));
  private subscription!: Subscription;

  constructor(public pager: PagerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const list = changes['list'];
    if (!list) {
      return;
    }

    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    this.pager.init(list.currentValue, this.options);
    this.subscription = this.pager.currentOffset$.pipe().subscribe(() => {
      this.paginatedList.next(this.pager.getPaginatedList());
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  previousIsDisabled(): boolean {
    return this.pager.getCurrentPage() === this.pager.getPreviousPage();
  }

  nextIsDisabled(): boolean {
    return this.pager.getCurrentPage() === this.pager.getNextPage();
  }

  isCurrentPage(index: number): boolean {
    return this.pager.isCurrentPage(index);
  }

  hasList(): boolean {
    // === 'object') {
    if (typeof this.list === 'object') {
      return this.pager.getTotalPage() > 1;
    }

    return false;
  }
}
