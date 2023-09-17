import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../models/Bird';
import { BirdsService } from '../birds.service';

@Component({
  selector: 'birds-list-item',
  templateUrl: './birds-list-item.component.html',
  styleUrls: ['./birds-list-item.component.css']
})
export class BirdsListItemComponent {
  @Input() itemId: number = -1
  @Input() bird: Bird | undefined
  @Output() onSelectBird = new EventEmitter<number>()

  constructor(private service: BirdsService) {}

  onClick(event: Event, itemId: number): void {
    console.log(`Bird id=${itemId} was clicked.`)

    this.onSelectBird.emit(itemId)
  }

  onDeleteItem(_event: MouseEvent, birdId: number) {
    const confirmedDeletion = window.confirm(`Deseja deletar ${this.bird!.name}?`)

    if(confirmedDeletion) {
      this.service.delete(birdId)
    }
  }
}
