import * as calculator from "../main/calculator";

describe("String Calculator", () => {
  test("should return 0 for empty strings", () => {
    const input = "";
    const result = calculator.add(input);

    expect(result).toBe(0);
  });

  test("should return 1 for string 1", () => {
    const input = "1";
    const result = calculator.add(input);

    expect(result).toBe(1);
  });

  test("should return 2 for string 2", () => {
    const input = "2";
    const result = calculator.add(input);

    expect(result).toBe(2);
  });
});
