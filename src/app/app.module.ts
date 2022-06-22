import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParkingspaceComponent } from './parkinglot/parkingspace/parkingspace.component';
import { NgbdTimepickerBasicModule } from './shared/timepicker/timepicker-basic.module';
import { NgbdModalComponentModule } from './shared/modal/modal.module';
import { NgbdDatepickerBasicModule } from './shared/datepicker/datepicker.module';
import { DatetimemodalModule } from './shared/datetime-modal/datetime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleComponentModule } from './vehicle/vehicle.module';
import { ParkingLotModule } from './parkinglot/parkinglot.module';

@NgModule({
  declarations: [
    AppComponent,
    ParkingspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdTimepickerBasicModule,
    NgbdModalComponentModule,
    NgbdDatepickerBasicModule,
    DatetimemodalModule,
    ReactiveFormsModule,
    VehicleComponentModule,
    ParkingLotModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
