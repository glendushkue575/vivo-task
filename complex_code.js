/* complex_code.js */

// This code performs various operations on a shopping cart

// Define a class for products
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `${this.name}: $${this.price}`;
  }
}

// Define a class for shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  toString() {
    let output = "Shopping Cart:\n";
    this.items.forEach((item) => {
      output += `- ${item.toString()}\n`;
    });
    output += `Total Price: $${this.getTotalPrice()}`;
    return output;
  }
}

// Create some products
const product1 = new Product("iPhone 12", 999);
const product2 = new Product("Samsung Galaxy S21", 899);
const product3 = new Product("Google Pixel 5", 699);

// Create a shopping cart
const cart = new ShoppingCart();

// Add products to the cart
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

console.log(cart.toString());

// Remove a product from the cart
cart.removeItem(product2);

console.log(cart.toString());
