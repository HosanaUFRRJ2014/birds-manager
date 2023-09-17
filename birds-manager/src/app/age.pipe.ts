import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthdayStr: any): string {
    const currentDate = new Date()
    const [birthYear, birthMonth, birthDay] = birthdayStr.split("-")
    const years = currentDate.getFullYear() - parseInt(birthYear)
    const months = currentDate.getMonth() + 1 - parseInt(birthMonth)
    const days = currentDate.getDate() - parseInt(birthDay)
    
    const monthsStr = `${months} meses`
    const daysStr = `${days} dias`
    
    let age: string = ""

    if(years > 0) {
      age += `${years} anos e ${monthsStr}`
    } else if(months > 0) {
      age += `${monthsStr} e ${daysStr}`
    } else {
      age += daysStr
    }
    console.log("age: ", age)
    return age;
  }

}
