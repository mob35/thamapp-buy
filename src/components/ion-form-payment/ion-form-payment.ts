import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the IonFormPaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-payment',
  templateUrl: 'ion-form-payment.html'
})
export class IonFormPaymentComponent {
  data: any = {};
  @Input() paymentgateway: any;
  @Input() datashipping: any;
  datapayment: any = {};
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() datapaymentData: EventEmitter<any> = new EventEmitter<any>();

  channel: string;

  constructor(
    public dialogs: Dialogs
  ) {
  }
  paymentType(e) {
    this.datapayment = e;
  }
  formcredit(e) {
    if (e.creditno) {
      this.datashipping.order.payment.creditno = e.creditno
    }
    if (e.creditname) {
      this.datashipping.order.payment.creditname = e.creditname
    }
    if (e.expdate) {
      this.datashipping.order.payment.expdate = e.expdate
    }
    if (e.creditcvc) {
      this.datashipping.order.payment.creditcvc = e.creditcvc
    }
  }
  stepValidation() {
    this.datapayment = this.datashipping;
    let chk = false;
    if (this.datapayment.order && this.datapayment.order.payment && this.datapayment.order.payment.paymenttype) {
      if (this.datapayment.order.payment.paymenttype === 'Cash On Delivery') {
        chk = true;
      } else if (this.datapayment.order.payment.paymenttype === 'Bank Transfer') {
        chk = true;
      }
    } else {
      this.datapayment.order.payment.paymenttype = this.channel;
    }

    if (chk) {
      this.gotoNext.emit(this.datapayment);
    } else {
      this.dialogs.alert('Please enter your payment', 'Payment');
    }
  }
}
