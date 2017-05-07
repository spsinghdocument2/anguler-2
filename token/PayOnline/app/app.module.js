"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var app_routings_1 = require("./app.routings");
var index_1 = require("./services/index");
var index_2 = require("./Directives/index");
var app_component_1 = require("./app.component");
var index_3 = require("./login/index");
var index_4 = require("./cookiePolicy/index");
var index_5 = require("./home/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routings_1.app_routing],
        declarations: [app_component_1.AppComponent, index_3.LoginComponent, index_4.CookiePolicyComponent, index_5.HomeComponent, index_2.MenuDirective],
        providers: [
            index_1.AuthenticationService,
            index_1.ProviderService,
            index_1.AlertService,
            index_1.HomeService,
            // UserService,
            // providers used to create fake backend
            //fakeBackendProvider,
            // MockBackend,
            http_2.BaseRequestOptions
        ],
        // exports: [MenuDirective],
        bootstrap: [app_component_1.AppComponent] //This will become our main component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map