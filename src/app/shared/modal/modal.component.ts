import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ParkingLotService } from 'src/app/parkinglot/parkinglot.service';
import { VehicleComponent } from 'src/app/vehicle/vehicle.component';
import { Vehicle } from 'src/app/vehicle/vehicle.model';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Vehicle Information</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <app-vehicle #vehicle></app-vehicle> 
    </div>
   
    <div class="container">
      <div class="row">
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" (click)="onSubmit()"> {{ this.newMode ? "Create" : "Update" }} </button>
          <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
          <button *ngIf="!newMode" button type="button" class="btn btn-outline-dark" (click)="onReturn()">Return</button>
        </div>
      </div>
    </div>
  ` 
})
export class NgbdModalContent implements OnInit, OnDestroy {
  @Input() name;
  vehicle: VehicleComponent;
  newMode = true;
  

  constructor(public activeModal: NgbActiveModal, private valetVehicleService: ParkingLotService) { 
    this.vehicle = new VehicleComponent(valetVehicleService)
    this.vehicle.vehicleForm = this.valetVehicleService.getForm()
    this.newMode = valetVehicleService.newEntry
  }

  ngOnInit(): void {
    
  }
  
  ngOnDestroy(): void {
    this.valetVehicleService.resetForm()
    this.valetVehicleService.newEntry = true;
    // I took out the toggle since it kept switching between the Creat and Update buttons
    // this.valetVehicleService.newModeToggle()  
  }
  onSubmit() {
    let vehicle = this.valetVehicleService.getForm()
    if (this.newMode) {
      this.valetVehicleService.addVehicle(vehicle.value)
      this.activeModal.close()
    }
    else { 
      let key = this.valetVehicleService.getEditKey()
      this.valetVehicleService.updateVehicle(key, vehicle.value)
      this.activeModal.close() 
    }
  } 

  onReturn() {
    let key = this.valetVehicleService.getEditKey()
    this.valetVehicleService.returnVehicle(key)
    this.activeModal.close() 


  }




}

@Component({selector: 'ngbd-modal-component', templateUrl: './modal.component.html'})
export class NgbdModalComponent implements OnInit, OnDestroy {
  valetVehiclesSubscription: Subscription;
  valetVehicleMap: Map<number, Vehicle> = new Map<number, Vehicle>();
  constructor(private modalService: NgbModal, private parkingLotService: ParkingLotService ) {}

  ngOnInit() {
    this.valetVehiclesSubscription = this.parkingLotService.valetedVehiclesChanged.subscribe((vehicles) => {
      this.valetVehicleMap = vehicles;
      console.log(this.valetVehicleMap)
    });
  }


  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    
  }

  ngOnDestroy(): void {
    this.valetVehiclesSubscription.unsubscribe()
  }




}

