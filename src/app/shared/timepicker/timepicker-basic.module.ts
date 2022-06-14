import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTimepickerBasic } from './timepicker.component';


@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdTimepickerBasic],
  exports: [NgbdTimepickerBasic],
  bootstrap: [NgbdTimepickerBasic]
})
export class NgbdTimepickerBasicModule {}
