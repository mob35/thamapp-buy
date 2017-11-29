import { NgModule } from '@angular/core';
import { ListScollXComponent } from './list-scoll-x/list-scoll-x';
import { PreloadImage } from './preload-image/preload-image';
import { IonFormPaymentComponent } from './ion-form-payment/ion-form-payment';
import { IonFormPaymentOptionComponent } from './ion-form-paymentoption/ion-form-paymentoption';
import { IonFormDeliveryComponent } from './ion-form-delivery/ion-form-delivery';
import { IonFormBankComponent } from './ion-form-bank/ion-form-bank';
import { IonDetailProductComponent } from './ion-detail-product/ion-detail-product';
import { IonFormShippingComponent } from './ion-form-shipping/ion-form-shipping';
import { IonFormConfirmComponent } from './ion-form-confirm/ion-form-confirm';
import { IonFormWizardComponent } from './ion-form-wizard/ion-form-wizard';
import { IonFormWizardStepComponent } from './ion-form-wizard-step/ion-form-wizard-step';
@NgModule({
	declarations: [ListScollXComponent,
		PreloadImage,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent,
    IonDetailProductComponent,
    IonFormShippingComponent,
    IonFormConfirmComponent,
    IonFormWizardComponent,
    IonFormWizardStepComponent],
	imports: [],
	exports: [ListScollXComponent,
		PreloadImage,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent,
    IonDetailProductComponent,
    IonFormShippingComponent,
    IonFormConfirmComponent,
    IonFormWizardComponent,
    IonFormWizardStepComponent]
})
export class ComponentsModule { }
