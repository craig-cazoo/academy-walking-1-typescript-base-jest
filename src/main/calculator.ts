export const add = (numbers: string) => {
  if (numbers) {
    const numberlist = numbers.includes(",") ? numbers.split(",") : numbers.split("\n");

    let total = 0;

    for (let index = 0; index < numberlist.length; index++) {
        const element = numberlist[index];
        total += parseInt(element);
    }

    return total;
  }

  return 0;
}
