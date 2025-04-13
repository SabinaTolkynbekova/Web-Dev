import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppComponent } from './app.component';
import { CompanyService } from './company.service'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Добавляем HttpClientModule сюда
  ],
  providers: [CompanyService],  // Убедитесь, что ваш сервис зарегистрирован здесь
  bootstrap: [AppComponent]
})
export class AppModule { }
