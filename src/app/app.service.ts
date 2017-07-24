import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Film }          from './film';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic YWRtaW46MTIzNDU2'});
  private Url = 'http://localhost/import/wp-json/wp/v2/film';  // URL to web api

  constructor(private http: Http) { }

  getList(): Promise<Film[]>{
    // return this.http.get(this.Url).map(
    //   (response) => response.json()
    // )

    return this.http.get(this.Url).toPromise().then(response => response.json() as Film[]).catch(this.handleError);
  }

  add(title: string){
    this.http
      .post(this.Url, JSON.stringify({title: title, status: 'publish'}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  delete(id: number){
    this.http.delete(this.Url+'/'+id, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/