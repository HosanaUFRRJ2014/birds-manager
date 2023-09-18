export class BirdWeight {
    birdId: number
    weight: number
    date: Date

    constructor(birdId: number, weight: number, date: Date) {
        this.birdId = birdId
        this.weight = weight
        this.date = date
    }
}