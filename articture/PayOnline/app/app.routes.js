"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./signup/index");
var index_3 = require("./dashboard/index");
var index_4 = require("./login/index");
exports.app_routes = index_1.LoginRoutes.concat(index_2.SignupRoutes, index_3.DashboardRoutes, [
    { path: '**', component: index_4.LoginComponent }
]);
exports.app_routing = router_1.RouterModule.forRoot(exports.app_routes);
//# sourceMappingURL=app.routes.js.map