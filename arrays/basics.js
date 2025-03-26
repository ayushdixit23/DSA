export const iterateInArraysAndConsoleLogs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], `is at ${i} index`);
  }
};

// const arr = [1, 2, 3, 4];
// iterateInArraysAndConsoleLogs(arr);

// common array methods

// const fruits = ["Banana", "Orange", "Apple"];
// let type = typeof fruits;

// type returns object.
// Array.isArray(fruits) return true

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const stringifyFruits = fruits.toString(); // array converted to string
// console.log(stringifyFruits,"stringifyFruits") //string

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const joinFruits =  fruits.join(" * "); //array converted to string with joining  *
// console.log(joinFruits,"joinFruits") // "Banana * Orange * Apple * Mango"

// shift() => removes first elements of array
// unshift() => adds elements at first place of array

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren,"myChildren")

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr,"newArr")

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr,"newArr")

// splice() to remove elements without leaving "holes" in the array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1); // removes banana

// splice() method can be used to add new items to an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// Output => ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

// The slice() method slices out a piece of an array into a new array:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// Output => creates a new array with banana removed from it

// array searching methods

// indexOf() method searches an array for an element value and returns its position
// const three = arr.indexOf(3)
// console.log(three,"three") // 2
// const three = arr.indexOf(5)
// console.log(three,"three") //-1

// const fruits = ["Apple", "Orange", "Apple", "Mango","Apple"];
// let position = fruits.indexOf("Apple", 3);
// console.log(position,"pos") // 4

// Array.indexOf() returns the position of the last occurrence of the specified element.

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple")
// console.log(position,"pos") // 2

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log( fruits.includes("Mango"));//true

// find() method returns the value of the first array element that passes a test function.

// const myNumbers = [2, 4, 5, 3, 8, 10];

// const findTest = myNumbers.find((value, _, array) => value % 2 === 0);

// console.log(findTest, "w"); //2

// findIndex() method returns the index of the first array element that passes a test function.
//  const myNumbers = [2, 4, 5, 3, 8, 10];

// const findTest = myNumbers.findIndex((value, _, array) => value % 2 === 0);

// console.log(findTest, "w"); //0

// findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);
// console.log(high, "high"); //42

// The findLastIndex() method finds the index of the last element that satisfies a condition.
// const temp = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp.findLastIndex(x => x > 40);
// console.log(pos, "pos"); //4

// Sorting Methods

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits, "fruits"); // [Apple,Banana,Mango,Orange]

// const arr = [5, 2, 9, 1, 5, 6];

// arr.sort((a, b) => a - b); // Ascending
// console.log(arr); // [1, 2, 5, 5, 6, 9]

// a-b => +ve means swap meaning  a is swaped by b -> a <=> b
// a-b => -ve means no swap

// arr.sort((a, b) => b - a); // Descending
// console.log(arr); // [9, 6, 5, 5, 2, 1]

// toSorted() method as a safe way to sort an array without altering the original array.

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted,"sorted") ["Apr","Feb","Jan","Mar"]

// iteration methods

// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// const numbers = [45, 4, 9, 16, 25];
// const numberGreaterThan18 = numbers.filter((value)=> {
//     return value > 18
// })

// console.log(numberGreaterThan18,"numberGreaterThan18")

// The reduce() method runs a function on each array element to produce (reduce it to) a single value

// const numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, value) => {
//   return acc + value;
// });

// console.log(sum, "sum");

// The every() method checks if all array values pass a test.
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// output => false


// The some() method checks if some array values pass a test.

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// Output => true
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(keys,"keys")
