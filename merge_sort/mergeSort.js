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
    // console.log(arr);
    return arr;
  } else {
    let leftArr = arr.slice(0, Math.ceil(arr.length / 2));
    let rightArr = arr.slice(Math.ceil(arr.length / 2));
    // console.log("left side arr", leftArr);
    // console.log("right side arr", rightArr);
    if (leftArr.length > 1) {
      leftArr = mergeSort(leftArr);
    }
    if (rightArr.length > 1) {
      rightArr = mergeSort(rightArr);
    }
    console.log("final leftArr: ", leftArr);
    console.log("final rightArr: ", rightArr);
    console.log("final merge", merge(leftArr, rightArr));
    return merge(leftArr, rightArr);
  }
}
export { mergeSort, merge };
