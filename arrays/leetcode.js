// const maxFrequency = function(nums, k) {
const maxFrequency = function () {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    let value = k;
    const dif = nums[nums.length - 1] - nums[i];
    if (dif < value) {
      nums[i] = nums[i] + dif;
      value -= dif;
    }
  }

  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) {
      arr[nums[i]]++;
    } else {
      arr[nums[i]] = 1;
    }
  }

  let maxFrequency = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxFrequency) {
      maxFrequency = arr[i];
    }
  }

  return maxFrequency;
};

// const nums = [1,4,8,13];
// const nums = [1, 2, 4];
// const k = 5;

// console.log(maxFrequency());
// const nums = [2, 1, 3, 4];
// const nums = [3, 4, 5, 1, 2];

const missingNumber = function () {
  const n = nums.length; // 2 => 0, 1, 2
  const sumofNPlus1 = (n * (n + 1)) / 2;
  let sumofN = 0;

  for (let i = 0; i < nums.length; i++) {
    sumofN += nums[i];
  }
  const missingNumber = sumofNPlus1 - sumofN;
  return missingNumber;
};

// console.log(missingNumber())

const check = function () {
  const arr = [...nums];
  arr.sort((a, b) => a - b);
  const strArr = JSON.stringify(arr);

  for (let i = 0; i < nums.length; i++) {
    nums.unshift(nums.pop());

    console.log(nums);
    const newArr = JSON.stringify(nums);

    if (newArr === strArr) {
      return true;
    }
  }

  return false;
};

// console.log(check());

const rotate = function () {
  k = k % nums.length;
  nums.reverse();

  const reverseArray = (nums, start, end) => {
    while (start <= end) {
      const temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      start++;
      end--;
    }
  };

  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);

  return nums;
};

// const nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;

// console.log(rotate());

// const arr = [0, 0, 1];
// const moveZerosToEnd = () => {
//   let index = 0;
//   while (index < arr.length) {
//     if (arr[index] === 0) {
//         console.log(index,arr[index],arr)
//       const element = arr.splice(index, 1);
//       arr.push(element[0]);
//       if (arr[index] === 0) {
//         if (!index == 0) {
//           index--;
//         }
//       }
//     }
//     index++;
//   }
// };

const moveZeroes = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
};

// moveZerosToEnd();
// console.log(arr);

const findMaxConsecutiveOnes = function () {
  let maxOnesFrequency = 0;
  let currentMaxOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(currentMaxOnes, i);
    if (nums[i] !== 1) {
      let maxOnes = Math.max(currentMaxOnes, maxOnesFrequency);
      maxOnesFrequency = maxOnes;
      currentMaxOnes = 0;
    } else {
      currentMaxOnes++;
    }

    if (i === nums.length - 1) {
      let maxOnes = Math.max(currentMaxOnes, maxOnesFrequency);
      maxOnesFrequency = maxOnes;
    }
  }
  return maxOnesFrequency;
};

// const nums = [1, 1, 0, 1, 1, 1];

// console.log(findMaxConsecutiveOnes());

const singleNumber = function () {
  if (nums.length === 1) {
    return nums[0];
  }
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (let key of Object.keys(map)) {
    if (Number(map[key]) === 1) {
      return Number(key);
    }
  }
};

// const nums = [2, 2, 1];
// const nums = [4, 1, 2, 1, 2];
// const nums = [-1, -1, -2];

// console.log(singleNumber());

const sort012 = () => {
  let start = 0;
  let mid = 0;
  let end = nums.length - 1;

  const swap = (nums, start, end) => {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
  };
  while (mid <= end) {
    switch (nums[mid]) {
      case 0:
        swap(nums, start, mid);
        start++;
        mid++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        swap(nums, mid, end);
        end--;
        break;
    }
  }

  return nums;
};
// const nums = [2, 0, 2, 1, 1, 0];

// console.log(sort012())

const pairWithMaxSum = () => {
  let currentSum = arr[0] + arr[1];
  let maxSum = currentSum;

  for (let i = 1; i < arr.length - 1; i++) {
    currentSum = currentSum - arr[i - 1] + arr[i + 1];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

const longestConsecutiveSequence = () => {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let count = 1;
  let maximumCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        count++;
      } else {
        maximumCount = Math.max(maximumCount, count);
        count = 1;
      }
    }
  }

  return Math.max(maximumCount, count);
};

const nums = [100, 4, 200, 1, 3, 2];

// console.log(longestConsecutiveSequence());

const maxProduct = function () {
  let leftProduct = 1;
  let rightProduct = 1;
  let largestProduct = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (leftProduct == 0) {
      leftProduct = 1;
    }

    if (rightProduct == 0) {
      rightProduct = 1;
    }

    leftProduct *= nums[i];
    rightProduct *= nums[nums.length - i - 1];

    largestProduct = Math.max(
      largestProduct,
      Math.max(leftProduct, rightProduct)
    );
  }

  return largestProduct;
};

// const nums = [2, 3, -2, 4];

// console.log(maxProduct());

// Array Leaders
const leadersArray = () => {
  const lead = [];
  const lastElement = a[a.length - 1];
  lead.push(lastElement);
  let largestElement = lastElement;
  for (let i = a.length - 2; i >= 0; i--) {
    largestElement = Math.max(largestElement, a[i]);
    if (a[i] >= largestElement) {
      lead.push(a[i]);
    }
  }
  return lead.reverse();
};

// const a = [10, 4, 2, 4, 1];
// const a = [30, 10, 10, 5];
const a = [16, 17, 4, 3, 5, 2];

// console.log(leadersArray());

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

// Minimum Path Sum

// brute force solution
const minPathSum = function () {
  let rows = 0;
  let column = 0;
  let minimumSum = Infinity;

  const recursionTraversal = (rows, column, grid, sum) => {
    if (rows > grid.length - 1) {
      return sum;
    }

    if (column > grid[0].length - 1) {
      return sum;
    }

    if (rows === grid.length - 1 && column === grid[0].length - 1) {
      sum += grid[rows][column];
      minimumSum = Math.min(minimumSum, sum);
      return;
    }
    sum += grid[rows][column];

    recursionTraversal(rows + 1, column, grid, sum);

    recursionTraversal(rows, column + 1, grid, sum);
    return sum;
  };

  recursionTraversal(rows, column, grid, 0);

  return minimumSum;
};

console.log(minPathSum())

