import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BaseNavbarComponent } from "../common/BaseNavbarComponent";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "app-navbar-desktop",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, SearchComponent, RouterLinkActive],
  template: `
    <nav class="flex items-center justify-between p-6 container mx-auto">
      <a routerLink="/" title="Citation du jour" aria-label="Citation du jour">
        <svg
          version="1.1"
          width="200"
          height="36"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <path
            d="M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z"></path>
          <path
            d="M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z"></path>
          <rect x="0" y="0" width="200" height="36" fill-opacity="0" />
          <!-- not sure tailwindcss are working here, so font-size has been added -->
          <text
            class="text-4xl text-violet-700 font-sans subpixel-antialiased"
            x="36"
            y="35">
            Citations
          </text>
        </svg>
      </a>

      <app-search
        class="text-sm text-gray-600 sm:flex"
        style="padding-top: 16px"></app-search>

      <div class="text-lg hidden lg:flex">
        <a
          [queryParams]="null"
          class="block mt-4 lg:inline-block hover:text-violet-800 motion-safe:hover:scale-110 lg:mt-0 mr-10"
          routerLink="/"
          title="Citation du jour"
          aria-label="Citation du jour"
          routerLinkActive="focus:text-violet-800">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </svg>
        </a>

        <a
          [queryParams]="null"
          class="block mt-4 lg:inline-block hover:text-violet-800 motion-safe:hover:scale-110 lg:mt-0 mr-10"
          routerLink="/cites"
          title="Liste des citations"
          aria-label="Liste des citations"
          routerLinkActive="focus:text-violet-800">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" />
            </svg>
          </svg>
        </a>

        <a
          [queryParams]="null"
          class="block mt-4 lg:inline-block hover:text-violet-800 motion-safe:hover:scale-110 lg:mt-0 mr-10"
          routerLink="/authors"
          title="Liste des auteurs"
          aria-label="Liste des auteurs"
          routerLinkActive="focus:text-violet-800">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" />
            </svg>
          </svg>
        </a>

        <a
          [queryParams]="null"
          (click)="refreshRandom()"
          class="block mt-4 lg:inline-block hover:text-violet-800 motion-safe:hover:scale-110 lg:mt-0 mr-10"
          routerLink="/random"
          title="Une citation au hasard"
          aria-label="Une citation au hasard"
          routerLinkActive="focus:text-violet-800">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </svg>
        </a>

        <a
          class="block lg:inline-block hover:text-violet-800 transform motion-safe:hover:scale-110 lg:mt-0 mr-10"
          href="https://github.com/Rebolon/citations-papillotes"
          title="Accès au code source"
          aria-label="Accès au code source">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" />
            </svg>
          </svg>
        </a>
      </div>
    </nav>
  `,
})
export class NavbarDesktopComponent extends BaseNavbarComponent {}
