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
var index_1 = require("../services/index");
var customer_1 = require("../model/customer");
var HomeComponent = (function () {
    function HomeComponent(router, providerService, homeService, authenticationService) {
        this.router = router;
        this.providerService = providerService;
        this.homeService = homeService;
        this.authenticationService = authenticationService;
        this.notify = new core_1.EventEmitter();
        //  products : any = {};
        this.dataArrayGrid = [];
        this.loading = false;
        this.IdError = '';
        this.FirstNameError = '';
        this.MidNameError = '';
        this.LastNmmeError = '';
        this.FatherNameError = '';
        this.EmailError = '';
        this.GenderError = '';
        this.SecurityQuestionError = '';
        this.checkboxTermsConditionsError = '';
        this.loadingCounter = 0;
        this.baseAddress = '';
        // user: Object = {};
        // @Input() FirstName : string ='';
        this.customerObj = new customer_1.Customer();
        this.list = [
            { value: 1, SecurityQuestions: 'In what city were you born?' },
            { value: 2, SecurityQuestions: 'What is the name of your favorite pet?' },
            { value: 3, SecurityQuestions: 'What is your mother first name?' },
        ];
        this.Items = function () {
            this.ID = '';
            this.FirstName = '';
            this.MidName = '';
            this.LastNmme = '';
            this.FatherName = '';
            this.Email = '';
            this.Gender = '';
            this.SecurityQuestion = '';
            this.checkboxTermsConditions;
            this.counter;
            this.Selected = false;
        };
        if (this.authenticationService.accountNumber === undefined || this.authenticationService.accountNumber === null || this.authenticationService.accountNumber === '') {
            this.router.navigate(['/login']);
            return;
        }
        this.getData();
    }
    ;
    HomeComponent.prototype.Save = function () {
        var _this = this;
        debugger;
        if (this.MainValidation() == true) {
            this.increaseLoadingCounter();
            //        this.model.AccountNumber ='';
            // model.username ='';
            this.homeService.save(this.customerObj, this.providerService.getBaseAddress())
                .subscribe(function (result) {
                _this.decreaseLoadingCounter();
                _this.getData();
            }, function (error) {
                _this.decreaseLoadingCounter();
            });
            ;
        }
    };
    ;
    HomeComponent.prototype.increaseLoadingCounter = function () {
        if (this.loadingCounter === 0) {
            this.loading = true;
        }
        this.loadingCounter++;
    };
    HomeComponent.prototype.decreaseLoadingCounter = function () {
        if (this.loadingCounter > 0) {
            this.loadingCounter--;
            if (this.loadingCounter === 0) {
                this.loading = false;
            }
        }
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.increaseLoadingCounter();
        this.homeService.Get(311676, this.providerService.getBaseAddress())
            .subscribe(function (result) {
            // this.products  = result
            _this.dataArrayGrid = [];
            if (result.length > 0) {
                for (var counter = 0; counter < result.length; counter++) {
                    var item = new _this.Items();
                    item.ID = result[counter].ID;
                    item.FirstName = result[counter].FirstName;
                    item.MidName = result[counter].MidName;
                    item.LastNmme = result[counter].LastNmme;
                    item.FatherName = result[counter].FatherName;
                    item.Email = result[counter].Email;
                    item.Gender = result[counter].Gender;
                    item.SecurityQuestion = result[counter].SecurityQuestion;
                    item.checkboxTermsConditions = result[counter].checkboxTermsConditions;
                    item.counter = counter;
                    _this.dataArrayGrid.push(item);
                }
                _this.products = _this.dataArrayGrid;
            }
            _this.decreaseLoadingCounter();
        }, function (error) {
            _this.decreaseLoadingCounter();
        });
        ;
    };
    ;
    HomeComponent.prototype.MainValidation = function () {
        var returnValue = true;
        if (this.customerObj.ID <= 0 || this.customerObj.ID == undefined || this.customerObj.ID == null) {
            this.IdError = "Please Enter ID";
            returnValue = false;
        }
        if (this.customerObj.FirstName == '' || this.customerObj.FirstName == undefined) {
            this.FirstNameError = "Please Enter FirstName";
            returnValue = false;
        }
        if (this.customerObj.LastNmme == '' || this.customerObj.LastNmme == undefined) {
            this.LastNmmeError = "Please Enter LastNmme";
            returnValue = false;
        }
        if (this.customerObj.MidName == '' || this.customerObj.MidName == undefined) {
            this.MidNameError = "Please Enter MidName";
            returnValue = false;
        }
        if (this.customerObj.FatherName == '' || this.customerObj.FatherName == undefined) {
            this.FatherNameError = "Please Enter FatherName";
            returnValue = false;
        }
        if (this.customerObj.Email == '' || this.customerObj.Email == undefined) {
            this.EmailError = "Please Enter Email";
            returnValue = false;
        }
        if (this.customerObj.SecurityQuestion == '' || this.customerObj.SecurityQuestion == undefined) {
            this.SecurityQuestionError = "Please select SecurityQuestion";
            returnValue = false;
        }
        return returnValue;
    };
    ;
    HomeComponent.prototype.onClick = function () {
        debugger;
        this.notify.emit("akul singh");
        // var s = new AppComponent();
        //  s.onNotifyClickd("akul singh");
    };
    return HomeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HomeComponent.prototype, "notify", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home-app',
        templateUrl: 'home.component.html',
        inputs: ["parentData"],
    }),
    __metadata("design:paramtypes", [router_1.Router, index_1.ProviderService, index_1.HomeService, index_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map