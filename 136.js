var singleNumber = function (nums) {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

let arr = [2, 2, 1, 4, 1];
console.log(singleNumber(arr));