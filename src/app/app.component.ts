import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private oneSignal: OneSignal
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.is('cordova')) {
        this.onSignalSetup();
        this.configFirebase();
        window.localStorage.setItem('selectedTab', '0');
      }
    });
  }

  configFirebase() {
    let config = {
      apiKey: "AIzaSyA-adeTrR-W9bWXK0Z41c7VlJg9mGwUoZg",
      authDomain: "thamturakit-id.firebaseapp.com",
      databaseURL: "https://thamturakit-id.firebaseio.com/",
      projectId: "thamturakit-id",
      storageBucket: "thamturakit-id.appspot.com",
      messagingSenderId: "503984043648"
    };
    firebase.initializeApp(config);
  }

  onSignalSetup() {
    this.oneSignal.startInit('4deb2817-a4ea-496c-867e-9eb26940f565', '503984043648');

    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((onReceived) => {
      // do something when notification is received
      let notifications = window.localStorage.getItem('buyerNotification') ? JSON.parse(window.localStorage.getItem('buyerNotification')) : [];

      notifications.unshift({
        date: new Date(),
        message: onReceived.payload.body
      });

      window.localStorage.setItem('buyerNotification', JSON.stringify(notifications));
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }
}
