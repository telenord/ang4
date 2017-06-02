import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CountryService {
  constructor(
    public http: Http
  ) {}

  public getData() {
    console.log('Title#getData(): Get COUNTRY123 Data');
    /**
     * return this.http.get('/assets/data.json')
     * .map(res => res.json());
     */
     return this.http.get(' http://sm-api.azurewebsites.net/public/geo/countries');
     //.map(res => res.json());


  }

}
