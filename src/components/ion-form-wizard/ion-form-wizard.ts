import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonFormWizardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-wizard',
  templateUrl: 'ion-form-wizard.html'
})
export class IonFormWizardComponent {

  text: string;
  @Input() currentstep: any;
  @Input() steps:Array<any>;
  constructor() {
    
  }
}
