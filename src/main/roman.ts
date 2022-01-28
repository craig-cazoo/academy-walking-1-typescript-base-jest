const baseNumerals: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export const integerToRoman = (integer: number): string => {
  let romanNumeral = "";

  baseNumerals.forEach(([baseInteger, baseNumeral]) => {
    while (integer >= baseInteger) {
      romanNumeral += baseNumeral;
      integer -= baseInteger;
    }
  });

  return romanNumeral;
};
