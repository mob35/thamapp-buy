import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonFormPaymentoptionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-paymentoption',
  templateUrl: 'ion-form-paymentoption.html'
})
export class IonFormPaymentOptionComponent {
  @Input() paymentgateway: any;
  @Input() datashipping: any;
  @Input() channel: any;
  @Output() datapayment: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello IonFormPaymentOptionComponent Component');
  }
  selectpayment(data) {
    this.datashipping.order.payment = {
      paymenttype: data.name
    };
    this.datapayment.emit(this.datashipping);
  }
}
