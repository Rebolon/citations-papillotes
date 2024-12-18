import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SearchComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render input", () => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("input")).toContain("Rechercher...");
  });
});
