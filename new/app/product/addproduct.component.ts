import { Component } from '@angular/core';

//Decorate ur class with Component
@Component({
    moduleId: module.id,
    selector: 'addproduc',
     templateUrl: `addproduct.component.html`//`<h1>{{title}}</h1>`//Key above tab
})
export class AddProdComponent {    
    title: string = "Add Product";        
}