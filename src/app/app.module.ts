import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './views/create/create.component';
import { TodoService } from './services/todo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
   
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule,
  
    RouterModule,
  
  ],
  exports:[MatIconModule],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
