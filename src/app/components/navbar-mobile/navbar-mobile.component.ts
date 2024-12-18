import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BaseNavbarComponent } from "../common/BaseNavbarComponent";

@Component({
  selector: "app-navbar-mobile",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <section
      class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      id="bottom-navigation">
      <div class="flex justify-between" id="tabs">
        <a
          [queryParams]="null"
          class="w-full hover:text-stone-500 justify-center inline-block text-center pt-2 pb-1"
          routerLink="/"
          title="Citation du jour"
          aria-label="Citation du jour"
          routerLinkActive="focus:text-violet-800">
          <svg
            class="inline-block mb-1"
            width="25"
            height="25"
            viewBox="0 0 42 42"
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
          <span class="tab tab-home block text-xs">Aujourd'hui</span>
        </a>

        <a
          [queryParams]="null"
          class="w-full hover:text-stone-500 justify-center inline-block text-center pt-2 pb-1"
          routerLink="/cites"
          title="Liste des citations"
          aria-label="Liste des citations"
          routerLinkActive="focus:text-violet-800">
          <svg
            class="inline-block mb-1"
            width="25"
            height="25"
            viewBox="0 0 42 42">
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
          <span class="tab tab-kategori block text-xs">Citations</span>
        </a>

        <a
          [queryParams]="null"
          class="w-full hover:text-stone-500 justify-center inline-block text-center pt-2 pb-1"
          routerLink="/authors"
          title="Liste des auteurs"
          aria-label="Liste des auteurs"
          routerLinkActive="focus:text-violet-800">
          <svg
            class="inline-block mb-1"
            width="25"
            height="25"
            viewBox="0 0 42 42">
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
          <span class="tab tab-explore block text-xs">Auteurs</span>
        </a>

        <a
          [queryParams]="null"
          (click)="refreshRandom()"
          class="w-full hover:text-stone-500 justify-center inline-block text-center pt-2 pb-1"
          routerLink="/random"
          title="Une citation au hasard"
          aria-label="Une citation au hasard"
          routerLinkActive="focus:text-violet-800">
          <svg
            class="inline-block mb-1"
            width="25"
            height="25"
            viewBox="0 0 42 42">
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
          <span class="tab tab-whishlist block text-xs">Aléatoire</span>
        </a>
      </div>
    </section>
  `,
})
export class NavbarMobileComponent extends BaseNavbarComponent {}
