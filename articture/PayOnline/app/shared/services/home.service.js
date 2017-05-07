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
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.Get = function (accountNumber, baseAddress) {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('Token') });
        var url = baseAddress + "/Home/GETDetail/" + accountNumber;
        return this.http.get(url, { headers: headers })
            .map(function (response) { return response.json(); })
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
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map