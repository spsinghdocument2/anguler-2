import { Component } from '@angular/core';
import { newComponent } from './component/second.component';

@Component({
  selector: 'my-app',
  template: `
<div class="container">
  <h1>Hello {{name}}</h1>
  <br/>
  {{childData}}
     <br/>
  <newComponent
  (childEvent)="childData=$event"
   [(counter)]="c" 
   *ngFor="let n of childNameArray" [Name]="n"
   [parentData]="name">
   
    </newComponent>
  <br/>
     <h2>count = {{c}}</h2> 
     sss
     <input type="text" #ptext (keyup)="0">
  </div>
  `
  
})
export class AppComponent 
 {
       name = 'parient';
       //---------------------
       public childData:string;
       //----------------
       childmessage : string = "I am passed from Parent to child component"
        childNameArray = ['foo','koo',' ','moo','too','hoo',''];
        
  }
