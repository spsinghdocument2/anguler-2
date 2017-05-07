"use strict";
var router_1 = require("@angular/router");
var addproduct_component_1 = require("./product/addproduct.component");
var product_component_1 = require("./product/product.component");
var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: product_component_1.ProdComponent },
    { path: 'products', component: product_component_1.ProdComponent },
    { path: 'addproduct', component: addproduct_component_1.AddProdComponent }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routings.js.map