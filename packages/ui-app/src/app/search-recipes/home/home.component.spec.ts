import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the results page with the searched value passed by query param', () => {
    const router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    const searchedValue = 'my search';

    component.onEnter(searchedValue);

    expect(routerSpy).toHaveBeenCalledWith(['recipes/search'], { queryParams: { q: searchedValue } });
  });
});
