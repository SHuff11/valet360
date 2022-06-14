import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleComponentModule } from 'src/app/vehicle/vehicle.module';
import { DatetimemodalModule } from '../datetime-modal/datetime.module';
import { NgbdModalComponent, NgbdModalContent } from './modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule, DatetimemodalModule, VehicleComponentModule],
  declarations: [NgbdModalComponent, NgbdModalContent,],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent]
  // entryComponents: [NgbdModalContent] // this line would be needed in Angular 8 or older
})
export class NgbdModalComponentModule {}
