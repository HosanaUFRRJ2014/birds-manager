import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.css']
})
export class CreateBirdComponent {
  public modalRef: BsModalRef;
  modalTitle: string;

  constructor(private modalService: BsModalService) {
    this.modalRef = new BsModalRef();
    this.modalTitle = ""
  }

  public openModal(actionName:string, template: TemplateRef<any>) {
    this.modalTitle = actionName == "create"? "Cadastrar Ave": "Atualizar Ave"
    this.modalRef = this.modalService.show(template);
  }
}
