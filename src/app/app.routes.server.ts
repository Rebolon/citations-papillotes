import { inject } from "@angular/core";
import { RenderMode, ServerRoute } from "@angular/ssr";
import { firstValueFrom } from "rxjs";
import { AuthorI } from "./models/Authors";
import { Authors } from "./services/Cites/Authors";

export const serverRoutes: ServerRoute[] = [
  {
    path: "cites-by-authors/:author",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<Array<Record<string, string>>> {
      const authors = await firstValueFrom(inject(Authors).authors$);
      return authors.map((author: AuthorI) => {
        return {
          author: author.getName(),
        };
      });
    },
  },
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
];
