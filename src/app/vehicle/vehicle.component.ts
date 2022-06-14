import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.vehicleForm = new FormGroup({
      'make': new FormControl(null),
      'model': new FormControl(null),
      'color': new FormControl(null),
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
    });
  }

}
