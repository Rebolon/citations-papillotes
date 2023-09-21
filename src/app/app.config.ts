import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { Authors } from './services/Cites/Authors';
import { Cites } from './services/Cites';
import { Click } from './services/Click';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { CiteOfTheDay } from './tools/CiteOfTheDay.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000',
      })
    ),
    Authors,
    Cites,
    CiteOfTheDay,
    Click,
    Title,
    provideAnimations(),
  ],
};
