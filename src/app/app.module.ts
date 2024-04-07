import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productComponent } from './shared/components/product/product.component';
import { product2 } from './shared/components/product2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    product2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
