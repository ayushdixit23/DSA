// const arr = [42, 7, 19, 85, 23, 3];

// const arr = [3, 7, 19, 23, 42, 85];
const arr = [3, 5, 2, 1, 4];

//Bubble Sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      console.log(`Already Sorted!`);
      break;
    }
  }
};

// bubbleSort(arr);

// Selection Sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let largestElementIndex = 0;

    const last = arr.length - i - 1;

    for (let j = 0; j <= last; j++) {
      if (arr[j] > arr[largestElementIndex]) {
        largestElementIndex = j;
      }
    }

    const temp = arr[last];
    arr[last] = arr[largestElementIndex];
    arr[largestElementIndex] = temp;
  }
};

// selectionSort(arr);

// Insertion Sort
const insertionSort = (arr) => {
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

// insertionSort(arr);

const cyclicSort = () => {
  let i = 0;
  while (i < arr.length) {
    let correctIndex = arr[i] - 1; // Correct position of arr[i]
    if (arr[i] !== arr[correctIndex]) {
      // Swap arr[i] with arr[correctIndex]
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
};

cyclicSort();
// console.log(arr);
