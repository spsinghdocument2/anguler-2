import { Component } from '@angular/core';


import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html'
})

 export class LoginComponent 
 {
     constructor( private router: Router) 
               {
              }
     login():void
     {
         this.router.navigate(['/dashboard']); 
     }
 }