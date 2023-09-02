import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.css']
})
export class CreateBirdComponent {
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.modalRef = new BsModalRef();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
