import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';

/**
 * Generated class for the IonFormBankComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-bank',
  templateUrl: 'ion-form-bank.html'
})
export class IonFormBankComponent {
  @Input() value: string;
  constructor(public parent: IonFormPaymentOptionComponent) {
    console.log('Hello IonFormBankComponent Component');
  }
}
