import { Stack } from "./stack.js";

// Infix ➔ Postfix Conversion
// WithOut Parenthesis
// const expression = "A + B * C - D";
// const expression = "A+B*C";
function infixToPrefix() {
  const operatorStack = new Stack();
  const characterStack = new Stack();

  const getPrecedence = (operator) => {
    if (operator === "+" || operator === "-") return 1;
    if (operator === "*" || operator === "/") return 2;
    return 0;
  };

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

  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    if (element === " ") continue;
    if (!isElementOperator(element)) {
      characterStack.push(element);
      continue;
    } else {
      while (
        !operatorStack.isEmpty() &&
        getPrecedence(operatorStack.peek()) >= getPrecedence(element)
      ) {
        const value1 = characterStack.pop();
        const value2 = characterStack.pop();
        const operator = operatorStack.pop();
        characterStack.push(operator + value2 + value1);
      }
      operatorStack.push(element);
    }
  }

  while (!operatorStack.isEmpty()) {
    const value1 = characterStack.pop();
    const value2 = characterStack.pop();
    const operator = operatorStack.pop();
    characterStack.push(operator + value2 + value1);
  }

  return characterStack.peek();
}
// console.log(infixToPrefix());

function infixToPrefixWithParenthesis() {
  const operatorStack = new Stack();
  const characterStack = new Stack();

  const getPrecedence = (operator) => {
    if (operator === "+" || operator === "-") return 1;
    if (operator === "*" || operator === "/") return 2;
    return 0;
  };

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

  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    if (element === " ") continue;
    if (element === "(") {
      operatorStack.push(element);
      continue;
    }
    if (element === ")") {
      while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
        const value1 = characterStack.pop();
        const value2 = characterStack.pop();
        const operator = operatorStack.pop();
        characterStack.push(operator + value2 + value1);
      }
      operatorStack.pop();
      continue;
    }
    if (!isElementOperator(element)) {
      characterStack.push(element);
      continue;
    } else {
      while (
        !operatorStack.isEmpty() &&
        getPrecedence(operatorStack.peek()) >= getPrecedence(element)
      ) {
        const value1 = characterStack.pop();
        const value2 = characterStack.pop();
        const operator = operatorStack.pop();
        characterStack.push(operator + value2 + value1);
      }
      operatorStack.push(element);
    }
  }

  while (!operatorStack.isEmpty()) {
    const value1 = characterStack.pop();
    const value2 = characterStack.pop();
    const operator = operatorStack.pop();
    characterStack.push(operator + value2 + value1);
  }

  return characterStack.peek();
}

// const expression = "(A + B) * (C - D)";
const expression = "A + (B - C) * D";
// const expression = "A*(B+C)";
console.log(infixToPrefixWithParenthesis());
