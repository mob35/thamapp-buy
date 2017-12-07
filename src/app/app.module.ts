import { IonUploadImagesComponent } from './../components/ion-upload-image/ion-upload-image';
import { HistoryPage } from './../pages/history/history';
import { HistoryDetailPage } from './../pages/history-detail/history-detail';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { CartPage } from '../pages/cart/cart';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { ListScollXComponent } from '../components/list-scoll-x/list-scoll-x';
import { PreloadImage } from '../components/preload-image/preload-image';

import { Ionic2RatingModule } from 'ionic2-rating';
import { Dialogs } from '@ionic-native/dialogs';
import { AutoCompleteModule } from 'ionic2-auto-complete';

import {
  EcommerceCoreModule,
  IonIconSearchbarComponent,
  IonFormProfileComponent,
  IonListCartComponent,
  IonListProductComponent,
  IonFormReviewComponent,
  IonFormCreditComponent,
  IonFormCounterserviceComponent,
  IonListShopComponent,
  IonDetailShopComponent,
  IonBackgroundImageComponent,
  IonListScollXComponent
} from "@ngcommerce/core";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ListshopPage } from '../pages/listshop/listshop';
import { ListproductPage } from '../pages/listproduct/listproduct';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ShopDetailPage } from '../pages/shop-detail/shop-detail';
import { WritereviewPage } from '../pages/writereview/writereview';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ThamappAuthenProvider } from '../providers/thamapp-authen/thamapp-authen';
import { LoadingProvider } from '../providers/loading/loading';
import { OrderProvider } from '../providers/order/order';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { CheckoutPage } from '../pages/checkout/checkout';
import { FormAddressPage } from '../pages/form-address/form-address';
import { CompletePage } from '../pages/complete/complete';
import { IonFormPaymentComponent } from '../components/ion-form-payment/ion-form-payment';
import { IonFormPaymentOptionComponent } from '../components/ion-form-paymentoption/ion-form-paymentoption';
import { IonFormDeliveryComponent } from '../components/ion-form-delivery/ion-form-delivery';
import { IonFormBankComponent } from '../components/ion-form-bank/ion-form-bank';
import { NotificationPage } from '../pages/notification/notification';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { OneSignal } from '@ionic-native/onesignal';
import { MomentPipe } from "../pipes/moment/moment";
import { Facebook } from '@ionic-native/facebook';
import { IonDetailProductComponent } from '../components/ion-detail-product/ion-detail-product';
import { IonFormShippingComponent } from '../components/ion-form-shipping/ion-form-shipping';
import { IonFormConfirmComponent } from '../components/ion-form-confirm/ion-form-confirm';
import { IonFormWizardComponent } from '../components/ion-form-wizard/ion-form-wizard';
import { IonFormWizardStepComponent } from '../components/ion-form-wizard-step/ion-form-wizard-step';
import { PostcodeProvider } from '../providers/postcode/postcode';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FavoritePage,
    CartPage,
    SearchPage,
    ProfilePage,
    TabsPage,
    ListshopPage,
    ListproductPage,
    ProductDetailPage,
    ShopDetailPage,
    WritereviewPage,
    LoginPage,
    RegisterPage,
    CheckoutPage,
    FormAddressPage,
    CompletePage,

    ListScollXComponent,
    IonBackgroundImageComponent,
    IonIconSearchbarComponent,
    // IonListGridComponent,
    PreloadImage,
    IonListShopComponent,
    IonListProductComponent,
    IonDetailShopComponent,
    IonDetailProductComponent,
    IonFormReviewComponent,
    IonListCartComponent,
    HistoryDetailPage,
    HistoryPage,
    NotificationPage,
    EditProfilePage,
    IonUploadImagesComponent,
    IonFormProfileComponent,
    IonListScollXComponent,

    // Checkout core
    IonFormCreditComponent,
    IonFormCounterserviceComponent,
    // Checkout Page
    IonFormWizardComponent,
    IonFormWizardStepComponent,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent,
    IonFormShippingComponent,
    IonFormConfirmComponent,
    //pipe moment
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    HttpModule,
    Ionic2RatingModule,
    EcommerceCoreModule.forRoot('https://thamturakit-test.herokuapp.com/api/'),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FavoritePage,
    CartPage,
    SearchPage,
    ProfilePage,
    TabsPage,
    ListshopPage,
    ListproductPage,
    ProductDetailPage,
    ShopDetailPage,
    WritereviewPage,
    LoginPage,
    RegisterPage,
    HistoryDetailPage,
    HistoryPage,
    CheckoutPage,
    FormAddressPage,
    CompletePage,
    NotificationPage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ThamappAuthenProvider,
    LoadingProvider,
    ImagePicker,
    Base64,
    OrderProvider,
    OneSignal,
    Facebook,
    Dialogs,
    PostcodeProvider
  ]
})
export class AppModule { }
