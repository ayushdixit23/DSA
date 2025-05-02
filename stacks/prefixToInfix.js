import { Stack } from "./stack.js";

// Prefix ➔ Infix Conversion
const expression = "* + A B - C D";
// const expression = "AB+C*";

function prefixToInfix() {
  const stack = new Stack();
  for (let i = expression.length - 1; i >= 0; i--) {
    const element = expression[i];
    if (element === " ") {
      continue;
    }

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

      const string = value1 + element + value2;

      stack.push("(" + string + ")");
    }
  }
  return stack.peek();
}

console.log(prefixToInfix());
