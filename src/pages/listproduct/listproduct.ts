import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductListModel, HomeService } from '@ngcommerce/core';
import { ProductDetailPage } from '../product-detail/product-detail';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the ListproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listproduct',
  templateUrl: 'listproduct.html',
})
export class ListproductPage {
  products = {} as ProductListModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public homeService: HomeService,
    public loadingCtrl : LoadingProvider
  ) {
  }

  ionViewDidLoad() {
    this.getProducts(this.navParams.data);
  }

  getProducts(category) {
    this.loadingCtrl.onLoading();
    this.homeService.seeAllProduct(category).then((data) => {
      this.products = data;
      this.loadingCtrl.dismiss();
    }, (error) => {
      console.log(error);
      this.loadingCtrl.dismiss();
    });
  }
  selectedProduct(item) {
    this.navCtrl.push(ProductDetailPage, item);
  }

}
