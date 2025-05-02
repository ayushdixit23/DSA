import { Stack } from "./stack.js";

// Postfix ➔ Infix Conversion
const expression = "ABC*+";
// const expression = "AB+C*";

function postfixToInfix() {
  const stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];

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
    if (!isElementOperator(element)) {
      stack.push(element);
    } else {
      const value1 = stack.pop();
      const value2 = stack.pop();
      const newElement = value2 + element + value1;
      stack.push("(" + newElement + ")");
    }
  }

  return stack.peek();
}

console.log(postfixToInfix());
