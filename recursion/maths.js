// Factorial of number
const Factorial = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * Factorial(n - 1);
};
// console.log(Factorial(10));

//Fibonanchi series
const Fibonanchi = (n) => {
  if (n < 2) {
    return n;
  }
  return Fibonanchi(n - 1) + Fibonanchi(n - 2);
};
// console.log(Fibonanchi(50))

const reverseNumber = (number, digits = Math.floor(Math.log10(number))) => {
  if (number < 10) {
    return number;
  }

  return (
    (number % 10) * Math.pow(10, digits) +
    reverseNumber(Math.floor(number / 10), digits - 1)
  );
};

const powerOfFunction = (x, y) => {
  if (y == 1) {
    return x;
  }
  return x * powerOfFunction(x, y - 1);
};
// console.log(powerOfFunction(9, 10));

const gcdOfTwoNumber = (num1, num2) => {
  const remainder = num1 % num2;
  if (remainder != 0) {
    const a = num2;
    const b = remainder;
    return gcdOfTwoNumber(a, b);
  } else {
    return num2;
  }
};
// console.log(gcdOfTwoNumber(48, 18));

const isUgly = function (n) {
    if (n <= 0) {
        return false
    }
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;
    return n === 1;

};