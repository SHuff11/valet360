import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalContent } from './modal.component';

describe('NgbdModalContent', () => {
  let component: NgbdModalContent;
  let fixture: ComponentFixture<NgbdModalContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdModalContent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
