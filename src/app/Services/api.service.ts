import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {apiSettings} from '../Config/api.config';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getAuthor(author){
    return this._http.get(apiSettings.apiUrl + author)
      .map(response => response.json());
  }


}
