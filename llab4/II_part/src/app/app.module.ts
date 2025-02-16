import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }