import { parse } from "path";

export const add = (numbers: string) => {
  if (numbers) {
    const numberlist = numbers.split(",");

    let total = 0;

    for (let index = 0; index < numberlist.length; index++) {
        const element = numberlist[index];
        total += parseInt(element);
    }

    return total;
  }

  return 0;
}
