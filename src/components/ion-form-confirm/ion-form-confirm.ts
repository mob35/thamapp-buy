import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the IonFormConfirmComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-confirm',
  templateUrl: 'ion-form-confirm.html'
})
export class IonFormConfirmComponent {
  data: any;
  @Input() confirmgateway: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  confirmdiscount: number;
  constructor() {
    console.log('Hello IonFormConfirmComponent Component');
  }
  // discount(data) {
  //   if (data && data > 0) {
  //     if (this.confirmgateway.order.amount && this.confirmgateway.order.amount >= data) {
  //       this.confirmgateway.order.discount = data;
  //     } else {
  //       this.confirmgateway.order.discount = this.confirmgateway.order.amount;
  //     }
  //   } else {
  //     this.confirmgateway.order.discount = 0;
  //   }
  // }
  stepValidation() {

    if (this.confirmgateway.order.discount && this.confirmgateway.order.discount > 0 && !undefined) {
      this.confirmgateway.order.totalamount = ((this.confirmgateway.order.deliveryprice || 0) + (this.confirmgateway.order.amount || 0)) - (this.confirmgateway.order.discount || 0);
    } else {
      this.confirmgateway.order.totalamount = ((this.confirmgateway.order.deliveryprice || 0) + (this.confirmgateway.order.amount || 0));
    }
    this.gotoNext.emit(this.confirmgateway.order);
  }

}
