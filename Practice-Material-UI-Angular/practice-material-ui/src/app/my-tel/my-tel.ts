import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class MyTelInput {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) {}
}

@Component({
  selector: 'app-my-tel',
  templateUrl: './my-tel.html',
  styleUrls: ['./my-tel.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MyTel },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MyTel,
      multi: true,
    },
  ],
  imports:[FormGroup],
  standalone:true
})
export class MyTel implements MatFormFieldControl<MyTelInput> {
  parts: FormGroup;

  @Input()
  get value(): MyTelInput | null {
    const n = this.parts.value;
    if (n.area?.length === 3 && n.exchange?.length === 3 && n.subscriber?.length === 4) {
      return new MyTelInput(n.area, n.exchange, n.subscriber);
    }
    return null;
  }

  set value(tel: MyTelInput | null) {
    tel = tel || new MyTelInput('', '', '');
    this.parts.setValue({
      area: tel.area,
      exchange: tel.exchange,
      subscriber: tel.subscriber,
    });
  }

  constructor(fb: FormBuilder) {
    this.parts = fb.group({
      area: [''],
      exchange: [''],
      subscriber: [''],
    });
  }

  // You’ll need to implement the rest of MatFormFieldControl’s required members:
  // stateChanges, id, placeholder, required, disabled, errorState, controlType, etc.
}