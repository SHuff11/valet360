import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Vehicle } from '../vehicle/vehicle.model';

@Injectable({ providedIn: 'root' })
export class ParkingLotService {
  valetedVehiclesChanged = new Subject<Map<number, Vehicle>>();
  vehicleForm = new FormGroup({
    make: new FormControl(null),
    model: new FormControl(null),
    color: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
  });

  newEntry = true;
  editKey = 0;

  private valetedVehicles: Map<number, Vehicle | null | undefined> = new Map([
    // [0, new Vehicle('Kia', 'Optima', 'White', 'Steven', 'Huff',0)],
    // [0, null],
    // [1, null],
    // [2, null],
    // [2, new Vehicle('Tesla', 'S', 'Gray', 'Julio', 'Perez',2)],
    // [3, null],
    // [4, null],
    // [5, null],
  ]);

  createParkingLot(spaces: number) {
    for (let i = 0; i < spaces; i++) {
      this.valetedVehicles.set(i, null);
    }
    this.valetedVehiclesChanged.next(this.valetedVehicles);
    console.log(this.valetedVehicles)
    return this.valetedVehicles;
  }

  getVehicle(key: number) {
    return this.valetedVehicles.get(key);
  }

  getVehicles() {
    return this.valetedVehicles;
  }

  getKeys() {
    return this.valetedVehicles.keys();
  }

  addVehicle(vehicle: Vehicle) {
    let keyValue = Array.from(this.valetedVehicles.entries());
    this.newEntry = true;
    for (var value of keyValue) {
      if (value[1] == null) {
        console.log("I'm in here");
        console.log(value[0], vehicle);
        vehicle.parkingSpace = value[0];
        this.valetedVehicles.set(value[0], vehicle);
        this.valetedVehiclesChanged.next(this.valetedVehicles);
        return;
      }
    }
  }

  updateVehicle(key: number, newVehicle: Vehicle) {
    newVehicle.parkingSpace = key;
    this.valetedVehicles.set(key, newVehicle);
    this.valetedVehiclesChanged.next(this.valetedVehicles);
  }

  returnVehicle(key: number) {
    this.valetedVehicles.set(key, null);
    this.valetedVehiclesChanged.next(this.valetedVehicles);
  }

  getForm() {
    return this.vehicleForm;
  }

  updateForm(key) {
    let vehicle = this.valetedVehicles.get(key);
    console.log('In updateForm ' + this.valetedVehicles.get(key));
    this.vehicleForm.setValue({
      make: vehicle.make,
      model: vehicle.model,
      color: vehicle.color,
      firstName: vehicle.firstName,
      lastName: vehicle.lastName,
      //   parkingSpace: key,
    });
    this.newEntry = false;
    this.editKey = key;
  }

  getEditKey() {
    return this.editKey;
  }

  resetForm() {
    this.vehicleForm.reset();
  }

  resetNewMode() {
    this.newEntry = true;
  }
}
