import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOf } from './observable-of';

describe('ObservableOf', () => {
  let component: ObservableOf;
  let fixture: ComponentFixture<ObservableOf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableOf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
