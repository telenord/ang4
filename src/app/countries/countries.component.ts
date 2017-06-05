import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Country} from './country';
import {CountryService} from './countries.service';
import {CountryList} from './country-list';

@Component({
  selector: 'countries-page',
  providers: [
    CountryService
  ],
  templateUrl:'./countries.component.html'
})

export class CountriesComponent implements OnInit{
  countriesArray: Country[] =[];

  constructor(
    public route: ActivatedRoute, public countryService: CountryService
  ) {}
  ngOnInit(){

  console.log('hello `countries` component');

  this.countryService.getData()
  .subscribe(
  //  (response) => {console.log(response.json())},
    (response)=> this.countriesArray = response.json().data,
    (error) => console.log(error)
  );
  }
}
