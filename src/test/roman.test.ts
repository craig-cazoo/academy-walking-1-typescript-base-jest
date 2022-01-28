/*
Given a positive integer number write a function returning its Roman numeral representation as a String.
*/

import { integerToRoman } from "../main/roman";

describe("roman numerals", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [1999, "MCMXCIX"],
    [2008, "MMVIII"],
  ])("should convert %i to %s", (integer: number, romanNumeral: string) => {
    expect(integerToRoman(integer)).toEqual(romanNumeral);
  });
});
