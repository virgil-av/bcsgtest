import { Injectable } from '@angular/core';
import {Http, Jsonp} from "@angular/http";
import {apiSettings} from '../Config/api.config';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  constructor(private _http: Http, private _jsonp: Jsonp) { }

  getAuthor(author){
    return this._jsonp.get(apiSettings.apiUrl + author + '&callback=JSONP_CALLBACK')
      .map(response => response.json());
  }


}
