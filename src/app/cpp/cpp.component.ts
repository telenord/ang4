/**
 * Angular 2 decorators and services
 */
import {  Component} from '@angular/core';


@Component({
  selector: 'cpp',
  styles:[`
    .white{
      color:white;
    }
  `],
  template: `<button class="btn btn-primary" (click)="onDetailClick()">Display Details</button>
  <p *ngIf="allowBtnActive">Password is unlocked</p>


  <ul *ngIf="countClick.length>0" >
    <li *ngFor="let count of countClick"
     [ngStyle]="{backgroundColor: count > 4 ? 'blue' : 'none'}"
      [ngClass]="{white:count > 4}"> {{count}} </li>
  </ul>`
})
  export class CppComponent {
    allowBtnActive = false;
    countClick = [];
    count = 0;

    constructor(){

    }
    onDetailClick(){
      this.allowBtnActive = !this.allowBtnActive;
        this.countClick.push(++this.count);
    }
  }
