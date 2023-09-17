import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Bird } from '../models/Bird';
import { BirdType } from '../models/BirdType';
import { BirdSex } from '../models/BirdSex';
import { BirdsService } from '../birds.service';
import { async } from '@angular/core/testing';

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
    recommendedFoodPortionText: string = "";

    @Output() saveBird = new EventEmitter<Bird>()
    @Output() willClose = new EventEmitter<boolean>()

    constructor(private datePipe: DatePipe, private service: BirdsService) {}

    ngOnInit() {
      this.loadBirdData()
      this.isFemale = this.model.sex == BirdSex.female
      this.onChangeBirdType(null)
    }

    onSubmit() {
      console.log("The form was submitted")
      this.model.sex = this.selectedSex
      this.saveBird.emit(this.model)
      this.willClose.emit(true)
    }

    async onChangeBirdType(_event?: Event | null) {
      console.log("Changed bird type, so changing recommended food portion")
      
      const recommendedFoodPortion = await this.service
        .getRecommendedFoodPortions(this.model.type)
        
      this.recommendedFoodPortionText = recommendedFoodPortion.text
      console.log(`Recommended food to bird (${this.model.type}): ${this.recommendedFoodPortionText}`)
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
