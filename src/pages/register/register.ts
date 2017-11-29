import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { regiterModel } from './register.model';
import { ThamappAuthenProvider } from '../../providers/thamapp-authen/thamapp-authen';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: regiterModel = new regiterModel();
  isFacebook: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public thamappAuthenService: ThamappAuthenProvider,
    public app: App,
    public loadingCtrl: LoadingProvider
  ) {
    // alert(this.navParams.data);
    if (this.navParams.data && this.navParams.data !== undefined) {
      this.user.tel = this.navParams.data;
    }

    if (this.navParams.get('facebook') && this.navParams.get('facebook') !== undefined) {
      let user = this.navParams.get('facebook');
      this.user.firstName = user.first_name;
      this.user.lastName = user.last_name;
      this.user.email = user.email;
      this.user.profileImageURL = user.picture.data.url;
      this.user.tel = '';
      this.isFacebook = true;
      this.user.isFacebook = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  saveAddress() {
    this.loadingCtrl.onLoading();
    this.thamappAuthenService.regisAndAddress(this.user).then((data) => {
      this.loadingCtrl.dismiss();
      window.localStorage.setItem('selectedTab', '2');
      this.app.getRootNav().setRoot(TabsPage);
    }, (err) => {
      this.loadingCtrl.dismiss();
      alert(JSON.parse(err._body).message);
    });
  }

}
