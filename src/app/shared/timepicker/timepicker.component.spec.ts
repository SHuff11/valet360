import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTimepickerBasic } from './timepicker.component';

describe('TimepickerComponent', () => {
  let component: NgbdTimepickerBasic;
  let fixture: ComponentFixture<NgbdTimepickerBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdTimepickerBasic ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTimepickerBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
