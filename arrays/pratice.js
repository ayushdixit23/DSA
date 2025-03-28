// Find the Second Largest Element
//const arr = [10, 20, 4, 45, 99];

const findSecondLargest = () => {
  let secondLargestElementIndex = -1;
  let firstLargestElementIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[firstLargestElementIndex]) {
      secondLargestElementIndex = firstLargestElementIndex;
      firstLargestElementIndex = i;
    } else if (
      arr[i] !== arr[firstLargestElementIndex] &&
      (secondLargestElementIndex === -1 ||
        arr[i] > arr[secondLargestElementIndex])
    ) {
      secondLargestElementIndex = i;
    }
  }

  return arr[secondLargestElementIndex];
};

// console.log(findSecondLargest());

// Move Zeros to End
// const arr = [0, 1, 0, 3, 12];
const moveZerosToEnd = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const element = arr.splice(i, 1);
      console.log(element);
      arr.push(element[0]);
    }
  }
};

// moveZerosToEnd();
// console.log(arr);

// Find the Missing Number in an Array
// const arr = [1, 2, 3, 4, 6];
const findMissingNumber = () => {
  const n = arr.length;
  const sumofNPlus1 = ((n + 1) * (n + 2)) / 2;
  let sumofN = 0;

  for (let i = 0; i < arr.length; i++) {
    sumofN += arr[i];
  }
  const missingNumber = sumofNPlus1 - sumofN;
  return missingNumber;
};

// console.log(findMissingNumber());

// reverse an array
const reverseArray = () => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

// reverseArray();
// console.log(arr, "arry");

// const arr = [2, 4, 5, 1, 7, 9, 8];
// find maximum/minimum
const minimum = () => {
  let minimumisAtIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minimumisAtIndex]) {
      minimumisAtIndex = i;
    }
  }

  return { value: arr[minimumisAtIndex], index: minimumisAtIndex };
};

// console.log(minimum());
const maximum = () => {
  let maximumAtIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maximumAtIndex]) {
      maximumAtIndex = i;
    }
  }

  return { value: arr[maximumAtIndex], index: maximumAtIndex };
};

// console.log(maximum());

// Two Sum Problem
// const nums = [2, 7, 11, 15];
// let target = 9;

// Two Sum
const twoSum = () => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

// console.log(twoSum())
// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

// Interestion
const intersection = function (nums1, nums2) {
  const intersect = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!intersect.includes(nums1[i])) intersect.push(nums1[i]);
      }
    }
  }
  return intersect;
};

// console.log(intersection(nums1, nums2));

// const nums = [4, 2, 4];
const findSubarrays = function (nums) {
  const subarrays = nums.map((_, i) => nums.slice(i, i + 2)).slice(0, -1);

  const isSum = [];

  for (let i = 0; i < subarrays.length; i++) {
    const first = subarrays[i][0];
    const second = subarrays[i][1];
    const sum = first + second;
    if (isSum.includes(sum)) {
      return true;
    }

    isSum.push(sum);
  }
  return false;
};

// console.log(findSubarrays(nums));
// console.log(findSubarrays([1,2,3,4,5]));

// Maximum Subarray
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubArray = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(maxSubArray(nums));

// Arithmetic Subarrays
// const nums = [4, 6, 5, 9, 3, 7];
// const l = [0, 0, 2];
// const r = [2, 3, 5];
// const checkArithmeticSubarrays = function (nums, l, r) {
//   const result = [];
//   for (let i = 0; i < l.length; i++) {
//     const localResult = [];
//     const start = l[i];
//     const end = r[i];

//     const sliceArray = nums.slice(start, end + 1);
//     const sortedArray = sliceArray.sort((a, b) => {
//       return a - b;
//     });

//     if (sortedArray.length < 2) {
//       localResult.push(true);
//       break;
//     }

//     const difference = sortedArray[1] - sortedArray[0];

//     for (let i = 1; i < sortedArray.length - 1; i++) {
//       if (sortedArray[i + 1] - sortedArray[i] !== difference) {
//         localResult.push(false);
//       } else {
//         localResult.push(true);
//       }
//     }

//     let isAllTrue = localResult.every((value, index, array) => {
//       return value == true;
//     });

//     if (isAllTrue) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }
//   return result;
// };

// console.log(checkArithmeticSubarrays());
