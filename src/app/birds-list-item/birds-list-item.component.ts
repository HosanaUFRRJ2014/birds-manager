import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Bird } from '../models/Bird';
import { BirdsService } from '../birds.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'birds-list-item',
  templateUrl: './birds-list-item.component.html',
  styleUrls: ['./birds-list-item.component.css']
})
export class BirdsListItemComponent {
  @Input() itemId: number = -1
  @Input() bird: Bird | undefined
  //@Input() onSaveBird: any
  @Input() modalTitle!: string
  public modalRef: BsModalRef
  
  constructor(private modalService: BsModalService, private service: BirdsService) {
    this.modalRef = new BsModalRef();
  }

  onSaveBird(bird: Bird) {
    this.service.save(bird)
  }


  openUpdateModal(template: TemplateRef<any>) {
    console.log("Open modal to update bird")
    this.modalRef = this.modalService.show(template);
  }
}
