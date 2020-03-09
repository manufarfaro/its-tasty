import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import {Router} from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the same page with the passed credentials', () => {
    const router = TestBed.inject(Router);
    const routerSpy = spyOn(router, 'navigate');
    const searchedValue = 'my search';

    component.onEnter(searchedValue);

    expect(routerSpy).toHaveBeenCalledWith(['recipes/search'], { queryParams: { q: searchedValue } });
  });
});
