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
        }else{
            return false
        }
      }
    }
  }
  return stack.isEmpty() ? true : false
};

// const s = "((";

// console.log(isValid())

