import {Component, Input, OnInit, Output} from '@angular/core';
import {PagerService} from '../../services/Pager/pager.service';
import {PagerOptionsInterface} from '../../services/Pager/pager.interface';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  providers: [
    PagerService
  ]
})
export class PagerComponent implements OnInit {
  @Input() list: Array<any> | number = 0
  @Input() options?: PagerOptionsInterface
  private paginatedList: BehaviorSubject<Array<any>> = new BehaviorSubject(this.pager.getPaginatedList())
  @Output() paginatedList$ = this.paginatedList.asObservable().pipe(
    filter(value => !!value)
  )

  constructor(public pager: PagerService) { }

  ngOnInit(): void {
    this.pager.init(this.list, this.options)
    this.pager.currentOffset$.subscribe(value => {
      this.paginatedList.next(this.pager.getPaginatedList())
    })
  }

  previousIsDisabled(): boolean
  {
    return this.pager.getCurrentPage() === this.pager.getPreviousPage()
  }

  nextIsDisabled(): boolean
  {
    return this.pager.getCurrentPage() === this.pager.getNextPage()
  }

  isCurrentPage(index: number): boolean
  {
    return this.pager.isCurrentPage(index)
  }

  hasList(): boolean
  {
    if (typeof this.list === 'object') {
      return !!this.list.length
    }

    return !!this.list
  }
}
