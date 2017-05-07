 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { APP_BASE_HREF } from '@angular/common';
 import { RouterModule } from '@angular/router';
 import { HttpModule } from '@angular/http';
 import { FormsModule } from '@angular/forms';


 import { app_routing } from './app.routes';

 import { LoginModule } from './login/login.module';
 import { SignupModule } from './signup/signup.module';
 import { DashboardModule } from './dashboard/dashboard.module';
 import { SharedModule } from './shared/shared.module';

 import { AppComponent }  from './app.component';

import { ProviderService } from './shared/index';

@NgModule({
  imports: [ BrowserModule, FormsModule,HttpModule
  ,app_routing,LoginModule ,SignupModule
  ,DashboardModule
 // ,SharedModule.forRoot()
 //, SharedModule
  ],//import the module which we have declared/imported above
 // declarations: [ AppComponent,LoginComponent,CookiePolicyComponent,HomeComponent ,MenuDirective,SignupComponent],//need to declare component after importing
 declarations: [ AppComponent ],
providers: [ ProviderService ],
 //providers: [{
//	provide: APP_BASE_HREF
 //	,useValue: '<%= APP_BASE %>'
// },ProviderService],
    
  bootstrap: [ AppComponent ]//This will become our main component
})
export class AppModule { }



