import {  Component, OnInit} from '@angular/core';


@Component({
  selector:'country-list',
  template:`<p>123</p>`,
})

export class CountryList implements OnInit {

  public ngOnInit() {
    console.log('hello `CountryList` component');
  }

}
