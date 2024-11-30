/* eslint-disable prettier/prettier */
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnChanges,
  Output,
  SimpleChanges,
  input
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter } from 'rxjs';
import { PagerOptionsInterface } from '../../services/Pager/pager.interface';
import { PagerService } from '../../services/Pager/pager.service';

@Component({
  selector: 'app-pager',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pager.component.scss'],
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
    imports: [NgClass],
    providers: [PagerService] // Unwanted singleton for this service to get fresh Pager everyWhere
})
export class PagerComponent implements OnChanges {
  readonly list = input<Array<unknown> | number>(0);
  //protected list: InputSignal<Array<unknown> | number> = input.required<Array<unknown>|number>();
  readonly options = input<PagerOptionsInterface>();
  readonly #destroyRef = inject(DestroyRef);
  readonly pager: PagerService = inject(PagerService);
  #paginatedList: BehaviorSubject<Array<unknown>> = new BehaviorSubject(
    this.pager.getPaginatedList()
  );
  @Output() paginatedList$ = this.#paginatedList
    .asObservable()
    .pipe(
      takeUntilDestroyed(),
      filter((value) => !!value)
    );

  ngOnChanges(changes: SimpleChanges): void {
    const list = changes['list'];
    if (!list) {
      return;
    }

    // 2 lines that are bad part of the code for instance
    this.pager.init(list.currentValue, this.options());
    this.pager.currentOffset$.pipe().subscribe(() => {
      this.#paginatedList.next(this.pager.getPaginatedList());
    });
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
    const list = this.list();
    if (typeof list === 'object' || typeof list === 'number') {
      return this.pager.getTotalPage() > 1;
    }

    return false;
  }
}
