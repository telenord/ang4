import {  Component} from '@angular/core';

@Component({
  selector:'country-list',
  template:` <ul>
              <li *ngFor = "let country of countries" >
                {{country.name }}
              </li>
            </ul>`,
  inputs:['countries']
})

export class CountryList{
  countries = [];

}
