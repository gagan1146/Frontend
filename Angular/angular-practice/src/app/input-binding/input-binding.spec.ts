import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBinding } from './input-binding';

describe('InputBinding', () => {
  let component: InputBinding;
  let fixture: ComponentFixture<InputBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
