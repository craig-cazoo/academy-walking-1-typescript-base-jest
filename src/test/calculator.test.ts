import * as calculator from "../main/calculator";

describe("String Calculator", () => {
  test.each([
    ["", 0],
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["1,2", 3],
    ["1,3",4],
  ])('calculator.add(%s) => %s', (input: string, expected: number) => {
    expect(calculator.add(input)).toEqual(expected);
  });
});
