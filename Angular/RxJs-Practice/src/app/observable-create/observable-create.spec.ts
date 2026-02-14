import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCreate } from './observable-create';

describe('ObservableCreate', () => {
  let component: ObservableCreate;
  let fixture: ComponentFixture<ObservableCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
