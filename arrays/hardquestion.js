const generate = function () {
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }
  const arr = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    let localArr = [];
    localArr.push(1);
    for (let k = 1; k < i - 1; k++) {
      const sum = arr[i - 2][k - 1] + arr[i - 2][k];
      localArr.push(sum);
    }
    localArr.push(1);
    arr.push(localArr);
  }
  return arr;
};

// const numRows = 30;
// console.log(generate())

// ultimate brute force
// const threeSum = function () {
//   const arr = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const localArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//           const strval = JSON.stringify(localArr);
//           arr.add(strval);
//         }
//       }
//     }
//   }
//   const orginalArr = [];
//   arr.forEach((value) => {
//     orginalArr.push(JSON.parse(value));
//   });
//   return orginalArr;
// };

// Brute force
// const twoSum = function () {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         console.log(numbers[i],numbers[j])
//       if (numbers[i] + numbers[j] === target) {
//         return [i+1, j+1];
//       }
//     }
//   }
// };

const twoSum = function () {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
};

// const numbers = [2, 7, 11, 15],
//   target = 9;
// console.log(twoSum());

const threeSum = function (nums) {
  const arr = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const firstElement = nums[i];
    const target = 0 - firstElement;

    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[start] + nums[end];

      if (sum === target) {
        arr.push([nums[i], nums[start], nums[end]]);

        while (start < end && nums[start] === nums[start + 1]) {
          start++;
        }
        while (start < end && nums[end] === nums[end - 1]) {
          end--;
        }

        start++;
        end--;
      } else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }

  return arr;
};

// const nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum());

// Merge Sorted Array
const merge = function(nums1, m, nums2, n) {
    let i = m - 1; 
    let j = n - 1;
    let index = m + n - 1;  
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[index] = nums1[i];
            i--;
        } else {
            nums1[index] = nums2[j];
            j--;
        }
        index--;
    }

    while (j >= 0) {
        nums1[index] = nums2[j];
        j--;
        index--;
    }
};

// const nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
// console.log(merge());

// Binary Search
const search = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 9;
// console.log(search(nums));

const searchRange = function () {
  let start = 0;
  let end = nums.length - 1;

  let firstEncounter = -1;
  let lastEncounter = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      //   let localMid = mid
      firstEncounter = mid;
      lastEncounter = mid;

      for (let i = mid; nums[i] === nums[mid]; i--) {
        firstEncounter=i
      }

      for (let i = mid; nums[i] === nums[mid]; i++) {
        lastEncounter = i
      }

      return [firstEncounter, lastEncounter];
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [-1, -1];
};

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// console.log(searchRange());

