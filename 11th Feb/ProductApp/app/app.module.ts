import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CalcComponent }  from './calc.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CalcComponent ],//need to declare component after importing
  bootstrap: [ AppComponent ]//This will become our main component
})
export class AppModule { }
