const binarySearch = function () {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start / 2));
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

// Search in Rotated Sorted Array
const search = function () {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;
// console.log(search());

// Find Peak Element
const findPeakElement = function () {
  let start = 1;
  let end = nums.length - 2;

  while (start <= end) {
    
  }
};

const nums = [1, 2, 3, 1];

console.log(findPeakElement());
