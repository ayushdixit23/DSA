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
const nums = [4, 1, 2, 1, 2];
// const nums = [-1, -1, -2];

console.log(singleNumber());
