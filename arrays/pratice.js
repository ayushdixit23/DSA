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
const arr = [1, 2, 3,4, 6];
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

console.log(findMissingNumber());
