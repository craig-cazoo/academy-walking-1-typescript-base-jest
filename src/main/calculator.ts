export const add = (numbers: string) => {
  if (numbers) {
    let numberList: string[]
    if (numbers.startsWith("//")) {
      numberList = numbers.slice(4).split(/[\n,;]/)
    } else {
      numberList = numbers.split(/[\n,]/)
    }

    let total = 0;

    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        total += parseInt(element);
    }

    return total;
  }

  return 0;
}
