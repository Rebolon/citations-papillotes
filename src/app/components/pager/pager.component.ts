/* eslint-disable prettier/prettier */
import { NgClass } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { PagerOptionsInterface } from '../../services/Pager/pager.interface';
import { PagerService } from '../../services/Pager/pager.service';

@Component({
  selector: 'app-pager',
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

        @for (item of pager.getPagerItemList().getNumbers(); track item) {
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
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() list: Array<unknown> | number = 0;
  @Input() options?: PagerOptionsInterface;
  private paginatedList: BehaviorSubject<Array<unknown>> = new BehaviorSubject(
    this.pager.getPaginatedList()
  );
  @Output() paginatedList$ = this.paginatedList
    .asObservable()
    .pipe(filter((value) => !!value));

  constructor(public pager: PagerService) {}

  // do i need ngOnInit, or ngOnChanges is enough ?
  ngOnInit(): void {
    this.pager.init(this.list, this.options);
    this.pager.currentOffset$.subscribe(() => {
      this.paginatedList.next(this.pager.getPaginatedList());
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const list = changes['list'];
    if (!list) {
      return;
    }

    if (list.isFirstChange()) {
      return;
    }

    this.pager.init(list.currentValue, this.options);
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
    if (typeof this.list === 'object') {
      return this.pager.getTotalPage() > 1;
    }

    return false;
  }
}
