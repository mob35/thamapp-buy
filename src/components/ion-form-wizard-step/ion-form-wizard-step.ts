import { Component, Input } from '@angular/core';
import { IonFormWizardComponent } from '../ion-form-wizard/ion-form-wizard';

/**
 * Generated class for the IonFormWizardStepComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-wizard-step',
  templateUrl: 'ion-form-wizard-step.html'
})
export class IonFormWizardStepComponent {
  @Input() step: any;
  constructor(public parent: IonFormWizardComponent) {
  }

}
