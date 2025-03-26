const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`What's your name? `, name => {
//     console.log(`Hi ${name}!`);
//     rl.close();
//   });

let onedArray = [];

// // inputing 1D array
rl.question("Enter the number of elements: ", (a) => {
  let count = Number(a);

  const getNumbers = (i) => {
    if (i < count) {
      rl.question(`Enter Your ${i + 1} number: `, (num) => {
        if (!num) {
          getNumbers(i);
        } else {
          onedArray.push(Number(num));
          getNumbers(i + 1);
        }
      });
    } else {
      console.log("Your array:", onedArray);
      rl.close();
    }
  };

  getNumbers(0);
});

let twodArray = [];

// inputing 2D array
rl.question("Enter the number of rows: ", (rows) => {
    rows = Number(rows);
  
    rl.question("Enter the number of columns: ", (cols) => {
      cols = Number(cols);
  
      let numbers = [];
      let totalElements = rows * cols;
  
      const getNumber = (index) => {
        if (index < totalElements) {
          rl.question(`Enter number ${index + 1}: `, (num) => {
            numbers.push(Number(num));
            getNumber(index + 1);
          });
        } else {
          for (let i = 0; i < rows; i++) {
            twodArray.push(numbers.slice(i * cols, (i + 1) * cols));
          }
  
          console.log("Your 2D Array:", twodArray);
          rl.close();
        }
      };
  
      getNumber(0);
    });
  });

