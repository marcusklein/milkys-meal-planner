import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';
import { API_ENDPOINT } from './app.tokens';
import { AppMaterialModule } from "./app-material.module";
import { CoreAppModule } from './core/core-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CoreAppModule
  ],
  providers: [
    { provide: API_ENDPOINT, useValue: 'http://localhost:8080/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
