import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableConstructor } from './observable-constructor';

describe('ObservableConstructor', () => {
  let component: ObservableConstructor;
  let fixture: ComponentFixture<ObservableConstructor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableConstructor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableConstructor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
