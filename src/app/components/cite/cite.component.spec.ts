import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CiteComponent } from "./cite.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HomeComponent", () => {
  let component: CiteComponent;
  let fixture: ComponentFixture<CiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiteComponent, RouterTestingModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
