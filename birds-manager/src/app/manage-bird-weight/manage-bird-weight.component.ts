import { Component, Input, TemplateRef } from '@angular/core';
import { Bird } from '../models/Bird';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'manage-bird-weight',
  templateUrl: './manage-bird-weight.component.html',
  styleUrls: ['./manage-bird-weight.component.css']
})
export class ManageBirdWeightComponent {
  public modalRef: BsModalRef
  @Input() bird!: Bird

  constructor(private modalService: BsModalService) {
    this.modalRef = new BsModalRef()
  }

  openWeightModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
