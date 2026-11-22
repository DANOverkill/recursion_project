import { mergeSort, merge } from "./mergeSort.js";

//testing for mergeSort()
test.skip("check if an empty array returns it's self", () => {
  expect(mergeSort([])).toEqual([]);
});

test.skip("check if array of lenth 1 returns itself", () => {
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

test("check if arrays get merged in order", () => {
  expect(merge([1, 4, 8], [2, 5, 7])).toEqual([1, 2, 4, 5, 7, 8]);
});

test("check if arrays get merged in order when arrays have different length", () => {
  expect(merge([1, 1, 8], [2, 5, 7, 9, 10])).toEqual([1, 1, 2, 5, 7, 8, 9, 10]);
});

test("check if arrays get merged in order when arrays have different length", () => {
  expect(merge([2, 5, 7, 9, 10], [1, 1, 8])).toEqual([1, 1, 2, 5, 7, 8, 9, 10]);
});

test("check if two empty arrways return a single empty array", () => {
  expect(merge([], [])).toEqual([]);
});

test("check the second array is empty if the function returns the first array", () => {
  expect(merge([1, 4], [])).toEqual([1, 4]);
});

test("check the first array is empty if the function returns the second array", () => {
  expect(merge([], [5, 3])).toEqual([5, 3]);
});
