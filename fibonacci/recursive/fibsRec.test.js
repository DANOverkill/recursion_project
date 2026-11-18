import fibsRec from "./fibsRec.js";

test("check n = 0 edge case", () => {
  expect(fibsRec(0)).toEqual([0]);
});

test("check n = 1 edge case", () => {
  expect(fibsRec(1)).toEqual([0, 1]);
});

test("check n = 2", () => {
  expect(fibsRec(2)).toEqual([0, 1, 1]);
});

test("check n = 3", () => {
  expect(fibsRec(3)).toEqual([0, 1, 1, 2]);
});

test("check n = 4", () => {
  expect(fibsRec(4)).toEqual([0, 1, 1, 2, 3]);
});

test("check n = 5", () => {
  expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test("check n = 13", () => {
  expect(fibsRec(13)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,
  ]);
});

test("return error if parameter is not a positive integer", () => {
  expect(fibsRec("2")).toBe("must pass a positive integer as a parameter");
});

test("return error if parameter is not a positive integer", () => {
  expect(fibsRec(-2)).toBe("must pass a positive integer as a parameter");
});

test("return error if parameter is not a positive integer", () => {
  expect(fibsRec(2.3)).toBe("must pass a positive integer as a parameter");
});
