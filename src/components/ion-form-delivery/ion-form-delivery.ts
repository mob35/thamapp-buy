import { Component, Input } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';

/**
 * Generated class for the IonFormDeliveryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-delivery',
  templateUrl: 'ion-form-delivery.html'
})
export class IonFormDeliveryComponent {
  @Input() value: string;
  constructor(public parent: IonFormPaymentOptionComponent) {
    console.log('Hello IonFormDeliveryComponent Component');
  }

}
