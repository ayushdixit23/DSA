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
stack.removeAtIndex(2)
stack.push(20);


// stack.push(3);
// stack.push(1);
// stack.push(4);
// stack.push(2);

logFunctionOutput(() => stack.peek());
logFunctionOutput(() => stack.size());
logFunctionOutput(() => stack.isEmpty());
stack.display()

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

// Next Greater Element
const nextGreaterElement = (arr) => {
    const result = new Array(arr.length).fill(-1); 
  
    for (let i = arr.length - 1; i >= 0; i--) {
      while (!stack.isEmpty() && stack.peek() <= arr[i]) {
        stack.pop();
      }
  
      if (!stack.isEmpty()) {
        result[i] = stack.peek();
      }
  
      stack.push(arr[i]);
    }
  
    return result;
  };
  
//   console.log(nextGreaterElement([4, 5, 2, 10, 8])); 
//   console.log(nextGreaterElement([1, 3, 2, 4]));
  
  