import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CountryService {
  constructor(
    public http: Http
  ) {}

  public getData() {

     return this.http.get( );
     //.map(res => res.json());
  }

}
