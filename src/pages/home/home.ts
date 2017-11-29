import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { HomeService, HomeCategoryModel, ProductItemModel } from "@ngcommerce/core";
import { ListshopPage } from '../listshop/listshop';
import { ListproductPage } from '../listproduct/listproduct';
import { ProductDetailPage } from '../product-detail/product-detail';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { SearchPage } from '../search/search';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeData = {} as HomeCategoryModel;
  lastVisit = [] as Array<ProductItemModel>;
  popularProduct = [] as Array<ProductItemModel>;
  pages: string;
  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public homeService: HomeService,
    public loadingCtrl : LoadingProvider
    
  ) {

  }
  ionViewWillEnter() {
    this.getHomeData();
    this.getLastVisit();
  }

  getHomeData() {
    this.pages = '0';
    this.loadingCtrl.onLoading();
    this.homeService.getHome().then((data) => {
      this.homeData = data;
      console.log(this.homeData);
      this.loadingCtrl.dismiss();
    }, (error) => {
      console.log(error);
      this.loadingCtrl.dismiss();
    });

  }

  getLastVisit() {
    this.lastVisit = this.homeService.getLastVisit();
  }
  onSelectedPage(index) {
    this.pages = index;
  }

  gotoListShop(cate) {
    this.navCtrl.push(ListshopPage, cate);
  }

  gotoListProduct(cate) {
    this.navCtrl.push(ListproductPage, cate);
  }
  
  gotoProductDetail(e) {
    this.navCtrl.push(ProductDetailPage, e);
  }

  gotoShopDetail(e) {
    this.navCtrl.push(ShopDetailPage, e);
  }
  gotoSearchPage(){
    this.navCtrl.push(SearchPage);
  }
}
