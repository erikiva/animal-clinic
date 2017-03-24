import { AnimalFormReactiveComponent } from './shared/animal/animal-form-reactive/animal-form-reactive.component';
import { AnimalFormComponent } from './shared/animal/animal-form/animal-form.component';
import { API_CONFIG_VALUE, API_CONFIG } from './config';
import { AnimalService } from './services/animal.service';
import { FormatMonthPipe } from './shared/format-month-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { FirstComponent } from './first.component';
import { AppComponent } from './app.component';
import { AnimalComponent } from "./shared/animal/animal.component";
import { AddBorderDirective } from "./shared/add-border-directive";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AnimalComponent,
    FormatMonthPipe,
    AddBorderDirective,
    AnimalFormComponent,
    AnimalFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AnimalService,
    {provide: API_CONFIG, useValue: API_CONFIG_VALUE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
