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
  countries: Country[] =[];

  constructor(
    public route: ActivatedRoute, public countryService: CountryService
  ) {}
  ngOnInit(){

  console.log('hello `countries` component');

  this.countryService.getData()
  .subscribe(
  //  (response) => {console.log(response.json())},
    (response)=> this.countries = response.json().data,
    (error) => console.log(error)
  );
  }
}
