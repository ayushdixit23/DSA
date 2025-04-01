// Maximum Sum Subarray of Size K

// Brute force
// const maximumSumSubarraySizeK = () => {
//   let maxSum = Number.MIN_VALUE;
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     const nums = arr.slice(i, i + k);
//     let sum = 0;
//     for (let j = 0; j < nums.length; j++) {
//       sum += nums[j];
//     }
//     maxSum = Math.max(maxSum, sum);
//   }

//   return maxSum;
// };

// Optimize Solution
const maximumSumSubarraySizeK = () => {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += arr[j];
  }

  let maxSum = sum;

  for (let i = 1; i <= arr.length - k; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

// const arr = [2, 1, 5, 1, 3, 2];
// const k = 3;
// console.log(maximumSumSubarraySizeK());

// Find All Subarrays with Given Sum

// brute force
// const allSubarraysGivenSumK = (nums, k) => {
//     const arr = [];

//     for (let i = 0; i < nums.length; i++) {
//       let currentSum = 0;

//       for (let j = i; j < nums.length; j++) {
//         currentSum += nums[j];

//         if (currentSum === k) {
//           arr.push(nums.slice(i, j + 1));
//         }
//       }
//     }

//     return arr;
//   };

// const findAllSubarraysWithSum = (arr, targetSum) => {
//   const subarrays = [];
//   const prefixSumMap = new Map();
//   let currentSum = 0;

//   prefixSumMap.set(0, [-1]);

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (prefixSumMap.has(currentSum - targetSum)) {
//       const startIndices = prefixSumMap.get(currentSum - targetSum);
//       for (const startIdx of startIndices) {
//         subarrays.push(arr.slice(startIdx + 1, i + 1));
//       }
//     }

//     if (!prefixSumMap.has(currentSum)) {
//       prefixSumMap.set(currentSum, []);
//     }
//     prefixSumMap.get(currentSum).push(i);
//   }

//   return subarrays;
// };


// const allSubarraysCountGivenSumK = (nums, k) => {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;

//     for (let j = i; j < nums.length; j++) {
//       currentSum += nums[j];

//       if (currentSum === k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

const allSubarraysCountGivenSumK = () => {
  let count = 0;
  const prefixSumMap = new Map();
  let currentSum = 0;

  prefixSumMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (prefixSumMap.has(currentSum - k)) {
      count += prefixSumMap.get(currentSum - k);
    }
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
  }

  return count;
};

// const nums = [1, 2, 3];
// const k = 2;

// console.log(findAllSubarraysWithSum());

// console.log(allSubarraysCountGivenSumK());

// Check if a Subarray with 0 Sum Exists
const checkSubarrayofSumZeroExists = (arr, targetSum) => {
  const prefixSumMap = new Map();
  let currentSum = 0;

  prefixSumMap.set(0, [-1]);
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (prefixSumMap.has(currentSum - targetSum)) {
      return true;
    }

    if (!prefixSumMap.has(currentSum)) {
      prefixSumMap.set(currentSum, []);
    }
    prefixSumMap.get(currentSum).push(i);
  }

  return false;
};

// console.log(checkSubarrayofSumZeroExists([4, 2, -3,1, 6],0))

// Maximum Subarray
const maximumSubarray = () => {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    currentSum += arr[i];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

const arr = [0];
// const arr = [5,4,-1,7,8]
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maximumSubarray());

// Maximum Good Subarray Sum

// const nums = [1, 2, 3, 4, 5, 6];
// const k = 1;
// const nums = [-1, 3, 2, 4, 5];
// -1 2 4 8 13
// const k = 3;

// const maximumSubarraySum = function () {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let firstElementOfSubArray = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(firstElementOfSubArray - nums[j]) == k) {
//         arr.push(nums.slice(i, j + 1));
//       }
//     }
//   }

//   if (arr.length == 0) {
//     return 0;
//   }

//   let maxSum = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     const indivArr = arr[i];
//     let sum = 0;
//     for (let j = 0; j < indivArr.length; j++) {
//       sum += indivArr[j];
//     }
//     maxSum = Math.max(sum, maxSum);
//   }

//   console.log(arr);

//   return maxSum;
// };

