function getStrings(numbers: string) {
  if (numbers.startsWith("//")) {
    const separator = numbers.charAt(2);

    return numbers.slice(4).split(new RegExp(`[${separator}]`))
  } else {
    return numbers.split(/[\n,]/)
  }
}

export const add = (numbers: string) => {
  if (numbers) {
    const strings = getStrings(numbers);

    let total = 0;

    const numberList = strings.map(s => parseInt(s));

    const negativeNumbers = numberList.filter(n => n < 0);

    if (negativeNumbers.length > 0) {
      throw Error(`negatives not allowed, value=${negativeNumbers.join()}`)
    }

    for (const n of numberList) {
        total += n;
    }

    return total;
  }

  return 0;
}
