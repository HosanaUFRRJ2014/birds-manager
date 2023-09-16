import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Bird } from './models/Bird';
import { BIRDS_LIST_KEY, CURRENT_BIRD_INDEX_KEY } from './utils/Constants';
import { BirdSex } from './models/BirdSex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'birds-manager';
  birds!: Map<number, Bird>

  constructor(private local: LocalStorageService) {}

  ngOnInit() {
    this.loadBirdsFromStorage()
  }

  /*ngOnChange() {
    //this.loadBirdsFromStorage()
  }*/

  onSaveBird(bird: Bird) {
    const isCreate = bird.id == undefined
    if (isCreate) {
      let currentIndex: number = this.local.get(CURRENT_BIRD_INDEX_KEY)
      let nextId = currentIndex == 0? 1 : currentIndex + 1
      bird.id = nextId;
      this.local.set(CURRENT_BIRD_INDEX_KEY, nextId);
    }
    this.birds.set(bird.id!, bird)

    // saving in localStorage
    this.local.set(BIRDS_LIST_KEY, JSON.stringify([...this.birds]))
  }

  private loadBirdsFromStorage() {
    let birdsFromStorage: string = this.local.get(BIRDS_LIST_KEY)
    this.birds = new Map<number, Bird>()
    if(birdsFromStorage == undefined || birdsFromStorage.length == 0) {
      console.log("Empty storage of birds ... Creating new Map")
    } else {
      console.log("Retrieving storage of birds")
      let parsedStorage = new Map<number, Bird>(JSON.parse(birdsFromStorage))
      this.birds = parsedStorage
      console.log("birds: ", typeof this.birds.get(1)?.sex)
    }
  }
}
