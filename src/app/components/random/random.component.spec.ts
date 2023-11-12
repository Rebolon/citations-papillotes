import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponent } from './random.component';
import { Cites } from '../../services/Cites';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Click } from '../../services/Click';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomComponent, RouterTestingModule],
      providers: [
        Cites,
        Click,
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
    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
