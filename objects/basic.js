// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// console.log(person.lastName)

// const person = {};

// Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Create an Object
// const person = new Object();

// Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// Iteration in Objects
// for (let x in person) {
//   console.log(x, person[x]);
// }

// Object.values() creates an array from the property values:
// const myArray = Object.values(person);
// console.log(myArray,"myArray") // [ 'John', 30, 'New York' ]

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// const objectArrayFruits = Object.entries(fruits); // [ [ 'Bananas', 300 ], [ 'Oranges', 200 ], [ 'Apples', 500 ] ]

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + " ";
// }

// console.log(text) // Bananas: 300 Oranges: 200 Apples: 500

// The Object.assign() method copies properties from one or more source objects to a target object.

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// console.log(person1, "person1"); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

// const person2 = Object.assign(person1, {
//   firstName: "Anne",
//   lastName: "Smith",
// });
// console.log(person1, "person1"); // { firstName: 'Anne', lastName: 'Smith', age: 50, eyeColor: 'blue' } person2

// The Object.create() creates an object from an existing object.
// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// Create new Object
// const man = Object.create(person);
// man.firstName = "Peter";

// console.log(man,"man") // Output =>  { firstName: 'Peter' }

// ✅ Only firstName is directly present in man.
// ❌ lastName is not directly inside man, but it is accessible via prototype.

// Understanding Object.create() Behavior
// Object.create(person) creates an empty object (man) with person as its prototype.

// man.firstName = "Peter" creates a new property directly in man, which shadows firstName from person, but lastName is still in the prototype.

// console.log(man.lastName); // "Doe"

// console.log(man.hasOwnProperty("firstName")); // true
// console.log(man.hasOwnProperty("lastName")); // false

// const man = { ...person };
// man.firstName = "Peter";
// console.log(man); // { firstName: 'Peter', lastName: 'Doe' }

// The Object.defineProperties() method adds or changes object properties.

// The Object.defineProperties() method lets you change property metadata.

// The Object.defineProperties() method lets you add getters and setters.

// Create an Object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// Add Properties
// Object.defineProperties(person, {
//   language: { value: "en" },
//   year: { value: "Hello" },
// });

// enumerable: false
// console.log(person, "person"); // { firstName: 'John', lastName: 'Doe' }

// Object.defineProperties(person, {
//   language: { value: "en", enumerable: true },
//   year: { value: "Hello", enumerable: true },
// });

// console.log(person, "person"); // { firstName: 'John', lastName: 'Doe', language: 'en', year: 'Hello' }

// The Object.defineProperty() method adds or changes an object property.

// The Object.defineProperty() method lets you change property metadata.

// The Object.defineProperty() method lets you add getters and setters.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "EN",
// };

// // Object.defineProperty(person, "year", { value: "2008",enumerable:false });
// console.log(person); // { firstName: 'John', lastName: 'Doe', language: 'EN' }
// Object.defineProperty(person, "year", { value: "2008", enumerable: true });
// console.log(person); // { firstName: 'John', lastName: 'Doe', language: 'EN', year: '2008' }

// The Object.freeze() method prevents any changes to an object.

// The Object.freeze() method will fail silently in non-strict mode.

// The Object.freeze() method will throw a TypeError in strict mode.

// Frozen objects are read-only. No modification, addition or deletion of properties are allowed.

// The Object.isFrozen() method can be used to check if an object is frozen.

// "use strict";
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Freeze Object
// Object.freeze(person);

// // This will throw an error
// person.age = 51;

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.freeze(fruits);

// // This will trow an error:
// fruits.push("Kiwi");

// The fromEntries() method creates an object from a list of key/value pairs.

// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500],
// ];

// const myObj = Object.fromEntries(fruits);

// console.log(myObj, "myObj"); // { apples: 300, pears: 900, bananas: 500 }

// The Object.getOwnPropertyDescriptor() method returns the property descriptors of an object.

// The Object.getOwnPropertyDescriptor() method does not change the original object.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Get Properties
// let descriptor = Object.getOwnPropertyDescriptor(person,"age");

// console.log(descriptor, "descriptor"); // { value: 50, writable: true, enumerable: true, configurable: true }

// The Object.getOwnPropertyDescriptors() method returns the property descriptors of an object.

// The Object.getOwnPropertyDescriptors() method does not change the original object.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Get Properties
// let descriptors = Object.getOwnPropertyDescriptors(person);

// console.log(descriptors, "descriptors");
// {
//     firstName: {
//       value: 'John',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     lastName: {
//       value: 'Doe',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 50, writable: true, enumerable: true, configurable: true },
//     eyeColor: {
//       value: 'blue',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

//   // Get Properties
//   let props = Object.getOwnPropertyNames(person);

//   console.log(props)  // [ 'firstName', 'lastName', 'age', 'eyeColor' ]

// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// // Callback function to Group Elements
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // Group by Quantity
// const result = Object.groupBy(fruits, myCallback);

// console.log(result, "res");
//    {
//     ok: [
//       { name: 'apples', quantity: 300 },
//       { name: 'bananas', quantity: 500 }
//     ],
//     low: [
//       { name: 'oranges', quantity: 200 },
//       { name: 'kiwi', quantity: 150 }
//     ]
//   }

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Get the Keys
// const keys = Object.keys(person);

// console.log(keys, "keys"); // [ 'firstName', 'lastName', 'age', 'eyeColor' ]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits);
// console.log(keys, "keys"); // [ '0', '1', '2', '3' ]

// const fruit = "Banana"
// const keys = Object.keys(fruit);
// console.log(keys, "keys"); // [ '0', '1', '2', '3', '4', '5' ]

// Object.preventExtensions() allows modifications, but prevents addition of properties.

// Object.seal() allows modifications, but prevents additions and deletions of properties.

// Object.freeze() prevents modifications, additions and deletions of properties.

// Object.isExtensible() returns true if an object is extensible.

// Object.isSealed() returns true if an object is sealed.

// Object.isFrozen() returns true if an object is frozen.

// The prototype is a global property available with all JavaScript objects.

// The prototype property allows you to add new properties and methods to objects.

// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// const someone = new employee("John Doe", "Caveman", 1970);

// console.log(fred.name, fred.salary, someone.name, someone.salary); // Fred Flintstone 2000 John Doe 2000


