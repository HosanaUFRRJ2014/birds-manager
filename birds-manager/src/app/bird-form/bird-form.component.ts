import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bird } from '../models/Bird';
import { BirdType } from '../models/BirdType';
import { BirdSex } from '../models/BirdSex';

@Component({
  selector: 'bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent {
    isFemale: boolean = false;
    @Input() bird: Bird | undefined
    model!: Bird
    mandatoryFieldText: string = "Campo obrigatório"
    birdTypes: BirdType[] = Object.values(BirdType)
    @Output() saveBird = new EventEmitter<Bird>()
    @Output() willClose = new EventEmitter<boolean>()

    ngOnInit() {
      this.loadBirdData()
      this.isFemale = this.model.sex == BirdSex.female
    }

    onSubmit() {
      console.log("The form was submitted")
      this.saveBird.emit(this.model)
      this.willClose.emit(true)
    }

    onChangeSex(event: Event) {
      let element = (event.target as HTMLInputElement)
      this.isFemale = element.id == "birdSexFemale" && element.checked
    }

    loadBirdData() {
      if (this.bird != undefined) {
        this.model = this.bird
      } else {
        this.model = new Bird('', BirdType.canary, new Date(), new Date()) 
      }
    }

    loadFormattedDate(date: Date): string {
      return date.toISOString().split('T')[0]
    }
}
