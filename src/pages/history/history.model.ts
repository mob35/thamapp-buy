import { AddressModel } from "@ngcommerce/core";
import { OrderItemModel, PaymentItemModel } from "@ngcommerce/core/src/models/Order.model";

export class OrderModel {
    _id: string;
    shipping: AddressModel;
    items: Array<OrderItemModel>;
    payment: PaymentItemModel;
    amount: number;
    discount: number;
    totalamount: number;
    deliveryprice: number;
    discountcode: string;
    status: string;
    promotionprice: number;
    currency: string;
    percentofdiscount: number;
    omiseresponse: {};
}
