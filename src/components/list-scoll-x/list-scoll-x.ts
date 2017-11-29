import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * Generated class for the ListScollXComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-scoll-x',
  templateUrl: 'list-scoll-x.html'
})
export class ListScollXComponent {
  @Input() populars: any;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
  _selectedItem(data) {
    this.selectedItem.emit(data);
  }
}
