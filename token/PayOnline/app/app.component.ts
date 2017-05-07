import { Component} from '@angular/core';
import { MenuDirective } from './Directives/index';
import { HomeComponent } from './home/index';

@Component({
     moduleId: module.id,
     selector: 'pm-app',
    //  directives: [MenuDirective],
     templateUrl: 'app.component.html',
    
    // template: `<h1>{{title}}</h1>
     // <p myHighlight>Highlight me!</p>
    // <sp-app></sp-app>`,
   // styles :[`h1{colr:red}`],
   

  //  directives: [Comments]
    
})

export class AppComponent
 {
 showMessage :string="test";
 
 showName:boolean = true;
constructor(){ }
    get Get():boolean {
     
        return this.showName;
       
    };
    set Set(par:boolean) {
        this.showName = par;
         console.log(this.showName);
        
    };

onNotifyClickd(message : string):void
{
    debugger;
    this.showMessage = message;
}


 }
