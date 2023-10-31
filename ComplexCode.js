/* Filename: ComplexCode.js
   Description: This code demonstrates a complex simulation for a virtual city.
                It includes various components such as citizens, buildings, and events.
                The code is designed to showcase advanced JavaScript programming techniques.
*/

// Define Citizens class
class Citizen {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}. Nice to meet you.`);
  }

  work() {
    console.log(`${this.name} is working...`);
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }

  // Additional methods and properties can be added here
}

// Define Buildings class
class Building {
  constructor(address, numOfFloors, isResidential) {
    this.address = address;
    this.numOfFloors = numOfFloors;
    this.isResidential = isResidential;
  }

  generateReport() {
    console.log(`Building at ${this.address} has ${this.numOfFloors} floors.`);
  }

  // Additional methods and properties can be added here
}

// Define Events class
class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }

  displayDetails() {
    console.log(`Event: ${this.name}\nLocation: ${this.location}\nDate: ${this.date}`);
  }

  // Additional methods and properties can be added here
}

// Create instances of Citizens
const john = new Citizen("John Doe", 30, "Male");
const sarah = new Citizen("Sarah Smith", 25, "Female");
const david = new Citizen("David Johnson", 40, "Male");

// Create instances of Buildings
const building1 = new Building("123 Main Street", 10, true);
const building2 = new Building("456 Elm Avenue", 5, false);

// Create instances of Events
const event1 = new Event("Music Festival", "Central Park", "2022-06-15");
const event2 = new Event("Art Exhibition", "Gallery XYZ", "2022-07-20");

// Simulate actions and interactions
john.greet();
sarah.greet();

john.work();
sarah.work();
david.work();

john.sleep();
sarah.sleep();

building1.generateReport();
building2.generateReport();

event1.displayDetails();
event2.displayDetails();

// Output:
// Hello, my name is John Doe. Nice to meet you.
// Hello, my name is Sarah Smith. Nice to meet you.
// John Doe is working...
// Sarah Smith is working...
// David Johnson is working...
// John Doe is sleeping...
// Sarah Smith is sleeping...
// Building at 123 Main Street has 10 floors.
// Building at 456 Elm Avenue has 5 floors.
// Event: Music Festival
// Location: Central Park
// Date: 2022-06-15
// Event: Art Exhibition
// Location: Gallery XYZ
// Date: 2022-07-20