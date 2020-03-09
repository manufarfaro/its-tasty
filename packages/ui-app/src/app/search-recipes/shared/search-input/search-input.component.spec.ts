import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise onEnter event when enter key is pressed', () => {
    let nextSearchValue: string = null;
    const passedSearchValue = 'my search';
    const eventMock: { target: { value: string } } = { target: { value: passedSearchValue} };

    component.keyUpEnter.subscribe(value => nextSearchValue = value);
    component.onKeyEnter(eventMock);

    expect(nextSearchValue).toEqual(passedSearchValue);
  });

  it('should update input value when a key is pressed', () => {
    const passedValue = 'my search';
    const eventMock: { target: { value: string } } = { target: { value: passedValue} };

    component.onKey(eventMock);

    expect(component.value).toEqual(passedValue);
  });
});
