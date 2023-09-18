import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Bird } from './models/Bird';
import { BIRDS_LIST_KEY, BIRD_INDEX_KEY } from './utils/Constants';
import { BirdSex } from './models/BirdSex';
import { BirdsService } from './birds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'birds-manager';
  birds!: Map<number, Bird>

  constructor(private service: BirdsService) {}

  ngOnInit() {
    this.loadBirdsFromStorage()
  }

  /*ngOnChange() {
    //this.loadBirdsFromStorage()
  }*/

  onSaveBird(bird: Bird) {
    this.service.save(bird)
  }

  private loadBirdsFromStorage() {
    this.birds = this.service.list()
  }
}
