import { Console } from "console"

export const add = (numbers: string) => {
  if (numbers) {
    let numberList: string[]
    if (numbers.startsWith("//")) {        
       numberList = numbers.slice(4).split(new RegExp(`[${numbers.charAt(2)}]`))
    } else {
      numberList = numbers.split(/[\n,]/)
    }

    let total = 0;

    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        const parsed = parseInt(element)
        if (parsed < 0) throw Error(`negatives not allowed, value=${parsed}`)
        total += parsed;
    }

    return total;
  }

  return 0;
}
