import { Component } from '@angular/core';

@Component({
  selector: 'bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent {
    isFemale: boolean = false;

    onChangeSex(event: Event) {
      console.log((event.target as HTMLInputElement))
      let element = (event.target as HTMLInputElement)
      this.isFemale = element.id == "birdSexFemale" && element.checked
    }
}
