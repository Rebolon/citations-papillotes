import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LinkCitesByAuthorComponent } from "./link-cites-by-author.component";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Cites } from "../../services/Cites";

describe("LinkCitesByAuthorComponent", () => {
  let component: LinkCitesByAuthorComponent;
  let fixture: ComponentFixture<LinkCitesByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCitesByAuthorComponent, RouterTestingModule],
      providers: [
        Cites,
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
    fixture = TestBed.createComponent(LinkCitesByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
