import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { BIRDS_LIST_KEY, BIRDS_WEIGHT_KEY } from './utils/Constants';
import { BirdWeight } from './models/BirdWeight';

@Injectable({
  providedIn: 'root'
})
export class BirdWeightService {

  birdsWeights: Map<number, BirdWeight[]>

  constructor(private local: LocalStorageService) {
    this.birdsWeights = new Map()
    this.loadFromStorage()
  }

  ngOnInit() {
    this.loadFromStorage()
  }

  ngOnChange() {
    this.loadFromStorage()
  }

  get(birdId: number): BirdWeight[] {
    return this.birdsWeights.get(birdId)?? []
  }

  save(birdId: number, newWeight: BirdWeight) {
    let weightsList = this.get(birdId)
    weightsList.push(newWeight)
    this.birdsWeights.set(birdId, weightsList)

    this.saveBirdsWeightInLocalStorage()
  }

  delete(birdId:number, index: number) {
    const birdWeights: BirdWeight[] = this.get(birdId)!
    birdWeights.splice(index, 1)

    this.birdsWeights.set(birdId, birdWeights)
    this.saveBirdsWeightInLocalStorage()
  }

  deleteAllWeightsOfABird(birdId:number) {
    this.birdsWeights.delete(birdId)
    this.saveBirdsWeightInLocalStorage()
  }

  private loadFromStorage() {
    const weightsFromStorage = this.local.get(BIRDS_WEIGHT_KEY)

    if(weightsFromStorage) {
      this.birdsWeights = new Map<number, BirdWeight[]>(JSON.parse(weightsFromStorage))
    } else {
      this.birdsWeights = new Map()
    }
    return this.birdsWeights
  }

  private saveBirdsWeightInLocalStorage(): void {
    this.local.set(BIRDS_WEIGHT_KEY, JSON.stringify([...this.birdsWeights]))
  }
}
