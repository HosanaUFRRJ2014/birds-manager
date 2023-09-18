import { Component, Input } from '@angular/core';
import { BirdsService } from '../birds.service';
import { Bird } from '../models/Bird';

@Component({
  selector: 'delete-bird-action',
  templateUrl: './delete-bird-action.component.html',
  styleUrls: ['./delete-bird-action.component.css']
})
export class DeleteBirdActionComponent {

  @Input() bird!: Bird

  constructor(private service: BirdsService) {}

  onDeleteItem(_event: MouseEvent) {
    const confirmedDeletion = window.confirm(`Deseja deletar ${this.bird.name}?`)

    if(confirmedDeletion) {
      this.service.delete(this.bird.id!)
    }
  }
}
