import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../classes/Bird';

@Component({
  selector: 'birds-list-item',
  templateUrl: './birds-list-item.component.html',
  styleUrls: ['./birds-list-item.component.css']
})
export class BirdsListItemComponent {

  @Input() itemId: number = -1
  @Input() bird: Bird | undefined
  @Input() isActive: boolean = false
  @Output() selectedBirdId = new EventEmitter<number>()
  classesList: string = "list-group-item list-group-item-action"

  ngOnInit() {

  }

  onClick(event: Event, itemId: number): void {
    let element = (event.target as HTMLInputElement)
    console.log(`Element id=${itemId} was clicked.`)
    this.isActive = !this.isActive

    this.selectedBirdId.emit(itemId)
  }

  ngOnChange() {
    if(this.isActive) {
      this.classesList = "list-group-item list-group-item-action active"
    } else {
      this.classesList = "list-group-item list-group-item-action"
    }
  }
}
