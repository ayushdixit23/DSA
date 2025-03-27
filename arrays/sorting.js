const arr = [5, 4, 3, 2, 1];
// const arr = [3, 5, 2, 1, 4];
// const arr= [1,2,3,4,5]

// Bubble Sort
const bubbleSort = () => {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
};

// bubbleSort();
// console.log(arr);

// Selection Sort
const selectionSort = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    let largestIndex = 0;
    let last = arr.length - i - 1;
    for (let j = 0; j <= last; j++) {
      if (arr[j] > arr[largestIndex]) {
        largestIndex = j;
      }
    }
    const temp = arr[largestIndex];
    arr[largestIndex] = arr[last];
    arr[last] = temp;
  }
};

// selectionSort();
// console.log(arr);

// Insertion Sort
const insertionSort = () => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
};

// insertionSort();
// console.log(arr);

// Cyclic Sort
const cyclicSort = () => {
  for (let i = 0; i < arr.length; i++) {
    const swappedValueIndex = arr[i] - 1;
    const temp = arr[i];
    arr[i] = arr[swappedValueIndex];
    arr[swappedValueIndex] = temp;
  }
};

// cyclicSort();
// console.log(arr);

const myArr = [4, 2, 2, 5, 3, 3, 1];

// Counting Sort
const countingSort = () => {
  const object = [1, 2, 3, 4, 5].reduce((acc, num) => {
    acc[num] = 0;
    return acc;
  }, {});

  for (let i = 0; i < myArr.length; i++) {
    object[myArr[i]]++;
  }

  let index = 0;
  for (let num in object) {
    const frequency = object[num];

    for (let i = 0; i < frequency; i++) {
      myArr[index++] = Number(num); 
    }
  }
};

// countingSort();
// console.log(myArr);

