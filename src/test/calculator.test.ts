import * as calculator from "../main/calculator";

describe("String Calculator", () => {
  test("should return 0 for empty strings", () => {
    const input = "";
    const result = calculator.add(input);

    expect(result).toBe(0);
  });

  test("should return 1 for string with a single number", () => {
    const input = "1";
    const result = calculator.add(input);

    expect(result).toBe(1);
  });
});
