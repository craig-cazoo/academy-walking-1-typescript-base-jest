export const add = (numbers: string) => {
  if (numbers.includes(",")) {
    const [first, second, third] = numbers.split(",");
    if (third) {
      return parseInt(first) + parseInt(second) + parseInt(third);
    }

    return parseInt(first) + parseInt(second);
  }

  return numbers ? parseInt(numbers) : 0;
}
