const sumArray = (arr) => {
  if (arr.length == 1) {
    return arr[0];
  }

  const firstElement = arr[0];
  const recursiveArray = arr.slice(1);

  return firstElement + sumArray(recursiveArray);
};

// const arr = [1, 5, 9, 3, 2];
// console.log(sumArray(arr));

const findMaxElementForArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  const firstElement = arr[0];
  const recursiveArray = arr.slice(1);

  const maxInRest = findMaxElementForArray(recursiveArray);

  console.log(firstElement, maxInRest);

  return firstElement > maxInRest ? firstElement : maxInRest;
};

// console.log(findMaxElementForArray([3, 1, 4, 1, 5, 9, 2, 6]));

function countOccurrences(arr, num, index = 0) {
  if (index === arr.length) {
    return 0;
  }

  if (arr[index] === num) {
    return 1 + countOccurrences(arr, num, index + 1);
  } else {
    return countOccurrences(arr, num, index + 1);
  }
}

// console.log(countOccurrences([1, 2, 3, 2, 2], 2))

// for two digit
const subsetSum = (myArray, myTarget) => {
  const firstElement = myArray[0];
  const recursiveArray = myArray.slice(1);
  return checkSum(firstElement, recursiveArray, myTarget);
};

const checkSum = (firstElement, array, target) => {
  console.log(firstElement, array, target);
  if (array.length === 1) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (firstElement + array[i] === target) {
      return true;
    }
  }
  return checkSum(array[0], array.slice(1), myTarget);
};

const myArray = [3, 34, 4, 12, 5, 2];
const myTarget = 10;

//   console.log(subsetSum(myArray, myTarget));
