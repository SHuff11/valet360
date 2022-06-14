import { first } from 'rxjs';

export class VehicleInformation {
  public make: string;
  public model: string;
  public color: string;
  public firstName: string;
  public lastName: string;

  constructor(
    make: string,
    model: string,
    color: string,
    firstname: string,
    lastname: string) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.firstName = firstname;
    this.lastName = lastname;
  }
}
