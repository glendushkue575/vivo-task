/* 
Filename: ComplexCodeExample.js
Content: Complex code example showcasing various programming concepts.
*/

// Object constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an instance of Person
const john = new Person("John", 25);

// Arrays and Array methods
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Promises and async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Event listeners and DOM manipulation
const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  button.textContent = "Clicked";
});

// Higher-order functions and closures
function outerFunc() {
  const outerVar = "I'm outside!";

  return function innerFunc() {
    console.log(outerVar);
  };
}

const inner = outerFunc();
inner();

// Classes and inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Max");
dog.speak();

// Modules
// In another file named "utils.js"
// export function add(a, b) {
//   return a + b;
// }

// In this file
// import { add } from "./utils.js";
// console.log(add(2, 3));

// Asynchronous programming with AJAX
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

makeRequest("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response))
  .catch((error) => console.log("Error:", error));

// Complex algorithm
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// ... More complex code continues here ...