import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


import { AuthenticationService,ProviderService,AlertService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit
 {
    model: any = {};
    loading = false;
    error = '';
    loadingCounter : number = 0;
    baseAddress :string = '';
    appComponentObj :AppComponent =new AppComponent();
     
    constructor(
                private router: Router,
                private authenticationService: AuthenticationService,
                private providerService :ProviderService,
                private alertService :AlertService
                ) 
               {
            this.appComponentObj.Set=false;
                    this.appComponentObj.showName =false;
              }

  
     increaseLoadingCounter():void
     {
        if (this.loadingCounter === 0)
        {
           this.loading = true;
        }
           
        this.loadingCounter++;
    }
     decreaseLoadingCounter() :void
    {
        if (this.loadingCounter > 0) {
            this.loadingCounter--;
            if (this.loadingCounter === 0)
            {
             this.loading = false;
            }
                
        }
    }


    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() 
    {
        this.increaseLoadingCounter();
       
        this.authenticationService.login(this.model.AccountNumber, this.model.Email, this.model.Password,this.providerService.getTokenBaseAddress())
        .subscribe(result => {
         if (result)
        {
            debugger;
                      this.router.navigate(['/home']);
                    this.decreaseLoadingCounter();
                     
                    
         } 
         else 
         {
                    this.error = 'Username or password is incorrect';
                    this.decreaseLoadingCounter();
        }
            },
            error => {
              
                    this.alertService.error(error);
                    this.decreaseLoadingCounter();
                });;
    }
}