import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFrom } from './observable-from';

describe('ObservableFrom', () => {
  let component: ObservableFrom;
  let fixture: ComponentFixture<ObservableFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
