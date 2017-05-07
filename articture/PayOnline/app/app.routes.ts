
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';

export const app_routes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];


export const app_routing = RouterModule.forRoot(app_routes);







