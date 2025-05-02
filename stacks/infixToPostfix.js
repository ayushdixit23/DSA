import { Stack } from "./stack.js";

// Infix Evaluation
const s = "9-5+3*4/6";
// const s = "42";
function infixEvaluation() {
  const numberStack = new Stack();
  const operator = new Stack();

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === " ") continue;

    if (!isNaN(element)) {
      numberStack.push(Number(element));
      continue;
    } else if (operator.isEmpty()) {
      operator.push(element);
    } else {
      if (element === "+" || element === "-") {
        const peekElement = operator.peek();
        const value1 = numberStack.pop();
        const value2 = numberStack.pop();
        if (peekElement === "+") {
          numberStack.push(value2 + value1);
        } else if (peekElement === "-") {
          numberStack.push(value2 - value1);
        } else if (peekElement === "*") {
          numberStack.push(value2 * value1);
        } else {
          numberStack.push(Math.floor(value2 / value1));
        }
        operator.pop();
        operator.push(element);
      } else {
        const peekElement = operator.peek();
        if (peekElement === "*" || peekElement === "/") {
          const value1 = numberStack.pop();
          const value2 = numberStack.pop();

          if (peekElement === "*") {
            numberStack.push(value2 * value1);
          } else if (peekElement === "/") {
            numberStack.push(Math.floor(value2 / value1));
          }
          operator.pop();
        }
        operator.push(element);
      }
    }
  }

  while (numberStack.stack.length > 1) {
    const oper = operator.pop();

    const value1 = numberStack.pop();
    const value2 = numberStack.pop();

    if (oper === "+") {
      numberStack.push(value2 + value1);
    } else if (oper === "-") {
      numberStack.push(value2 - value1);
    } else if (oper === "*") {
      numberStack.push(value2 * value1);
    } else {
      numberStack.push(Math.floor(value2 / value1));
    }
  }

  return numberStack.peek();
}
// console.log(infixEvaluation());

// Infix ➔ Postfix Conversion
// WithOut Parenthesis
function infixToPostfix() {
  const operatorStack = new Stack();
  const characterStack = new Stack();

  const getPrecedence = (op) => {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  };

  const checkIfCharIsOperator = (character) => {
    if (
      character === "+" ||
      character === "-" ||
      character === "*" ||
      character === "/"
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    if (!checkIfCharIsOperator(element)) {
      characterStack.push(element);
      continue;
    }

    while (
      !operatorStack.isEmpty() &&
      getPrecedence(operatorStack.peek()) >= getPrecedence(element)
    ) {
      const value1 = characterStack.pop();
      const value2 = characterStack.pop();
      const oper = operatorStack.pop();
      const newString = value2 + value1 + oper;

      characterStack.push(newString);
    }

    operatorStack.push(element);
  }

  while (!operatorStack.isEmpty()) {
    const value1 = characterStack.pop();
    const value2 = characterStack.pop();
    const oper = operatorStack.pop();
    const newString = value2 + value1 + oper;

    characterStack.push(newString);
  }

  return characterStack.peek();
}
// const expression = "A+B*C-D";
// // const expression = "A+B*C";
// console.log(infixToPostfix());

// With Parenthesis
function infixToPostfixWithParenthesis() {
  const operatorStack = new Stack();
  const characterStack = new Stack();

  const getPrecedence = (op) => {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  };

  const checkIfCharIsOperator = (character) => {
    if (
      character === "+" ||
      character === "-" ||
      character === "*" ||
      character === "/"
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    if (element === "(") {
      operatorStack.push(element);
      continue;
    }
    if (element === ")") {
      while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
        const value1 = characterStack.pop();
        const value2 = characterStack.pop();
        const oper = operatorStack.pop();

        const newString = value2 + value1 + oper;

        characterStack.push(newString);
      }
      operatorStack.pop();
      continue;
    }

    if (!checkIfCharIsOperator(element)) {
      characterStack.push(element);
      continue;
    }

    while (
      !operatorStack.isEmpty() &&
      getPrecedence(operatorStack.peek()) >= getPrecedence(element)
    ) {
      const value1 = characterStack.pop();
      const value2 = characterStack.pop();
      const oper = operatorStack.pop();
      const newString = value2 + value1 + oper;

      characterStack.push(newString);
    }
    operatorStack.push(element);
  }

  while (!operatorStack.isEmpty()) {
    const value1 = characterStack.pop();
    const value2 = characterStack.pop();
    const oper = operatorStack.pop();

    const newString = value2 + value1 + oper;

    characterStack.push(newString);
  }

  return characterStack.peek();
}

// const expression = "(A+B)*C";         // ➜ AB+C*
// const expression = "A*(B+C)";         // ➜ ABC+*
// const expression = "A*(B+C*(D-E))";   // ➜ ABCDE-*+*
// const expression = "((A+B)*C)-D";     // ➜ AB+C*D-
// const expression = "A+B*(C-D)/E";     // ➜ A B C D - * E / +

console.log(infixToPostfixWithParenthesis());
