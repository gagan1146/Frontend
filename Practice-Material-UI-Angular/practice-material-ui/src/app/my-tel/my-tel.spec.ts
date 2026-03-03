import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTel } from './my-tel';

describe('MyTel', () => {
  let component: MyTel;
  let fixture: ComponentFixture<MyTel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
