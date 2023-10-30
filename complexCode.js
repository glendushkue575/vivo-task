/* 
   filename: complexCode.js
   description: Complex JavaScript code demonstrating various advanced concepts and techniques.
*/

// Class representing a complex number
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    this.real += complex.real;
    this.imaginary += complex.imaginary;
    return this;
  }

  subtract(complex) {
    this.real -= complex.real;
    this.imaginary -= complex.imaginary;
    return this;
  }

  multiply(complex) {
    const realPart = this.real * complex.real - this.imaginary * complex.imaginary;
    const imaginaryPart = this.real * complex.imaginary + this.imaginary * complex.real;
    this.real = realPart;
    this.imaginary = imaginaryPart;
    return this;
  }

  divide(complex) {
    const denominator = complex.real * complex.real + complex.imaginary * complex.imaginary;
    const realPart = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
    const imaginaryPart = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
    this.real = realPart;
    this.imaginary = imaginaryPart;
    return this;
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Function to generate the nth Fibonacci number
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[n];
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage of discussed concepts

const num1 = new Complex(3, 4);
const num2 = new Complex(2, -1);

num1.multiply(num2).add(num2).divide(num2);
console.log("Result of complex number operations:", num1.toString());

console.log("10th Fibonacci number:", fibonacci(10));

console.log("Is 17 prime?", isPrime(17));

console.log("Factorial of 5:", factorial(5));

// ... More code here as per requirements, possibly extending beyond 200 lines.