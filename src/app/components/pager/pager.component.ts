import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PagerService } from '../../services/Pager/pager.service';
import { PagerOptionsInterface } from '../../services/Pager/pager.interface';
import { BehaviorSubject, filter } from 'rxjs';
import { NgIf, NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-pager',
    template: `
    <nav>
      <ul *ngIf="hasList()" class="ng-pager nav" aria-label="Pagination">
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

        <li
          *ngFor="let item of pager.getPagerItemList().getNumbers()"
          class="w-12"
        >
          <a
            [ngClass]="{ current: isCurrentPage(item.index) }"
            (click)="pager.goToPage(item.index)"
          >
            <span>{{ item.label }}</span>
          </a>
        </li>

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
    </nav>
  `,
    styleUrls: ['./pager.component.scss'],
    providers: [PagerService],
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        NgFor,
    ],
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() list: Array<any> | number = 0;
  @Input() options?: PagerOptionsInterface;
  private paginatedList: BehaviorSubject<Array<any>> = new BehaviorSubject(
    this.pager.getPaginatedList()
  );
  @Output() paginatedList$ = this.paginatedList
    .asObservable()
    .pipe(filter((value) => !!value));

  constructor(public pager: PagerService) {}

  // do i need ngOnInit, or ngOnChanges is enough ?
  ngOnInit(): void {
    this.pager.init(this.list, this.options);
    this.pager.currentOffset$.subscribe((value) => {
      this.paginatedList.next(this.pager.getPaginatedList());
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.list) {
      return;
    }

    if (changes.list.isFirstChange()) {
      return;
    }

    this.pager.init(changes.list.currentValue, this.options);
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
