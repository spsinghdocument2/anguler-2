"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../shared/index");
/**
*	This class represents the lazy loaded DashboardComponent.
*/
var DashboardComponent = (function () {
    function DashboardComponent(providerService, NameService) {
        this.providerService = providerService;
        this.NameService = NameService;
        this.baseAddress = "";
        this.name = "";
        this.baseAddress = this.providerService.getTokenBaseAddress();
        this.name = this.NameService.getName();
        //alert(this.name);	
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard-cmp',
        templateUrl: 'dashboard.component.html'
    }),
    __metadata("design:paramtypes", [index_1.ProviderService, index_1.NameService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map