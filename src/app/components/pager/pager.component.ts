/* eslint-disable prettier/prettier */
import { NgClass } from '@angular/common';
import {
  DestroyRef,
  inject,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  InputSignal,
  output,
  Signal
} from '@angular/core';
import { PagerOptionsInterface } from '../../services/Pager/pager.interface';
import { PagerService } from '../../services/Pager/pager.service';
import { outputFromObservable, outputToObservable, takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

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
export class PagerComponent {
  pager = inject(PagerService)
  list: InputSignal<Array<unknown> | number> = input.required<Array<unknown>|number>();
  options: InputSignal<PagerOptionsInterface|undefined> = input<PagerOptionsInterface>();
  #paginatedList: Signal<Array<unknown>> = computed(() => {
    this.pager.init(this.list(), this.options());
    return this.pager.getPaginatedList();
  });
  #paginatedList$ = toObservable(this.#paginatedList).pipe(takeUntilDestroyed());
  onPaginatedListChange = outputFromObservable(this.#paginatedList$)

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
    if (typeof this.list() === 'object') {
      return this.pager.getTotalPage() > 1;
    }

    return false;
  }
}
