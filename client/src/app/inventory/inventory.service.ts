import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

import { Inventory } from './inventory.class';
import { ServerList } from '../../environments/serverlist.class';

@Injectable()
export class InventoryService {

  private options;
  private url = ServerList.domain+"/product";
  //private url = 'http://127.0.0.1:3000/product';

  constructor(private http: Http) {

    let authorizationKey = localStorage.getItem('authorizationKey');
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + authorizationKey
    });
    this.options = new RequestOptions({headers: headers});
  }
  
  getProductById(id: number): Observable<Inventory[]> {
    let url = `${this.url}/${id}`;
    return this.http.get(url, this.options)
                    .first()
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getProducts(): Observable<Inventory[]> {
    let url = `${this.url}`;
    return this.http.get(url, this.options)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  addProduct(product: Inventory) {
    let url = `${this.url}`;
    let productToJson = JSON.stringify(product);
    return this.http.post(url, productToJson, this.options)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  updateProduct(product: Inventory) {
    let url = `${this.url}`;
    let productToJson = JSON.stringify(product);
    return this.http.put(url, productToJson, this.options)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  deleteProduct(id: number) {
    let url = `${this.url}/${id}`;
    return this.http.delete(url, this.options)
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