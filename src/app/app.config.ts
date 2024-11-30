import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { routes } from './app.routes';
import {
  Title,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Authors } from './services/Cites/Authors';
import { Cites } from './services/Cites';
import { Click } from './services/Click';
import { PagerService } from './services/Pager/pager.service';
import { Device } from './tools/Device';

export const appConfig: ApplicationConfig = {
  providers: [
    // not working with provideHydration withEventReplay : NG05000: Angular detected that hydration was enabled for an application that uses a custom or a noop Zone.js implementation. This is not yet a fully supported configuratio
    // provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withViewTransitions(),
    ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideClientHydration(withEventReplay()), // withEventReplay from Ng18 doesn't work with my app for instance
    provideAnimations(),
    Authors,
    Cites,
    Click,
    Title,
    PagerService,
    Device, provideClientHydration(withEventReplay()),
  ],
};
