import {calculator} from "../main/calculator";

describe("String Calculator", () => {
  test("should return 0 for empty strings", () => {
    const input = "";
    const result = calculator.add(input);

    expect(result).toBe(0);
  });
});
