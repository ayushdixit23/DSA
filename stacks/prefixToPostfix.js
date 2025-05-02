import { Stack } from "./stack.js";

// Prefix ➔ Postfix Conversion
// const expression = "*+AB-CD";
const expression = "+*AB/CD";

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
  for (let i = expression.length - 1; i >= 0; i--) {
    const element = expression[i];
    if (element === " ") continue;
    if (!isElementOperator(element)) {
      stack.push(element);
    } else {
      const left = stack.pop();
      const right = stack.pop();
      stack.push(left + right + element);
    }
  }
  return stack.peek();
}

console.log(prefixToInfix());
