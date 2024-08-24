// Import the logMessage function from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Inheritance
 * **Category**: Creational Pattern (Object Creation)
 * **Description**:
 * Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). 
 * This pattern promotes code reuse by enabling a new class to extend and utilize the functionality of an existing class.
 * 
 * **Key Concepts**:
 * - **Code Reuse**: By inheriting from a superclass, a subclass can reuse the methods and properties of the superclass.
 * - **Overriding**: Subclasses can provide specific implementations of methods defined in the superclass.
 * 
 * **Real-Life Example**:
 * Consider a `Dog` class inheriting from an `Animal` class. While all animals have basic characteristics (like making a noise), 
 * specific animals like dogs have their own unique behaviors (like barking).
 */

// Base class (superclass)
class Animal {
  constructor(name) {
    this.name = name; // Property specific to each instance of Animal
  }

  speak() {
    logMessage(`${this.name} makes a noise`); // Method inherited by subclasses
  }
}

// Derived class (subclass) extending the Animal class
class Dog extends Animal {
  speak() {
    logMessage(`${this.name} barks`); // Overriding the base class method to provide specific behavior
  }
}

// Creating an instance of the Dog class
const dog = new Dog('Rex');
dog.speak(); // Logs: Rex barks
