import { Stack } from "./stack.js";

// Infix Evaluation
// const s = "9-5+3*4/6";
const s = "42";
function infixEvaluation() {
  const numberStack = new Stack();
  const operator = new Stack();

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === " ") continue;

    if (!isNaN(element)) {
      let num = 0;
      while (i < s.length && !isNaN(s[i]) && s[i] !== " ") {
        num = num * 10 + Number(s[i]);
        i++;
      }
      numberStack.push(num);
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

console.log(infixEvaluation());
// Infix ➔ Postfix Conversion

// function infixToPostfix() {
// }
// const expression = "A+B*C";
// console.log(infixToPostfix());

const calculate = function (s) {
    const numberStack = new Stack();
    const operatorStack = new Stack();

    const getPrecedence = (op) => {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        return 0;
    };

    const applyOp = (op, b, a) => {
        if (op === '+') return a + b;
        if (op === '-') return a - b;
        if (op === '*') return a * b;
        if (op === '/') return Math.floor(a / b);
    };

    let i = 0;
    while (i < s.length) {
        const ch = s[i];

        if (ch === ' ') {
            i++;
            continue;
        }

        if (!isNaN(ch)) {
            let num = 0;
            while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') {
                num = num * 10 + Number(s[i]);
                i++;
            }
            numberStack.push(num);
            continue; 
        }

        while (
            !operatorStack.isEmpty() &&
            getPrecedence(operatorStack.peek()) >= getPrecedence(ch)
        ) {
            const op = operatorStack.pop();
            const b = numberStack.pop();
            const a = numberStack.pop();
            numberStack.push(applyOp(op, b, a));
        }

        operatorStack.push(ch);
        i++;
    }

    while (!operatorStack.isEmpty()) {
        const op = operatorStack.pop();
        const b = numberStack.pop();
        const a = numberStack.pop();
        numberStack.push(applyOp(op, b, a));
    }

    return numberStack.peek();
};
