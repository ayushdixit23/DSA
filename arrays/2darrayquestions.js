// ChatGpt based Questions

// Sum of All Elements
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const sumOf2dArray = () => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }

  console.log(sum);
};

// sumOf2dArray();

// Row-wise Sum
const rowWiseSum = () => {
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
    }

    console.log(`Row Sum for row ${i} is ${rowSum}`);
  }
};

// console.log(rowWiseSum())

const columnWise = () => {
  for (let i = 0; i < matrix.length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      colSum += matrix[j][i];
    }

    console.log(`Col Sum for Col ${i} is ${colSum}`);
  }
};

// console.log(columnWise());

// const matrix = [
//   [1, 20, 3],
//   [14, 5, 60],
//   [7, 8, 90],
// ];

// const matrix = [
//   [10, 20, 30],
//   [40, 5, 60],
//   [70, 80, 90],
// ];

// Find the Maximum Element
const findMaximumNumberIn2DArray = () => {
  let largestElement = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largestElement) {
        largestElement = matrix[i][j];
      }
    }
  }

  return largestElement;
};

// console.log(findMaximumNumberIn2DArray());

// Find the Maximum Element
const findMinimumNumberIn2DArray = () => {
  let smallestElement = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < smallestElement) {
        smallestElement = matrix[i][j];
      }
    }
  }

  return smallestElement;
};

// console.log(findMinimumNumberIn2DArray());

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrix = [
//   [1, 2, 3],
//   [2, 4, 5],
//   [3, 5, 6],
// ];

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

// Transpose of a Matrix
const transposeOfMatrix = () => {
  const cache = new Map();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == j) {
        continue;
      } else {
        if (!cache.has(i + j)) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;

          cache.set(i + j, true);
        } else {
          continue;
        }
      }
    }
  }

  return matrix;
};

// console.log(transposeOfMatrix());

// Check if a Matrix is Symmetric
const checkSymmetric = () => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == j) {
        continue;
      } else {
        if (matrix[i][j] !== matrix[j][i]) {
          return false;
        }
      }
    }
  }
  return true;
};

// console.log(checkSymmetric())

// Reverse Each Row of a Matrix
const reverseRowOfMatrix = () => {
  for (let i = 0; i < matrix.length; i++) {
    let start = 0;
    let end = matrix[i].length - 1;

    while (start <= end) {
      const temp = matrix[i][start];
      matrix[i][start] = matrix[i][end];
      matrix[i][end] = temp;
      start++;
      end--;
    }
  }

  return matrix
};


// console.log(reverseRowOfMatrix())