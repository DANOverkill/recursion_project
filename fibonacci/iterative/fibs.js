function fibs(n) {
  if (Number.isInteger(n) && n >= 0) {
    if (n === 0) return [0];
    else if (n === 1) return [0, 1];
    else {
      let array = [0, 1];
      let length = n - 2;
      for (let i = 0; i <= length; i++) {
        let index = array.length - 1;
        let num = array[index] + array[index - 1];
        array.push(num);
      }
      return array;
    }
  } else {
    return "must pass a positive integer as a parameter";
  }
}

export default fibs;
