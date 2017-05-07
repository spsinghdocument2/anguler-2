import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { app_routing } from './app.routings';  


import { AuthenticationService,ProviderService,AlertService,HomeService } from './services/index';

import { MenuDirective} from './Directives/index';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/index';
import { CookiePolicyComponent } from './cookiePolicy/index';
import { HomeComponent } from './home/index';




@NgModule({
  imports: [ BrowserModule, FormsModule,HttpModule,app_routing ],//import the module which we have declared/imported above
  declarations: [ AppComponent,LoginComponent,CookiePolicyComponent,HomeComponent ,MenuDirective],//need to declare component after importing
  providers: [
        
        AuthenticationService,
        ProviderService,
        AlertService,
        HomeService,
        
       // UserService,
        // providers used to create fake backend
        //fakeBackendProvider,
       // MockBackend,
        BaseRequestOptions
    ],
   // exports: [MenuDirective],
  bootstrap: [ AppComponent ]//This will become our main component
})
export class AppModule { }
