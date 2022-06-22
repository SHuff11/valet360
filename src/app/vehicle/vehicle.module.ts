import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatetimemodalModule } from '../shared/datetime-modal/datetime.module';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  imports: [BrowserModule, NgbModule,DatetimemodalModule, ReactiveFormsModule,],
  declarations: [VehicleComponent],
  exports: [VehicleComponent],
  bootstrap: [VehicleComponent],
  // entryComponents: [NgbdModalContent] // this line would be needed in Angular 8 or older
})
export class VehicleComponentModule {}
