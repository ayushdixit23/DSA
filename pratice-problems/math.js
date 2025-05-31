const logger = (fn) => {
  console.log(fn());
};

const numberIsEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// logger(()=>numberIsEvenOrOdd(5))
// logger(()=>numberIsEvenOrOdd(4))

const reverseNumber = (number) => {
    const isNegative = number < 0
   number = isNegative ? Math.abs(number) : number
    let newNumber = 0
    while(number!==0){
        const mod = number % 10
        newNumber = newNumber * 10 + mod
        number = Math.floor(number / 10)
    }

    return isNegative ? -newNumber : newNumber
};

// logger(() => reverseNumber(235));
// logger(() => reverseNumber(123));
// logger(() => reverseNumber(-123));
// logger(() => reverseNumber(12653));
