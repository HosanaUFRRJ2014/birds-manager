import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Bird } from '../models/Bird';

@Component({
  selector: 'create-bird',
  templateUrl: './create-bird.component.html',
  styleUrls: ['./create-bird.component.css']
})
export class CreateBirdComponent {
  public modalRef: BsModalRef
  modalTitle: string
  actionType: string
  bird: string | null
  @Output() saveBird = new EventEmitter()

  constructor(private modalService: BsModalService, private local: LocalStorageService) {
    this.modalRef = new BsModalRef();
    this.modalTitle = ""
    this.actionType = "create"
    this.bird = null
  }

  public openModal(actionName:string, template: TemplateRef<any>) {
    this.modalTitle = actionName == "create"? "Cadastrar Ave": "Atualizar Ave"
    this.modalRef = this.modalService.show(template);
  }

  public onSaveBird(bird: Bird) {
    this.saveBird.emit(bird)
  }
}
