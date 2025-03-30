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
  [7, 8, 9],
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

  return matrix;
};

// console.log(reverseRowOfMatrix())

// Rotate a Matrix 90° Clockwise
const rotateMatrixClockWise = () => {
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

  return matrix;
};

// console.log(rotateMatrixClockWise());

// Find the Diagonal Sum
const diagonalSum = () => {
  let sum = 0;
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       if (i !== j) {
  //         continue;
  //       } else {
  //         sum += matrix[i][j];
  //       }
  //     }
  //   }

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }

  return sum;
};

// console.log(diagonalSum());

// const matrix = [
//   [1, 4, 7, 100],
//   [2, 5, 8, 11],
//   [3, 6, 9, 12],
// ];
const target = 11;

// Searching
const searchElementin2darray = () => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

// console.log(searchElementin2darray())

// Find the Row with the Maximum Sum
const maximumSumRow = () => {
  let row = null;
  let maximumsum = Number.MIN_VALUE;
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
    }
    if (rowSum > maximumsum) {
      row = i;
      maximumsum = rowSum;
    }
  }
  console.log(`Row is at ${row} has maximum sum of ${maximumsum}`);
};

// console.log(maximumSumRow())

// Spiral Order Traversal of a Matrix
const spiralOrder = () => {
  const arr = [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        arr.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        arr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return arr;
};
console.log(spiralOrder());
