import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { newComponent } from './component/second.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,newComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
