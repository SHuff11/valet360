import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTableFiltering } from './parkinglot.component';

describe('ParkinglotComponent', () => {
  let component: NgbdTableFiltering;
  let fixture: ComponentFixture<NgbdTableFiltering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdTableFiltering ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTableFiltering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
