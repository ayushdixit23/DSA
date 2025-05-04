import { Stack } from "./stack.js";

const calculate = function (s) {
  const numberStack = new Stack();
  const operatorStack = new Stack();

  const getPrecedence = (op) => {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  };

  const applyOp = (op, b, a) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return Math.floor(a / b);
  };

  let i = 0;
  while (i < s.length) {
    const ch = s[i];

    if (ch === " ") {
      i++;
      continue;
    }

    if (!isNaN(ch)) {
      let num = 0;
      while (i < s.length && !isNaN(s[i]) && s[i] !== " ") {
        num = num * 10 + Number(s[i]);
        i++;
      }
      numberStack.push(num);
      continue;
    }

    while (
      !operatorStack.isEmpty() &&
      getPrecedence(operatorStack.peek()) >= getPrecedence(ch)
    ) {
      const op = operatorStack.pop();
      const b = numberStack.pop();
      const a = numberStack.pop();
      numberStack.push(applyOp(op, b, a));
    }

    operatorStack.push(ch);
    i++;
  }

  while (!operatorStack.isEmpty()) {
    const op = operatorStack.pop();
    const b = numberStack.pop();
    const a = numberStack.pop();
    numberStack.push(applyOp(op, b, a));
  }

  return numberStack.peek();
};

// Trapping Rain Water
const trap = function () {
  const prefixLeftMax = [];
  const prefixRightMax = [];
  const n = height.length;

  prefixLeftMax[0] = height[0];
  prefixRightMax[n - 1] = height[n - 1];

  for (let i = 1, j = n - 2; i < n; i++, j--) {
    prefixLeftMax[i] = Math.max(prefixLeftMax[i - 1], height[i]);
    prefixRightMax[j] = Math.max(prefixRightMax[j + 1], height[j]);
  }
  let total = 0;

  for (let i = 0; i < n; i++) {
    const element = height[i];
    if (element < prefixLeftMax[i] && element < prefixRightMax[i]) {
      total += Math.min(prefixLeftMax[i], prefixRightMax[i]) - height[i];
    }
  }

  return total;
};

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trap());

// Brute Force Approach
// const largestRectangleArea = function () {
//   const n = heights.length;
//   let area = -Infinity;

//   for (let i = 0; i < n; i++) {
//     const height = heights[i];
//     let left = i;
//     let right = i;

//     while (left > 0 && heights[left - 1] >= heights[i]) {
//       left--;
//     }
//     while (right < n - 1 && heights[right + 1] >= heights[i]) {
//       right++;
//     }

//     const newArea = height * (right - left + 1);
//     area = Math.max(newArea, area);
//   }

//   return area;
// };

// Optimized Approach

const nextSmallerIndex = (heights, n) => {
  const result = [];
  const stack = new Stack();

  for (let i = n - 1; i >= 0; i--) {
    const height = heights[i];

    while (!stack.isEmpty() && heights[stack.peek()] >= height) {
      stack.pop();
    }

    if (stack.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }
    stack.push(i);
  }
  return result.reverse();
};

const previouSmallerIndex = (heights, n) => {
  const result = [];
  const stack = new Stack();

  for (let i = 0; i < n; i++) {
    const height = heights[i];

    while (!stack.isEmpty() && height <= heights[stack.peek()]) {
      stack.pop();
    }

    if (stack.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }
    stack.push(i);
  }
  return result;
};

const largestRectangleArea = function () {
  let maxArea = -Infinity;
  const n = heights.length;

  const nextSmallerArray = nextSmallerIndex(heights, n);
  const previouSmallerArray = previouSmallerIndex(heights, n);

  for (let i = 0; i < n; i++) {
    const right = nextSmallerArray[i] === -1 ? n : nextSmallerArray[i];
    const left = previouSmallerArray[i];

    const height = heights[i];
    const area = height * (right - left - 1);
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
};

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea());
