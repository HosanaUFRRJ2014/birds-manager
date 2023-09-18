import { Component, Input, TemplateRef } from '@angular/core';
import { Bird } from '../models/Bird';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BirdWeight } from '../models/BirdWeight';
import { BirdWeightService } from '../bird-weight.service';
import { DatePipe } from '@angular/common';
import { RecommendedFood } from '../models/RecommendedFood';
import { BirdsService } from '../birds.service';

@Component({
  selector: 'manage-bird-weight',
  templateUrl: './manage-bird-weight.component.html',
  styleUrls: ['./manage-bird-weight.component.css']
})
export class ManageBirdWeightComponent {
  public modalRef: BsModalRef
  model!: BirdWeight
  birdWeights!: BirdWeight[]
  @Input() bird!: Bird
  recommendedFoodPortionBySpecie!: RecommendedFood
  individualRecomendations: string = ""

  constructor(
      private modalService: BsModalService, 
      private birdWeightService: BirdWeightService,
      private birdsService: BirdsService,
      private datePipe: DatePipe
  ) {
    this.modalRef = new BsModalRef()
  }

  ngOnInit() {
    this.loadBirdWeights()
    this.resetForm()
    this.loadRecommendedFoodPortion().then(
      _ => this.calculateSuggestedPortion()
    )
    
  }

  loadBirdWeights() {
    this.birdWeights = this.birdWeightService.get(this.bird.id!)
  }

  loadFormattedDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  openWeightModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.birdWeightService.save(this.bird.id!, this.model)
    this.resetForm()
    this.loadBirdWeights()
    this.calculateSuggestedPortion()
  }

  onDeleteWeight(index: number) {
    this.birdWeightService.delete(this.bird.id!, index)
    this.calculateSuggestedPortion()
  }

  calculateSuggestedPortion() {
    console.log(this.recommendedFoodPortionBySpecie)
    const percentages =  this.recommendedFoodPortionBySpecie.percentages
    const isPercentage = percentages?.length! > 0

    if(this.birdWeights && this.birdWeights.length > 0) {
      if(isPercentage) {
        const individualRecomendations: number[] = []
        const lastWeight = this.birdWeights[this.birdWeights.length - 1].weight

        percentages?.forEach( p => {
          const possibleRecomendation = lastWeight * (p/100)
          individualRecomendations.push(possibleRecomendation)
        })

        const textPart = "gramas de alimento/dia."
        if (individualRecomendations.length > 1)
          this.individualRecomendations = `${individualRecomendations[0].toPrecision(3)} a ${individualRecomendations[1].toPrecision(3)} ${textPart}`
        if (individualRecomendations.length == 1)
          this.individualRecomendations = `${individualRecomendations[0].toPrecision(3)} ${textPart}`

      } else {
        this.individualRecomendations = this.recommendedFoodPortionBySpecie.text
      }
    }
  }

  private resetForm() {
    this.model = new BirdWeight(this.bird.id!, 1, new Date())
  }

  private async loadRecommendedFoodPortion() {    
    const recommendedFoodPortion = await this.birdsService
      .getRecommendedFoodPortions(this.bird.type)
     
    this.recommendedFoodPortionBySpecie = recommendedFoodPortion
  }

  
}
