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

const findAllSubarraysWithSum = (arr, targetSum) => {
  const subarrays = [];
  const prefixSumMap = new Map();
  let currentSum = 0;

  prefixSumMap.set(0, [-1]);

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (prefixSumMap.has(currentSum - targetSum)) {
      const startIndices = prefixSumMap.get(currentSum - targetSum);
      console.log(startIndices);
      for (const startIdx of startIndices) {
        subarrays.push(arr.slice(startIdx + 1, i + 1));
      }
    }

    if (!prefixSumMap.has(currentSum)) {
      prefixSumMap.set(currentSum, []);
    }
    prefixSumMap.get(currentSum).push(i);
  }

  return subarrays;
};

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

const nums = [1, 2, 3, 4, 5];
const k = 5;

// console.log(findAllSubarraysWithSum(nums, k));
console.log(allSubarraysCountGivenSumK());
