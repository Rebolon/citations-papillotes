import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitesComponent } from './list-cites.component';
import { Cites } from '../../services/Cites';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../../tools/Device';

describe('ListCitesComponent', () => {
  let component: ListCitesComponent;
  let fixture: ComponentFixture<ListCitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCitesComponent, RouterTestingModule],
      providers: [
        Cites,
        Device,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
