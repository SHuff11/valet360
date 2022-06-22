export class Vehicle {
  public make: string;
  public model: string;
  public color: string;
  public firstName: string;
  public lastName: string;
  public parkingSpace?: number;


  constructor(
    make: string,
    model: string,
    color: string,
    firstname: string,
    lastname: string,
    parkingSpace?: number) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.firstName = firstname;
    this.lastName = lastname;
    this.parkingSpace = parkingSpace;
  }
}
