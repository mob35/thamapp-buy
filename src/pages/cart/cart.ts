import { CartService } from '@ngcommerce/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CartModel, UserModel } from '@ngcommerce/core';
import { ThamappAuthenProvider } from '../../providers/thamapp-authen/thamapp-authen';
import { LoginPage } from '../login/login';
import { CheckoutPage } from '../checkout/checkout';
import { LoadingProvider } from '../../providers/loading/loading';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart = {} as CartModel;
  user = {} as UserModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public app: App,
    public thamappAuthenService: ThamappAuthenProvider,
    public loadingCtrl: LoadingProvider
  ) {
  }

  ionViewWillEnter() {
    this.loadingCtrl.onLoading();
    let user = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    this.user = user;
    if (user) {
      let cartStorage = JSON.parse(window.localStorage.getItem('gCart'));
      if (cartStorage) {
        if (cartStorage.items && cartStorage.items.length > 0) {
          this.cart = cartStorage;
          this.onCalculate();
        }
      }
    }
    this.loadingCtrl.dismiss();
  }

  returnItems(event) {
    this.onCalculate();

  }
  onCalculate() {
    this.cart = this.cartService.onCalculate(this.cart);
    this.cartService.saveCartStorage(this.cart);
  }

  gotocheckout() {
    this.loadingCtrl.onLoading();
    this.thamappAuthenService.checkTokenUser().then((data) => {
      this.loadingCtrl.dismiss();
      this.navCtrl.push(CheckoutPage)
    }, (err) => {
      this.loadingCtrl.dismiss();
      this.showLogInPage();
    });
  }

  showLogInPage() {
    this.navCtrl.push(LoginPage);
  }

  goHome() {
    window.localStorage.setItem('selectedTab', '0');
    this.app.getRootNav().setRoot(TabsPage);    
  }

}
