import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'
@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductListComponent,
    PagenotfoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
