import { LoadingProvider } from './../../providers/loading/loading';
import { OrderProvider } from './../../providers/order/order';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderModel } from '../history/history.model';

/**
 * Generated class for the HistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-detail',
  templateUrl: 'history-detail.html',
})
export class HistoryDetailPage {
  item: OrderModel = new OrderModel();
  pImages: Array<string> = [];
  resImg: string = '';
  // isImage: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderService: OrderProvider,
    public loadingCtrl: LoadingProvider
  ) {
    // this.item = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    // this.pImages = this.editProfile.profileImageURL ? [this.editProfile.profileImageURL] : [];
    this.getHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryDetailPage');
  }

  resImageEvent(e) {
    this.resImg = e[0] ? e[0] : '';
  }

  getHistory() {
    this.loadingCtrl.onLoading();
    this.orderService.getOrderByID(this.navParams.data).then((data) => {
      this.item = data;
      // this.item.items.forEach(product => {
      //   if (product) {
      //     this.pImages = product.product.images ? JSON.parse(JSON.stringify(product.product.images)) : [];
      //   }
      // });
      this.loadingCtrl.dismiss();
      console.log(this.item);
    }, (err) => {
      this.loadingCtrl.dismiss();
      console.log(err);
    });
  }
  upLoadSlip() {
    this.orderService.updateOrder(this.navParams.data, this.resImg).then((data) => {
      this.getHistory();
    }, (err) => {
      console.log(err);
    });
  }
}
