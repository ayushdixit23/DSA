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
// const findPeakElement = function () {
//   let start = 1;
//   let end = nums.length - 2;

//   while (start <= end) {}
// };

const nums = [1, 2, 3, 1];

// console.log(findPeakElement());

function floorSqrt(n) {
  const answer = Math.floor(Math.sqrt(n));
  return answer;
}

function nthRoot(n, m) {
  let start = 1;
  let end = m;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (Math.pow(mid, n) === m) {
      return mid;
    } else if (Math.pow(mid, n) > m) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// Koko Eating Bananas
const piles = [3, 6, 7, 11],
  h = 8;

const minEatingSpeed = function () {
  let minimumSpeed = 1;
  let maximumSpeed = -Infinity;

  for (let i = 0; i < piles.length; i++) {
    maximumSpeed = Math.max(maximumSpeed, piles[i]);
  }

  while (minimumSpeed < maximumSpeed) {
    let mid = Math.floor((minimumSpeed + maximumSpeed) / 2);

    let sum = 0;
    for (let i = 0; i < piles.length; i++) {
      sum += Math.ceil(piles[i] / mid);
    }

    if (sum > h) {
      minimumSpeed = mid + 1;
    } else {
      maximumSpeed = mid;
    }
  }

  return minimumSpeed;
};

// console.log(minEatingSpeed());

const searchMatrix = function () {
  for (let i = 0; i < matrix.length; i++) {
    const rowArr = matrix[i];
    if (rowArr[0] <= target && target <= rowArr[rowArr.length - 1]) {
      let start = 0;
      let end = rowArr.length - 1;
      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (rowArr[mid] === target) {
          return true;
        } else if (rowArr[mid] > target) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    } else {
      continue;
    }
  }
  return false;
};

// const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ],
//   target = 3;

const matrix = [[-10], [-7], [-5]];
const target = -10;

console.log(searchMatrix());
