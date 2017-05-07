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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (accountNumber, email, password, baseAddress) {
        var _this = this;
        var data = "userName=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password) + "&Scope=" + encodeURIComponent(accountNumber) + "&grant_type=password";
        //   var data = "grant_type=password&username=" + email + "&password=" + password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(baseAddress, data, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            var token = user.access_token;
            if (token) {
                _this.accountNumber = accountNumber;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('Token', token);
            }
            if (response.status === 201) {
                return [{ status: response.status, user: user }];
            }
            else if (response.status === 200) {
                return [{ status: response.status, juser: user }];
            }
        })
            .catch(function (error) {
            if (error.status === 500) {
                return Observable_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 400) {
                return Observable_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 409) {
                return Observable_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 406) {
                return Observable_1.Observable.throw(new Error(error.status));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('Token');
        this.accountNumber = null;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map