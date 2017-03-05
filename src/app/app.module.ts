import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FirstComponent } from './first.component';
import { AppComponent } from './app.component';
import { AnimalComponent } from "./shared/animal/animal.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
