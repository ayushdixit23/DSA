import { Stack } from "./stack.js";

// Prefix ➔ Infix Conversion
const expression = "AB+C*";
// const expression = "ABC*+";

function prefixToInfix() {
  const isElementOperator = (element) => {
    if (
      element === "+" ||
      element === "-" ||
      element === "*" ||
      element === "/"
    ) {
      return true;
    }
    return false;
  };

  const stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    if (element === " ") {
      continue;
    }
    if (!isElementOperator(element)) {
      stack.push(element);
    } else {
      const value1 = stack.pop();
      const value2 = stack.pop();
      stack.push(element + value2 + value1);
    }
  }
  return stack.peek();
}

console.log(prefixToInfix());
