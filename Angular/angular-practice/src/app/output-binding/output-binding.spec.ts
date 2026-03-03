import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBinding } from './output-binding';

describe('OutputBinding', () => {
  let component: OutputBinding;
  let fixture: ComponentFixture<OutputBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
