import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarDesktopComponent } from "./navbar-desktop.component";
import { Click } from "../../services/Click";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavbarDesktopComponent", () => {
  let component: NavbarDesktopComponent;
  let fixture: ComponentFixture<NavbarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDesktopComponent, RouterTestingModule],
      providers: [
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
    fixture = TestBed.createComponent(NavbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
