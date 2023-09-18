import { BirdType } from "./BirdType"

export class RecommendedFood {
    birdType: BirdType
    text: string
    percentages?: number[] | undefined
    grams?: number[] | undefined

    constructor( birdType: BirdType,
        text: string,
        percentages?: number[] | undefined,
        grams?: number[] | undefined) {

            this.birdType = birdType
            this.text = text
            this.percentages = percentages
            this.grams = grams
    }
}