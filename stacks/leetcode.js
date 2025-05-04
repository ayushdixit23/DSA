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

// Trapping Rain Water
const trap = function () {
  const prefixLeftMax = [];
  const prefixRightMax = [];
  const n = height.length;

  prefixLeftMax[0] = height[0];
  prefixRightMax[n - 1] = height[n - 1];

  for (let i = 1, j = n - 2; i < n; i++, j--) {
    prefixLeftMax[i] = Math.max(prefixLeftMax[i - 1], height[i]);
    prefixRightMax[j] = Math.max(prefixRightMax[j + 1], height[j]);
  }
  let total = 0;

  for (let i = 0; i < n; i++) {
    const element = height[i];
    if (element < prefixLeftMax[i] && element < prefixRightMax[i]) {
      total += Math.min(prefixLeftMax[i], prefixRightMax[i]) - height[i];
    }
  }

  return total;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap());
