import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerBasicModule } from '../datepicker/datepicker.module';
import { NgbdTimepickerBasicModule } from '../timepicker/timepicker-basic.module';
import { DatetimeModalComponent} from './datetime-modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule, NgbdTimepickerBasicModule, NgbdDatepickerBasicModule ],
  declarations: [DatetimeModalComponent],
  exports: [DatetimeModalComponent],
  bootstrap: [DatetimeModalComponent]
})
export class DatetimemodalModule {}