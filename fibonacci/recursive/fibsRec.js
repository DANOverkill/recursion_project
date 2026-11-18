const fibcal = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    return fibcal(n - 1) + fibcal(n - 2);
  }
};

function fibsRec(n) {
  if (Number.isInteger(n) && n >= 0) {
    let returnArr = [];
    for (let length = 0; length <= n; length++) {
      returnArr.push(fibcal(length));
    }
    return returnArr;
  } else {
    return "must pass a positive integer as a parameter";
  }
}

export default fibsRec;
