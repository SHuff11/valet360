import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-spinners',
  templateUrl: './timepicker.component.html',
})
export class NgbdTimepickerBasic {
  time = { hour: 12, minute: 30 };
  spinners = false;
}
