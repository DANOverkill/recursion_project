import { mergeSort, merge } from "./mergeSort.js";

//testing for mergeSort()
test("check if an empty array returns it's self", () => {
  expect(mergeSort([])).toEqual([]);
});

test("check if array of lenth 1 returns itself", () => {
  expect(mergeSort([73])).toEqual([73]);
});

test.skip("check if an empty array returns it's self", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test.skip("check if an empty array returns it's self", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test.skip("check if an empty array returns it's self", () => {
  expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});

//testing for merge()
test("check if arrays get merged in order", () => {
  expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});
