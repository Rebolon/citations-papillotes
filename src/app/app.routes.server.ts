import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "cites-by-authors/:authors",
    // @todo find a way to do the pre-rendering (the routes-prerender.txt is a failure)
    renderMode: RenderMode.Client,
  },
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
];
