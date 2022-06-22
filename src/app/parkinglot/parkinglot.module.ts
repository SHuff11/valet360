import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableFiltering } from './parkinglot.component';



@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule,],
  declarations: [NgbdTableFiltering],
  exports: [NgbdTableFiltering],
  bootstrap: [NgbdTableFiltering]
})
export class ParkingLotModule { }