import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AutoCompleteService } from 'ionic2-auto-complete';

/*
  Generated class for the PostcodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostcodeProvider implements AutoCompleteService {
  labelAttribute = "postcode";

  constructor(public http: Http) {
    console.log('Hello PostcodeProvider Provider');
  }
  getResults(keyword: string) {
    if (keyword.length >= 4) {
      return this.http.get("./assets/json/postcode.json")
        .map(
        result => {
          let res = result.json()
          return res.filter(item => item.postcode.toLowerCase().startsWith(keyword.toLowerCase()))
        });
    }else{
      return [];
    }
  }
}
