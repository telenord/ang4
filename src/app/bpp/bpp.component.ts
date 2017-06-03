/**
 * Angular 2 decorators and services
 */
import {  Component, OnInit} from '@angular/core';
import { BppState } from './bpp.service';

@Component({
  selector: 'bpp',
  templateUrl: './bpp.component.html'
})
  export class BppComponent implements OnInit{
    allowBtnActive = false;
    userName = "";

    constructor(){
        setTimeout( ()=>{
          this.allowBtnActive = true;
        },10000);
    }
    onUserClick(){
      this.userName = "";

    }
    ngOnInit(){

    }
  }
