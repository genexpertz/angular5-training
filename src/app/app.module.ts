import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {ProductComponent} from "./product/product.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
