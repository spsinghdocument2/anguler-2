import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
//import { RegisterComponent } from './register/index';
import { CookiePolicyComponent } from './cookiePolicy/index';



const app_routes: Routes = [
 // { path: '',  pathMatch:'full', redirectTo: '/home' },
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent},
  //{ path: 'products',  component: ProdComponent },
  { path: 'CookiePolicy', component: CookiePolicyComponent },
   { path: 'login', component: LoginComponent },
   { path: '',  component: LoginComponent },
   //{ path: '',  pathMatch:'full', redirectTo: '/home' },

   // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);


