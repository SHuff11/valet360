import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datetime-modal',
  templateUrl: './datetime-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class DatetimeModalComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  onSubmit(date, time) {
    console.log(date, time);
  }
}
