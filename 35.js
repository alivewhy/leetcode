// nums = [1,3,5,6], target = 5, output = 2
// nums = [1,3,5,6], target = 2, output = 1

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

let nums = [1, 3, 5, 6];
let target = 7;
console.log(searchInsert(nums, target));
