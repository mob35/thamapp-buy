import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteService, ProductService } from '@ngcommerce/core';
import { Http } from '@angular/http';
import { ProductDetailPage } from '../product-detail/product-detail';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favorite: any = { items: [] };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public productService: ProductService,
    public favoriteService: FavoriteService,
    public loadingCtrl: LoadingProvider
  ) {
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad FavoritePage');
    this.getListFavorite();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoritePage');
  // }
  getListFavorite() {
    let favorites = this.favoriteService.getFavoriteList();
    console.log(favorites);
    this.favorite = favorites ? favorites : { items: [] };
  }
  getListProduct() {
    this.loadingCtrl.onLoading();
    this.productService.getProductList().then((data) => {
      this.favorite = data;
      console.log(data);
      this.loadingCtrl.dismiss();
    }, (error) => {
      console.error(error);
      this.loadingCtrl.dismiss();
    });
  }
  selectedProduct(item) {
    this.navCtrl.push(ProductDetailPage, item);
  }

}
