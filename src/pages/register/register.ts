import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Platform } from 'ionic-angular';
import { regiterModel } from './register.model';
import { LoadingProvider } from '../../providers/loading/loading';
import { Dialogs } from '@ionic-native/dialogs';
import { AuthenService } from '@ngcommerce/core';
import { TabsPage } from '../tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';
// import { TabsPage } from './../tabs/tabs';
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
    public authenService: AuthenService,
    public app: App,
    public loadingCtrl: LoadingProvider,
    public dialogs: Dialogs,
    public platform: Platform,
    public oneSignal: OneSignal
  ) {
    // alert(this.navParams.data);
    if (this.navParams.data && this.navParams.data !== undefined) {
      this.user.tel = this.navParams.data;
      this.user.username = this.user.tel;
    }

    if (this.navParams.get('facebook') && this.navParams.get('facebook') !== undefined) {
      let user = this.navParams.get('facebook');
      this.user.username = user.email;
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

  // saveAddress() {
  //   this.loadingCtrl.onLoading();
  //   this.thamappAuthenService.regisAndAddress(this.user).then((data) => {
  //     this.loadingCtrl.dismiss();
  //     window.localStorage.setItem('selectedTab', '2');
  //     this.app.getRootNav().setRoot(TabsPage);
  //   }, (err) => {
  //     this.loadingCtrl.dismiss();
  //     if (JSON.parse(err._body).message) {
  //       this.dialogs.alert(JSON.parse(err._body).message, 'Register');
  //     } else {
  //       console.log(err);
  //     }
  //   });
  // }

  onRegister() {
    this.loadingCtrl.onLoading();
    this.user.password = 'Usr#Pass1234';
    this.authenService.signUp(this.user).then((data) => {
      window.localStorage.setItem('thamappbuyer', JSON.stringify(data));
      window.localStorage.setItem('token', data.loginToken);
      if (this.platform.is('cordova')) {
        this.oneSignal.getIds().then((oneSignal) => {
          this.authenService.pushNotificationUser({ id: oneSignal.userId });
        });
      }
      window.localStorage.setItem('selectedTab', '2');
      this.loadingCtrl.dismiss();
      this.app.getRootNav().setRoot(TabsPage);
    }, (err) => {
      this.loadingCtrl.dismiss();
      if (JSON.parse(err._body).message) {
        this.dialogs.alert(JSON.parse(err._body).message, 'Register');
      } else {
        console.log(err);
      }
    });
  }

}
