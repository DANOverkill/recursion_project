function merge(arr1, arr2) {
  let returnArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] === undefined || arr2[j] === undefined) {
      if (arr1[i] !== undefined) {
        returnArr.push(arr1[i]);
        i++;
      }
      if (arr2[j] !== undefined) {
        returnArr.push(arr2[j]);
        j++;
      }
    } else if (arr1[i] <= arr2[j]) {
      returnArr.push(arr1[i]);
      i++;
    } else {
      returnArr.push(arr2[j]);
      j++;
    }
  }
  console.log(returnArr);
  return returnArr;
}
function mergeSort() {
  return [];
}
export { mergeSort, merge };
