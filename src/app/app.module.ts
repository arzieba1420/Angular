import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes= [
  {path: 'contact',component: ContactComponent},
  {path: 'home', component: HomeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
