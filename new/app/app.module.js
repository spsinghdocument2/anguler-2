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
var app_routings_1 = require("./app.routings");
var app_component_1 = require("./app.component");
var calc_component_1 = require("./calc.component");
var product_component_1 = require("./product/product.component");
var addproduct_component_1 = require("./product/addproduct.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routings_1.app_routing],
        declarations: [app_component_1.AppComponent, calc_component_1.CalcComponent, product_component_1.ProdComponent, addproduct_component_1.AddProdComponent],
        bootstrap: [app_component_1.AppComponent] //This will become our main component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map