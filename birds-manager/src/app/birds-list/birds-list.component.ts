import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Bird } from '../classes/Bird';
import { BirdSex } from '../classes/BirdSex';
import { BirdType } from '../classes/BirdType';

@Component({
  selector: 'birds-list',
  templateUrl: './birds-list.component.html',
  styleUrls: ['./birds-list.component.css']
})
export class BirdsListComponent {
  public modalRef: BsModalRef
  birdsList = [
    new Bird(
      "Come-Come",
      BirdType.cockatiel,
      new Date("2023-02-10"),
      new Date("2023-07-10")
    )
  ]
  modalTitle: string
  // @Output() selectedBird: string = ''

  constructor(private modalService: BsModalService) {
    this.modalRef = new BsModalRef();
    this.modalTitle = "Atualizar Ave"
  }

  openUpdateModal(selectedBirdId: number, template: TemplateRef<any>) {
    console.log("Open modal to update bird")
    let selectedBird = this.birdsList[selectedBirdId]
    // this.selectedBird = selectedBird
    this.modalRef = this.modalService.show(template);
  }
}
