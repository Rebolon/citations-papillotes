import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Click } from '../../services/Click';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class BaseNavbarComponent<T = any> {
  constructor(protected click: Click) {}

  public refreshRandom(): void {
    this.click.click();
  }
}
