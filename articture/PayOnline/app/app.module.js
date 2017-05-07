"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./app.routes");
var login_module_1 = require("./login/login.module");
var signup_module_1 = require("./signup/signup.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var app_component_1 = require("./app.component");
var index_1 = require("./shared/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
            app_routes_1.app_routing, login_module_1.LoginModule, signup_module_1.SignupModule,
            dashboard_module_1.DashboardModule
        ],
        // declarations: [ AppComponent,LoginComponent,CookiePolicyComponent,HomeComponent ,MenuDirective,SignupComponent],//need to declare component after importing
        declarations: [app_component_1.AppComponent],
        providers: [index_1.ProviderService],
        //providers: [{
        //	provide: APP_BASE_HREF
        //	,useValue: '<%= APP_BASE %>'
        // },ProviderService],
        bootstrap: [app_component_1.AppComponent] //This will become our main component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map