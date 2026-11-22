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

  return returnArr;
}
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let leftArr = arr.slice(0, Math.ceil(arr.length / 2));
    let rightArr = arr.slice(Math.ceil(arr.length / 2));
    if (leftArr.length > 1) {
      leftArr = mergeSort(leftArr);
    }
    if (rightArr.length > 1) {
      rightArr = mergeSort(rightArr);
    }
    return merge(leftArr, rightArr);
  }
}
export { mergeSort, merge };
