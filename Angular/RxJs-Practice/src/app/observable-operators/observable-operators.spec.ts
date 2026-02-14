import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOperators } from './observable-operators';

describe('ObservableOperators', () => {
  let component: ObservableOperators;
  let fixture: ComponentFixture<ObservableOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
