import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Vehicle } from '../vehicle/vehicle.model';
import { ParkingLotService } from './parkinglot.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../shared/modal/modal.component';

function search(text: string, vehicles): Map<number, Vehicle> {
  return vehicles.filter((vehicle: Vehicle) => {
    const term = text.toLowerCase();
    return (
      vehicle.make.toLowerCase().includes(term) ||
      vehicle.model.toLowerCase().includes(term) ||
      vehicle.color.toLowerCase().includes(term) ||
      vehicle.firstName.toLowerCase().includes(term) ||
      vehicle.lastName.toLowerCase().includes(term)
    );
  });
}

@Component({
  selector: 'ngbd-table-filtering',
  templateUrl: 'parkinglot.component.html',
  providers: [DecimalPipe],
})
export class NgbdTableFiltering implements OnInit, OnDestroy {
  vehicles$: Observable<Map<number, Vehicle>>;
  filter = new FormControl('');
  valetVehicleMap: Map<number, Vehicle | null | undefined> = new Map<number, Vehicle>();
  vehicleListSubscription: Subscription;
  valetVehicleList: number[];
  @Input() numParkingSpace: number;

  constructor(
    private parkingLotService: ParkingLotService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.valetVehicleMap = this.parkingLotService.getVehicles();
    this.valetVehicleList = Array.from(this.parkingLotService.getKeys());
    this.vehicles$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) =>
        search(text, this.removeNull(Array.from(this.valetVehicleMap.values())))
      )
    );
    this.vehicleListSubscription =
      this.parkingLotService.valetedVehiclesChanged.subscribe((vehicles) => {
        console.log('Will remember to b' + vehicles);
        this.valetVehicleMap = vehicles;
        console.log('2' + this.valetVehicleMap);
        this.filter.setValue('');
      });
      
  }

  ngOnDestroy(): void {
    this.vehicleListSubscription.unsubscribe();
  }

  removeNull(vehicleList: Vehicle[]) {
    let noNullList = [];
    for (let vehicle of vehicleList) {
      if (vehicle != null) {
        console.log(vehicle instanceof Vehicle )
        noNullList.push(vehicle);
      }
    }
    return noNullList;
  }

  getKeys() {
    this.valetVehicleList = Array.from(this.parkingLotService.getKeys());
  }

  getSelected(key) {
    
    this.parkingLotService.updateForm(key);

    const modalRef = this.modalService.open(NgbdModalContent);
  }

  ConvertToInt(value) {
    return parseInt(value);
  }

  returnVehicle(key) {
    this.parkingLotService.returnVehicle(key)
    console.log(this.valetVehicleList)
    this.parkingLotService.valetedVehiclesChanged.next(this.valetVehicleMap)
  }

  createParkingSpaces(numParkingSpace) {
    console.log(numParkingSpace);
    this.valetVehicleMap =
      this.parkingLotService.createParkingLot(numParkingSpace);
    console.log(this.valetVehicleMap);
  }
}

// @Component({
//   selector: 'app-parkinglot',
//   templateUrl: './parkinglot.component.html',
//   providers: [DecimalPipe],
// })
// export class NgbdTableFiltering {
//   // subscription to any changed in valetVehiclesChanged list in parkinglot.service.ts
//   private VVCsubscription: Subscription;
//   private filterSubscription: Subscription;
//   public filterObservable$: Observable<Vehicle[]>;
//   valetVehicleList: Vehicle[];
//   filter = new FormControl('');

//   constructor(private parkingLotService: ParkingLotService) {
//     this.filter.valueChanges.pipe(
//       startWith('Kia'),
//       map((text) => this.search(text))
//     )
//   }

//   search(text: string): Vehicle[] {
//     console.log("We're in search")
//     return this.valetVehicleList.filter(vehicle => {
//       const term = text.toLowerCase();
//       return (
//         vehicle.make.toLowerCase().includes(term) ||
//         vehicle.model.includes(term) ||
//         vehicle.color.includes(term) ||
//         vehicle.firstName.includes(term) ||
//         vehicle.lastName.includes(term)
//       );
//     });
//   }

// ngOnInit(): void {
//   this.VVCsubscription = this.parkingLotService.valetedVehiclesChanged.subscribe((vehicleList) => {
//     this.valetVehicleList = vehicleList;
//   })

//   this.filterSubscription = this.filterObservable$.subscribe((vehicleList) => {
//     this.valetVehicleList = vehicleList;
//     console.log("After Search" + vehicleList)
//   })

// }

// ngOnDestroy(): void {
//   this.VVCsubscription.unsubscribe();
//   this.filterSubscription.unsubscribe();
// }
// }
