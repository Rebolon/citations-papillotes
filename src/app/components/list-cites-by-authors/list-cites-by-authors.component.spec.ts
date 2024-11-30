import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListCitesByAuthorsComponent } from "./list-cites-by-authors.component";
import { Cites } from "../../services/Cites";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { Device } from "../../tools/Device";

describe("ListCiteByAuthorsComponent", () => {
  let component: ListCitesByAuthorsComponent;
  let fixture: ComponentFixture<ListCitesByAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCitesByAuthorsComponent, RouterTestingModule],
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
    fixture = TestBed.createComponent(ListCitesByAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
