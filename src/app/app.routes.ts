import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(
        (c) => c.HomeComponent,
      ) /* */,
  },
  {
    path: 'cites',
    loadComponent: () =>
      import('./components/list-cites/list-cites.component').then(
        (c) => c.ListCitesComponent,
      ) /* */,
  },
  {
    path: 'authors',
    loadComponent: () =>
      import('./components/list-authors/list-authors.component').then(
        (c) => c.ListAuthorsComponent,
      ) /* */,
  },
  {
    path: 'authors/:author',
    loadComponent: () =>
      import(
        './components/list-cites-by-authors/list-cites-by-authors.component'
      ).then((c) => c.ListCitesByAuthorsComponent) /* */,
  },
  {
    path: 'random',
    loadComponent: () =>
      import('./components/random/random.component').then(
        (c) => c.RandomComponent,
      ) /* */,
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./components/list-cites/list-cites.component').then(
        (c) => c.ListCitesComponent,
      ) /* */,
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/pageNotFound/page-not-found.component').then(
        (c) => c.PageNotFoundComponent,
      ) /* */,
  },
];
