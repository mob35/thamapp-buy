import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the IonFormShippingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-shipping',
  templateUrl: 'ion-form-shipping.html'
})
export class IonFormShippingComponent {
  @Input() listaddress: Array<any>;
  @Input() listshipping: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() createAddress: EventEmitter<any> = new EventEmitter<any>();

  address = {};
  deli = 0;
  data: any = {
    order: {
      shipping: {},
      items: [],
      payment: {},
      amount: 0,
      discount: 0,
      totalamount: 0,
      deliveryprice: 0
    }
  };
  constructor(
    private dialogs: Dialogs
  ) {
    console.log('Hello IonFormShippingComponent Component');
  }
  selectaddress(data) {
    this.data.order.shipping = data;
  }
  openModal() {
    this.createAddress.emit('push model');
  }

  setproduct(product, ship) {
    var shipping = {
      name: ship.shippingtype.name,
      detail: ship.shippingtype.detail,
      price: ship.shippingprice
    }
    console.log(ship);
    console.log(shipping);
    var checkProduct = false;
    if (this.data.order.items && this.data.order.items.length > 0) {
      // console.log('+++++++++++++++++++++++++++++++++');
      this.data.order.items.forEach(itm => {
        if (itm.product.name === product.product.name) {
          itm.delivery = shipping;
          checkProduct = true;
        }
      });
    }
    if (!checkProduct) {
      this.data.order.items.push({
        product: product.product,
        qty: product.qty,
        amount: ((product.product.price || 0) * (product.qty)),
        delivery: shipping,
        price: product.product.price,
        discount: product.discount,
        afterdiscount: (product.amount || 0) - (product.discount || 0)

      });
      if (this.data.order.items.length === this.listshipping.items.length) {
        this.data.order.items.forEach(itm => {
          this.deli += itm.delivery.price || 0;
          this.listshipping.totalamount = (this.listshipping.totalamount) += itm.delivery.price || 0;
        });
      }
    }
    console.log(this.data.order);
  }
  stepValidation() {
    if (this.data.order.shipping && this.data.order.shipping.address) {
      if (this.data.order.items.length === this.listshipping.items.length) {
        this.data.order.items.forEach(itm => {
          console.log(itm);
          this.data.order.deliveryprice += itm.delivery.price || 0;
          this.data.order.discount += itm.discount || 0;
          this.data.order.amount += itm.amount || 0;
          this.data.order.totalamount += itm.afterdiscount || 0;
        });
        console.log(this.data.order);
        this.gotoNext.emit(this.data);
      } else {
        this.dialogs.alert('Please select products delivery', 'Delivery');
      }
    } else {
      this.dialogs.alert('Please select shipping', 'Shipping');
    }
  }

}
