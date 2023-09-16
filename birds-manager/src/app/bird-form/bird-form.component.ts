import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
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
    birdTypes: String[] = Object.values(BirdType)
    defaultSex?: BirdSex | undefined = BirdSex.male
    selectedSex?: BirdSex | undefined = undefined
    birdSex = BirdSex
    @Output() saveBird = new EventEmitter<Bird>()
    @Output() willClose = new EventEmitter<boolean>()

    constructor(private datePipe: DatePipe) {}

    ngOnInit() {
      this.loadBirdData()
      this.isFemale = this.model.sex == BirdSex.female
    }

    onSubmit() {
      console.log("The form was submitted")
      this.model.sex = this.selectedSex
      this.saveBird.emit(this.model)
      this.willClose.emit(true)
    }

    onChangeSex(event: Event) {
      let element = (event.target as HTMLInputElement)
      this.isFemale = element.id == "birdSexFemale" && element.checked
    }

    onSelectSex(event: Event) {
      let element = (event.target as HTMLInputElement)

      if (element.id == "birdSexFemale") {
        this.selectedSex = BirdSex.female
      } else if(element.id == "birdSexMale") {
        this.selectedSex = BirdSex.male
      } else {
        this.selectedSex = undefined
      }
    }

    loadBirdData() {
      const isUpdate = this.bird != undefined 
      if (isUpdate) {
        console.log("Loading saved bird data ...", this.bird)
        this.model = new Bird(
          this.bird!.name,
          this.bird!.type,
          this.bird!.birthday,
          this.bird!.aquisitionDate,
          this.bird!.id,
          this.bird!.photo,
          this.bird!.sex,
          this.bird!.firstEgg,
          this.bird!.description
        )
        this.selectedSex = this.bird!.sex
      } else {
        this.model = new Bird('', BirdType.cockatiel, new Date(), new Date(), undefined, undefined, this.defaultSex) 
      }
    }

    loadFormattedDate(date: Date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd', 'UTC-3');
    }
}
