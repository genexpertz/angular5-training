import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {IUser} from "./IUser";
import {Injectable} from "@angular/core";

/**
 * Created by gireeshbabu on 30/11/17.
 */

@Injectable()
export class UserService{

  private _userUrl = "/rest/user"

  constructor(private _http: Http){

  }

  getUsers():Observable<IUser[]>{
    return this._http.get(this._userUrl)
      .map((response: Response) => response.json())
      .do(users => console.log(JSON.stringify(users.data)));
  }

}
