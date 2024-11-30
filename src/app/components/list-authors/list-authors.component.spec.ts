import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListAuthorsComponent } from "./list-authors.component";
import { Authors } from "../../services/Cites/Authors";
import { Cites } from "../../services/Cites";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { Device } from "../../tools/Device";

describe("ListAuthorsComponent", () => {
  let component: ListAuthorsComponent;
  let fixture: ComponentFixture<ListAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAuthorsComponent, RouterTestingModule],
      providers: [
        Authors,
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
    fixture = TestBed.createComponent(ListAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
