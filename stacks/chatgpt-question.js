import { Stack } from "./stack.js";

const isValid = function () {
  if (s.length === 1) {
    return false;
  }
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "(" || element === "[" || element === "{") {
      stack.push(element);
    }
    if (element === "}" || element === "]" || element === ")") {
      if (stack.isEmpty()) {
        return false;
      } else {
        const peek = stack.peek();
        if (
          (element === ")" && peek === "(") ||
          (element === "]" && peek === "[") ||
          (element === "}" && peek === "{")
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.isEmpty() ? true : false;
};

// const s = "((";

// console.log(isValid())
const nums = [4, 8, 5, 2, 25];
const arr = [4, 5, 2, 10, 8];

// Next Greater Element
function nextGreater() {
  const result = [];
  const stack = new Stack();
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];

    while (!stack.isEmpty() && element >= stack.peek()) {
      stack.pop();
    }

    if (stack.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }

    stack.push(element);
  }

  return result.reverse();
}

// console.log(nextGreater());

// Previous Greater Element
function previousGreater() {
  const result = [];
  const stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    while (!stack.isEmpty() && element >= stack.peek()) {
      stack.pop();
    }

    if (stack.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }
    stack.push(element);
  }

  return result;
}
// console.log(previousGreater());

// Next Smaller Element
function nextSmaller() {
  const result = [];
  const stack = new Stack();
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    while (!stack.isEmpty() && stack.peek() >= element) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }
    stack.push(element);
  }
  return result.reverse();
}

// console.log(nextSmaller());

// Previous Smaller Element
function previousSmaller() {
  const result = [];
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    while (!stack.isEmpty() && element <= stack.peek()) {
      stack.pop();
    }

    if (stack.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stack.peek());
    }
    stack.push(element);
  }
  return result;
}

// console.log(previousSmaller());
