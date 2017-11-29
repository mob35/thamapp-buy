import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from "../../app/app.contant";
import { CorService } from '@ngcommerce/core';
import { OrderModel } from '../../pages/history/history.model';
/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(public http: Http, public corService: CorService) {
    console.log('Hello OrderProvider Provider');
  }
  getOrderList(): Promise<Array<OrderModel>> {
    // let headers = this.corService.createAuthorizationHeader();
    let user = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    return this.http
      .get(Constants.URL + 'orderbyuser/' + user._id)
      .toPromise()
      .then(response => response.json() as Array<OrderModel>)
      .catch(this.handleError);
  }

  getOrderByID(id): Promise<OrderModel> {
    let headers = this.corService.createAuthorizationHeader();
    return this.http
      .get(Constants.URL + 'orders/' + id, { headers: headers })
      .toPromise()
      .then(response => response.json() as OrderModel)
      .catch(this.handleError);
  }

  updateOrder(id, image): Promise<OrderModel> {
    let data = { image: image }
    // let headers = this.corService.createAuthorizationHeader();
    return this.http
      .put(Constants.URL + 'sliporder/' + id, data)
      .toPromise()
      .then(response => response.json() as OrderModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
