import mergeSort from "./mergeSort.js";

test("check if an empty array returns it's self", () => {
  expect(mergeSort([])).toEqual([]);
});
