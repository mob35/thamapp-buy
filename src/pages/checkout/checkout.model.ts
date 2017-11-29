import { ProductItemModel } from "@ngcommerce/core";

export interface CheckoutModel {
    _id: string;
    items: Array<CheckoutItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
}
export interface CheckoutItemModel {
    product: ProductModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
}
export interface ShippingModel {
    _id: string;
    products: Array<PaymentItemModel>;
    amount: number;
}
export interface PaymentItemModel {
    product: ProductItemModel;
    price: number;
    qty: number;
    itemamount: number;
}

export interface ProductModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number;
    percentofdiscount: number;
    currency: string;
    categories: Array<CategoryModel>;
    images: Array<string>;
    reviews: Array<ReviewsModel>;
    shippings: Array<DataShipping>;
    shop: ShopModel;
    cod: Boolean;
    isFavorite: Boolean;
}

export class DataShipping {
    shippingtype: Shipping;
    shippingprice: Number;
}

export interface Shipping {
    _id: string;
    name: string;
    detail: string;
    dudate: number;
    price: number;
}

export interface CategoryModel {
    _id: string;
    name: string;
}

export interface ReviewsModel {
    topic: string;
    comment: string;
    rate: number;
    created: Date;
    user: any;
}

export interface ShopModel {
    _id: string;
    name: string;
    email: string;
    tel: string;
    map: map;
    image: string;
    detail: string;
    reviews: Array<ReviewsModel>;
    rate: number;
}

export interface map {
    lat: string;
    long: string;
}