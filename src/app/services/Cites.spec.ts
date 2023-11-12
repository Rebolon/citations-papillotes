import { Cites } from './Cites';
import { ActivatedRoute } from '@angular/router';

describe('Authors', () => {
  let service: Cites;

  beforeEach(() => {
    const activatedRoute = {} as ActivatedRoute;
    service = new Cites(activatedRoute);
  });

  it('list Cites', (done: DoneFn) => {
    const tested = service;
    tested.cites$.subscribe({
      next: (cites) => {
        expect(cites.length).toBeGreaterThan(30);
        done();
      },
    });
  });
});
