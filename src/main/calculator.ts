export const add = (numbers: string) => {
  if (numbers.includes(",")) {
    const [first, second] = numbers.split(",");
    return parseInt(first) + parseInt(second);
  } else {
      return numbers ? parseInt(numbers) : 0;
  }
}
