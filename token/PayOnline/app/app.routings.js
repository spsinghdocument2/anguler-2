"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
//import { RegisterComponent } from './register/index';
var index_3 = require("./cookiePolicy/index");
var app_routes = [
    // { path: '',  pathMatch:'full', redirectTo: '/home' },
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: index_1.HomeComponent },
    //{ path: 'products',  component: ProdComponent },
    { path: 'CookiePolicy', component: index_3.CookiePolicyComponent },
    { path: 'login', component: index_2.LoginComponent },
    { path: '', component: index_2.LoginComponent },
    //{ path: '',  pathMatch:'full', redirectTo: '/home' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routings.js.map