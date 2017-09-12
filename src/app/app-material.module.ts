import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdListModule,
  MdToolbarModule
} from '@angular/material';


@NgModule({
  imports:[
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule
  ]
})
export class AppMaterialModule {}
