var isHappy = function (n) {
  let num = n;

  while (num) {
    let strNum = num.toString();

    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
      sum += Math.pow(parseInt(strNum[i]), 2);
    }
    if (sum === 1) {
      return true;
    }
    num = sum;

    if (num === 4) {
      return false;
    }
  }
};
