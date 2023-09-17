import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Bird } from '../models/Bird';

@Component({
  selector: 'birds-list',
  templateUrl: './birds-list.component.html',
  styleUrls: ['./birds-list.component.css']
})
export class BirdsListComponent {
  public modalRef: BsModalRef
  @Input() birds: Map<number, Bird> | undefined
  @Output() saveBird = new EventEmitter()
  
  modalTitle: string

  constructor(private modalService: BsModalService) {
    this.modalRef = new BsModalRef();
    this.modalTitle = "Atualizar Ave"
  }

  ngOnInit() {
  }


  public onSaveBird(bird: Bird) {
    this.saveBird.emit(bird)
  }

}
