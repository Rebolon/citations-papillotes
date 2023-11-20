import { Authors } from './Authors';
import { Cites } from '../Cites';
import { ActivatedRoute } from '@angular/router';

describe('Authors', () => {
  let service: Authors;

  beforeEach(() => {
    const activatedRoute = {} as ActivatedRoute;
    const cites = new Cites(activatedRoute);
    service = new Authors(cites);
  });

  it('list Authors', (done: DoneFn) => {
    const tested = service;
    tested.authors$.subscribe({
      next: (authors) => {
        expect(authors.length).toBeGreaterThan(30);
        done();
      },
    });
  });
});
