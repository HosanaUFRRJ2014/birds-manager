import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../models/Bird';

@Component({
  selector: 'birds-list-item',
  templateUrl: './birds-list-item.component.html',
  styleUrls: ['./birds-list-item.component.css']
})
export class BirdsListItemComponent {

  @Input() itemId: number = -1
  @Input() bird: Bird | undefined
  @Output() onSelectBird = new EventEmitter<number>()

  ngOnInit() {

  }

  onClick(event: Event, itemId: number): void {
    console.log(`Bird id=${itemId} was clicked.`)

    this.onSelectBird.emit(itemId)
  }

  /*ngOnChange() {
    if(this.isActive) {
      this.classesList = "list-group-item list-group-item-action active"
    } else {
      this.classesList = "list-group-item list-group-item-action"
    }
  }*/
}
