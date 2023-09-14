import { Component, Input } from '@angular/core';
import { Bird } from '../classes/Bird';
import { BirdType } from '../classes/BirdType';

@Component({
  selector: 'bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent {
    isFemale: boolean = false;
    @Input() bird: Bird | undefined

    ngOnInit() {
      this.loadBirdData()
    }

    onChangeSex(event: Event) {
      let element = (event.target as HTMLInputElement)
      this.isFemale = element.id == "birdSexFemale" && element.checked
    }

    loadBirdData() {
      if (this.bird != undefined) {
        (document.getElementById("birdName") as HTMLInputElement).value = this.bird.name;

        if (this.bird.photo) {
          (document.getElementById("birdPhoto") as HTMLInputElement).value = this.bird.photo;
        }
        // TODO: add bird type

        let sexCheckboxes: NodeListOf<HTMLElement> = document.getElementsByName("birdSex")
        for(let checkBox in sexCheckboxes) {
         // console.log(`bird Sex checkbox: ${checkBox}`)
        }

        // TODO: add bird sex

        (document.getElementById("birthday") as HTMLInputElement).value = this.loadFormattedDate(this.bird.birthday);
        (document.getElementById("aquisition") as HTMLInputElement).value = this.loadFormattedDate(this.bird.aquisitionDate);

        if (this.bird.firstEgg) {
          (document.getElementById("first-egg") as HTMLInputElement).value = this.loadFormattedDate(this.bird.firstEgg);
        }

        if (this.bird.description) {
          (document.getElementById("birdDescription") as HTMLInputElement).value = this.bird.description;
        }
      }
    }

    private loadFormattedDate(date: Date): string {
      return date.toISOString().split('T')[0]
    }
}
