import { Injectable } from '@angular/core';
import { Bird } from './models/Bird';
import { LocalStorageService } from 'angular-web-storage';
import { BIRDS_LIST_KEY, CURRENT_BIRD_INDEX_KEY } from './utils/Constants';
import { BirdType } from './models/BirdType';
import { response } from 'express';
import { RecommendedFood } from './models/RecommendedFood';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  birds : Map<number, Bird> =  new Map<number, Bird>()

  constructor(private local: LocalStorageService) { }

  list(): Map<number, Bird> {
    let birdsFromStorage: string = this.local.get(BIRDS_LIST_KEY)

    if(birdsFromStorage == undefined || birdsFromStorage.length == 0) {
      console.log("Empty storage of birds ... Creating new Map")
    } else {
      console.log("Retrieving storage of birds")
      let parsedStorage = new Map<number, Bird>(JSON.parse(birdsFromStorage))
      this.birds = parsedStorage
      console.log("birds: ", this.birds)
    }

    return this.birds;
  }

  save(bird: Bird) {
    const isCreate = bird.id == undefined
    if (isCreate) {
      bird.id = this.nextBirdId();
    }
    this.birds.set(bird.id!, bird)

    this.saveBirdsInLocalStorage()
  }

  delete(birdId: number) {
    this.birds.delete(birdId)

    this.saveBirdsInLocalStorage()
  }

  async getRecommendedFoodPortions(birdType: BirdType): Promise<RecommendedFood> {
    const url = `http://localhost:3000/recommended_food_portions?bird_type=${birdType}`

    console.log("Fetching ", url)
    try {
      const response = await fetch(url)
      const jsonResponses = await response.json()
      const responseItem = jsonResponses[0]

      return await new RecommendedFood(
        responseItem.bird_type,
        responseItem.text,
        responseItem.percentages,
        responseItem.grams
      )
    }
    catch(error) {
      console.error(
        "JSON Server only works on local environment. ",
       "Providing default recommended food instructions",
        "Are you running 'npm run json:server' ?",
       "Original error: \n",
       error
      )
      return await new RecommendedFood(
        birdType,
        "Instrução default, pois JSON Server não funciona no GitPages.",
        [10]
      )
    }

  }

  private nextBirdId(): number {
    let currentIndex: number = this.local.get(CURRENT_BIRD_INDEX_KEY)
    let nextId = currentIndex == 0? 1 : currentIndex + 1
    this.local.set(CURRENT_BIRD_INDEX_KEY, nextId);

    return nextId;
  }

  private saveBirdsInLocalStorage(): void {
    this.local.set(BIRDS_LIST_KEY, JSON.stringify([...this.birds]))
  }
}
