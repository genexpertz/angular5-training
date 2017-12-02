
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";

/**
 * Created by gireeshbabu on 02/12/17.
 */

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {IProduct} from './iproduct';
import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {

  private _productsUrl = '/rest/products'

  constructor(private _http: Http) {

  }

  getProducts(): Observable <IProduct[]> {
    return this._http.get(this._productsUrl)
      .map((response: Response) => response.json())
      .do(products => console.log(JSON.stringify(products)));
  }

}
