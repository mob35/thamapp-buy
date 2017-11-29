import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';

/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html',
})
export class CompletePage {
  completeOrder: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.completeOrder = JSON.parse(window.localStorage.getItem('order'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletePage');
  }
  goHome() {
    window.localStorage.setItem('selectedTab', '0');
    localStorage.removeItem('gCart');
    this.app.getRootNav().setRoot(TabsPage); // set full page
  }
}
