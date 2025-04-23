// Sum of All Subarrays of Size K
function sumOfSubarraysOfSizeK(arr, k) {
  if (k === 1) {
    return arr;
  }
  const sumArr = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  sumArr.push(sum);
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    sumArr.push(sum);
  }
  return sumArr;
}

// const arr = [1, 2, 3, 4, 5];
// const k = 1;
// console.log(sumOfSubarraysOfSizeK(arr, k));

// const arr = [1, 2, 3, -2, 2];
// const k = 3;

// Subarray Sum Equals K
function subarraySumEqualsK(arr, k) {
  let count = 0;
  const map = new Map();
  let prefixSum = 0;
  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    const target = prefixSum - k;
    if (map.has(target)) {
      count += map.get(target);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
}

// console.log(subarraySumEqualsK(arr, k));

const findMaxAverage = function () {
  if (k === 1) {
    return nums[0];
  }
  let maxAverage = -Infinity;
  let sum = nums[0];

  for (let i = 1; i < k; i++) {
    sum += nums[i];
  }
  maxAverage = Math.max(sum / k, maxAverage);

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxAverage = Math.max(sum / k, maxAverage);
  }
  return maxAverage;
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(findMaxAverage());
