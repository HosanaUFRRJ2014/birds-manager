import { BirdSex } from "./BirdSex"
import { BirdType } from "./BirdType"

export class Bird {
    name: string
    photo: string | undefined
    type: BirdType
    sex: BirdSex | undefined
    birthday: Date
    aquisitionDate: Date
    firstEgg: Date | undefined
    description: string | undefined

    constructor(
        name: string, 
        type: BirdType, 
        birthday: Date, 
        aquisitionDate: Date,
        photo: string | undefined = undefined,
        sex: BirdSex | undefined = undefined,
        firstEgg: Date | undefined = undefined,
        description: string | undefined = undefined
    ) {
        this.name = name
        this.type = type
        this.birthday = birthday
        this.aquisitionDate = aquisitionDate

        this.photo = photo
        this.sex = sex
        this.firstEgg = firstEgg
        this.description = description
    }
}