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
var router_1 = require("@angular/router");
var app_component_1 = require("../app.component");
var index_1 = require("../services/index");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, providerService, alertService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.providerService = providerService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.loadingCounter = 0;
        this.baseAddress = '';
        this.appComponentObj = new app_component_1.AppComponent();
        this.appComponentObj.Set = false;
        this.appComponentObj.showName = false;
    }
    LoginComponent.prototype.increaseLoadingCounter = function () {
        if (this.loadingCounter === 0) {
            this.loading = true;
        }
        this.loadingCounter++;
    };
    LoginComponent.prototype.decreaseLoadingCounter = function () {
        if (this.loadingCounter > 0) {
            this.loadingCounter--;
            if (this.loadingCounter === 0) {
                this.loading = false;
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.increaseLoadingCounter();
        this.authenticationService.login(this.model.AccountNumber, this.model.Email, this.model.Password, this.providerService.getTokenBaseAddress())
            .subscribe(function (result) {
            if (result) {
                debugger;
                _this.router.navigate(['/home']);
                _this.decreaseLoadingCounter();
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.decreaseLoadingCounter();
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.decreaseLoadingCounter();
        });
        ;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthenticationService,
        index_1.ProviderService,
        index_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map