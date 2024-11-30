import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { RouterOutlet } from '@angular/router';
import { NavbarDesktopComponent } from './components/navbar-desktop/navbar-desktop.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavbarDesktopComponent, RouterOutlet, NavbarMobileComponent],
  template: `
    <div class="container min-h-screen flex flex-col" id="app">
      <header class="top-0 fixed bg-white w-full">
        <app-navbar-desktop></app-navbar-desktop>
      </header>

      <main class="grow p-4 pt-24">
        <router-outlet></router-outlet>
      </main>

      <footer class="w-full">
        <app-navbar-mobile></app-navbar-mobile>
      </footer>
    </div>
  `,
})
export class AppComponent {
  title = 'Liste de Citations'
}
