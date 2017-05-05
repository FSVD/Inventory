import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Inventory } from './inventory.class';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class InventoryService {

  private headers = new Headers({'Content-Type' : 'application/json'});
  private url = 'http://127.0.0.1:3000/product';

  constructor(private http: Http) { }
  
  getProducts(): Observable<Inventory[]> {
    let url = `${this.url}`;
    return this.http.get(url)
               .map(res => res.json())
               .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}