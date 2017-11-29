import { LoginPage } from './../login/login';
import { ThamappAuthenProvider } from './../../providers/thamapp-authen/thamapp-authen';
import { HistoryDetailPage } from './../history-detail/history-detail';
import { LoadingProvider } from './../../providers/loading/loading';
import { OrderProvider } from './../../providers/order/order';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { OrderModel } from './history.model';
// import { OrderModel } from '@ngcommerce/core';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  user: any;
  order: Array<OrderModel>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderService: OrderProvider,
    public loadingCtrl: LoadingProvider,
    public app: App,
    public thamappAuthenService: ThamappAuthenProvider,

  ) {
    this.user = JSON.parse(window.localStorage.getItem('thamappbuyer'));
  }

  ionViewWillEnter() {
    this.gotocheckout();
  }
  getHistory() {
    this.loadingCtrl.onLoading();
    this.orderService.getOrderList().then((data) => {
      this.order = data;
      this.loadingCtrl.dismiss();
      console.log(data);
    }, (err) => {
      this.loadingCtrl.dismiss();
      console.log(err);
    });

  }

  gotocheckout() {
    this.loadingCtrl.onLoading();
    this.thamappAuthenService.checkTokenUser().then((data) => {
      this.loadingCtrl.dismiss();
      // alert('ready to go!');
      this.getHistory();

      // this.navCtrl.push(CheckoutPage)
    }, (err) => {
      this.loadingCtrl.dismiss();
      // this.showLogInPage();
      this.order = [];
      this.user = undefined;
    });
  }

  detailHistory(item) {
    this.navCtrl.push(HistoryDetailPage, item);
  }

  showLogInPage() {
    this.navCtrl.push(LoginPage);
  }
}
