import { Cites } from "./Cites";
import { ActivatedRoute } from "@angular/router";

describe("Authors", () => {
  let service: Cites;

  beforeEach(() => {
    // @todo fix this since we use inject instead of constructor for DI
    const activatedRoute = {} as ActivatedRoute;
    service = new Cites(activatedoute);
  });

  it("list Cites", (done: DoneFn) => {
    const tested = service;
    tested.cites$.subscribe({
      next: (cites) => {
        expect(cites.length).toBeGreaterThan(30);
        done();
      },
    });
  });
});
