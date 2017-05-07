"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("./name-list/index");
/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [index_1.NameListService]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        // declarations: [ TopNavComponent ],
        exports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
// @NgModule({
//    imports: [CommonModule, RouterModule ],
//    declarations: [],
//     providers: [],
//     exports: [CommonModule, FormsModule, RouterModule]
// })
// export class SharedModule { }
//# sourceMappingURL=shared.module.js.map