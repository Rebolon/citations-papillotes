import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { RouterOutlet } from '@angular/router';
import { NavbarDesktopComponent } from './components/navbar-desktop/navbar-desktop.component';

@Component({
  selector: 'app-root',
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
  standalone: true,
  imports: [NavbarDesktopComponent, RouterOutlet, NavbarMobileComponent],
})
export class AppComponent {
  constructor(public title: Title) {
    this.title.setTitle('Liste de Citations');
  }
}
