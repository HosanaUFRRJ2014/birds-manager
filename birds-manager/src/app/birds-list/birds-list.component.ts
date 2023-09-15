import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Bird } from '../models/Bird';
import { BirdSex } from '../models/BirdSex';
import { BirdType } from '../models/BirdType';
import { LocalStorageService } from 'angular-web-storage';
import { BIRDS_LIST_KEY, CURRENT_BIRD_INDEX_KEY } from '../utils/Constants';

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
    // this.loadBirdsFromStorage()
  }
  
  /*ngOnChange() {
    this.loadBirdsFromStorage()
  }*/

  openUpdateModal(template: TemplateRef<any>) {
    console.log("Open modal to update bird")
    // let selectedBird = this.birds.get(onSelectBird)
    this.modalRef = this.modalService.show(template);
  }

  public onSaveBird(bird: Bird) {
    this.saveBird.emit(bird)
  }

}
