import { Injectable } from "@angular/core";
import { HttpModule, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IEmployee } from "./menu";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";


@Injectable()
export class MenuService {
  constructor(private _http: Http) {}
  getEmployees(): Observable<IEmployee[]> {
    return this._http
      .get("http://localhost:59637/api/employees")
      .map((response: Response) => <IEmployee[]>response.json())
      .catch(this.handleError);
  }

  getMenuByLocation(menuLocation: string): Observable<IEmployee> {
    return this._http
      .get("http://localhost:59637/api/employees/" + menuLocation)
      .map((response: Response) => <IEmployee[]>response.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}