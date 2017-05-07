import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { app_routing } from './app.routings';  
import { AppComponent }  from './app.component';
import { CalcComponent }  from './calc.component';
import { ProdComponent }  from './product/product.component';
import { AddProdComponent }  from './product/addproduct.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, app_routing ],//import the module which we have declared/imported above
  declarations: [ AppComponent, CalcComponent, ProdComponent, AddProdComponent ],//need to declare component after importing
  bootstrap: [ AppComponent ]//This will become our main component
})
export class AppModule { }
