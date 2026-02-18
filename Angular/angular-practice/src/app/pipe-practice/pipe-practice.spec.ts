import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePractice } from './pipe-practice';

describe('PipePractice', () => {
  let component: PipePractice;
  let fixture: ComponentFixture<PipePractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipePractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
