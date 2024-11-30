import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    title: "Citations - Citation du jour",
    loadComponent: () =>
      import("./components/home/home.component").then(
        (c) => c.HomeComponent,
      ) /* */,
  },
  {
    path: "cites",
    title: "Citations - Liste des citations",
    loadComponent: () =>
      import("./components/list-cites/list-cites.component").then(
        (c) => c.ListCitesComponent,
      ) /* */,
  },
  {
    path: "authors",
    title: "Citations - Liste des auteurs",
    loadComponent: () =>
      import("./components/list-authors/list-authors.component").then(
        (c) => c.ListAuthorsComponent,
      ) /* */,
  },
  {
    path: "cites-by-authors/:author",
    title: "Citations - Liste des citations par auteur",
    loadComponent: () =>
      import(
        "./components/list-cites-by-authors/list-cites-by-authors.component"
      ).then((c) => c.ListCitesByAuthorsComponent) /* */,
  },
  {
    path: "random",
    title: "Citations - Citation aléatoire",
    loadComponent: () =>
      import("./components/random/random.component").then(
        (c) => c.RandomComponent,
      ) /* */,
  },
  {
    path: "search",
    loadComponent: () =>
      import("./components/list-cites/list-cites.component").then(
        (c) => c.ListCitesComponent,
      ) /* */,
  },
  {
    path: "**",
    title: "Citations - Page non trouvée",
    loadComponent: () =>
      import("./components/pageNotFound/page-not-found.component").then(
        (c) => c.PageNotFoundComponent,
      ) /* */,
  },
];
