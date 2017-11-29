import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserModel, AuthenService } from "@ngcommerce/core";
import { NotificationPage } from '../notification/notification';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { LoginPage } from './../login/login';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userProfile = {} as UserModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl : LoadingProvider,
    public authenService: AuthenService
  ) {
    
  }
  ionViewWillEnter() {
    this.loadingCtrl.onLoading();
    this.userProfile = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    this.isSetting();
    this.isNoti();
    this.loadingCtrl.dismiss();
  }

  logout(e) {
    window.localStorage.removeItem('thamappbuyer');
    this.userProfile = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    this.isSetting();
    this.isNoti();
  }

  notification(e) {
    this.navCtrl.push(NotificationPage);
  }

  loginModal(e) {
    this.navCtrl.push(LoginPage);
  }

  editProfile(e) {
    this.navCtrl.push(EditProfilePage);
  }

  isSetting() {
    let user = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  isNoti() {
    this.userProfile = JSON.parse(window.localStorage.getItem('thamappbuyer'));
    let noti = JSON.parse(window.localStorage.getItem('buyerNotification'));
    if (noti && this.userProfile) {
      return true;
    } else {
      return false;
    }
  }

}
