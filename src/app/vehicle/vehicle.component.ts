import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParkingLotService } from '../parkinglot/parkinglot.service';
import { Vehicle } from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor(private vehicleValetService: ParkingLotService) { }

  ngOnInit(): void {
    this.vehicleForm = this.vehicleValetService.getForm()
  }

  


  
  
}
