import { Component } from '@angular/core';

@Component({//input is object
    selector: 'pm-app',
    // template: `
    //     <h1>{{title}}</h1>
    //     <calc></calc>
    //     <product></product>
    // `
    template: `<div class='container'>
    <nav class="navbar navbar-inverse ">
        <ul class="nav navbar-nav">
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/products">Products</a></li>
            <li><a routerLink="/addproduct">Add Product</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
    <div>`
})
//<router-outlet>: Component will get loaded here
export class AppComponent {

    title : string = "Hello Angular";

 }
