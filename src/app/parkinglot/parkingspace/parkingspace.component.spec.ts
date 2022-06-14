import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingspaceComponent } from './parkingspace.component';

describe('ParkingspaceComponent', () => {
  let component: ParkingspaceComponent;
  let fixture: ComponentFixture<ParkingspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
