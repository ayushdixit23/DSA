
const calculate = function (s) {
  const numberStack = new Stack();
  const operatorStack = new Stack();

  const getPrecedence = (op) => {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  };

  const applyOp = (op, b, a) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return Math.floor(a / b);
  };

  let i = 0;
  while (i < s.length) {
    const ch = s[i];

    if (ch === " ") {
      i++;
      continue;
    }

    if (!isNaN(ch)) {
      let num = 0;
      while (i < s.length && !isNaN(s[i]) && s[i] !== " ") {
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
