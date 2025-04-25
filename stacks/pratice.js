import { Stack } from "./stack.js";

const logFunctionOutput = (fn) => {
  console.log(fn());
};

const stack = new Stack();

// logFunctionOutput(() => stack.isEmpty());

stack.push(2);
stack.push(3);
stack.push(5);
stack.pop();
stack.push(12);
stack.removeAtIndex(2);
stack.push(20);

// stack.push(3);
// stack.push(1);
// stack.push(4);
// stack.push(2);

// logFunctionOutput(() => stack.peek());
// logFunctionOutput(() => stack.size());
// logFunctionOutput(() => stack.isEmpty());
// stack.display();

// Reverse string using stack
const reverseString = (string) => {
  if (!string) return "Provide valid string";
  if (string.length == 1) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  let reversed = "";
  while (!stack.isEmpty()) {
    const char = stack.pop();
    reversed = reversed + char;
  }

  return reversed;
};

// console.log(reverseString("hello"));

// Check for Balanced Parentheses
const balancedParentheses = (string) => {
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element === "[" || element === "{" || element === "(") {
      stack.push(element);
    }

    if (element === "]" || element === "}" || element === ")") {
      const previous = stack.peek();
      if (element === "]" && previous === "[") {
        stack.pop();
      } else if (element === "}" && previous === "{") {
        stack.pop();
      } else if (element === ")" && previous === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  const isBalancedParentheses = stack.isEmpty();
  return isBalancedParentheses;
};

// console.log(balancedParentheses("{[()]}"));
// console.log(balancedParentheses("{[(])}"));
// console.log(balancedParentheses("({[})]"))

// sorted stack of numbers
const sortedStack = () => {
  const newStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!newStack.isEmpty() && newStack.peek() > temp) {
      stack.push(newStack.pop());
    }

    newStack.push(temp);
  }

  newStack.display();
};
// stack.display()
// sortedStack();

const nextGreaterElement = () => {
  const result = [];
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    while (stack.length !== 0 && element >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
    stack.push(element);
  }
  return result.reverse();
};
// const arr = [4, 5, 2, 25, 7, 8];
// console.log(nextGreaterElement());

const dailyTemperatures = () => {
  const stack = [];
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length == 0) {
      result.push(0);
    } else {
      const index = stack[stack.length - 1] - i;
      result.push(index);
    }
    stack.push(i);
  }
  return result.reverse();
};

const arr = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures());
