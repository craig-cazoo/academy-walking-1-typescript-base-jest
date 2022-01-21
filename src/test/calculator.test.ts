import * as calculator from "../main/calculator";

describe("String Calculator", () => {
  test.each([
    ["", 0],
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["1,2", 3],
    ["1,3", 4],
    ["1,2,3", 6],
    ["1,2,3,4", 10],
    ["1\n2", 3],
    ["1\n3", 4],
    ["1\n2\n3", 6],
    ["1\n2,3", 6],
    ["//;\n1;2", 3],
  ])('calculator.add(%s) => %s', (input: string, expected: number) => {
    expect(calculator.add(input)).toEqual(expected);
  });
});
