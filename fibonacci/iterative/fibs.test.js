import fibs from "./fibs.js";

test("check n = 0 edge case", () => {
  expect(fibs(0)).toEqual([0]);
});

test("check n = 1 edge case", () => {
  expect(fibs(1)).toEqual([0, 1]);
});

test("check n = 2", () => {
  expect(fibs(2)).toEqual([0, 1, 1]);
});

test("check n = 3", () => {
  expect(fibs(3)).toEqual([0, 1, 1, 2]);
});

test("check n = 4", () => {
  expect(fibs(4)).toEqual([0, 1, 1, 2, 3]);
});

test("check n = 5", () => {
  expect(fibs(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test("check n = 13", () => {
  expect(fibs(13)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]);
});

test("return error if parameter is not a positive integer", () => {
  expect(fibs("2")).toBe("must pass a positive integer as a parameter");
});

test("return error if parameter is not a positive integer", () => {
  expect(fibs(-2)).toBe("must pass a positive integer as a parameter");
});

test("return error if parameter is not a positive integer", () => {
  expect(fibs(2.3)).toBe("must pass a positive integer as a parameter");
});
