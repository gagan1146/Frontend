import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfBothBinding } from './parent-of-both-binding';

describe('ParentOfBothBinding', () => {
  let component: ParentOfBothBinding;
  let fixture: ComponentFixture<ParentOfBothBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOfBothBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOfBothBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
