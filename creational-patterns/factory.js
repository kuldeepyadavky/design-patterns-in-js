// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Factory Method
 * **Category**: Creational Pattern
 * **Description**:
 * The Factory Method pattern provides an interface for creating objects in a superclass but allows subclasses 
 * to alter the type of objects that will be created. This pattern promotes loose coupling and allows for more 
 * flexible and scalable code.
 * 
 * **Key Concepts**:
 * - **Object Creation**: Define an interface for creating objects but let subclasses decide which class to instantiate.
 * - **Decoupling**: Separate the instantiation process from the actual use of the objects.
 * 
 * **Real-Life Example**:
 * Consider a vehicle factory that produces different types of vehicles like cars and bikes. The factory provides 
 * a method to create a vehicle but lets specific subclasses define the exact type of vehicle to produce.
 */

// Base class
class Animal {
  speak() {
    throw new Error('Method "speak" should be implemented');
  }
}

// Subclasses of Animal
class Lion extends Animal {
  speak() {
    logMessage('Roar');
  }
}

class Cat extends Animal {
  speak() {
    logMessage('Meow');
  }
}

// Factory class
class AnimalFactory {
  createAnimal(type) {
    switch (type) {
      case 'lion': return new Lion();
      case 'cat': return new Cat();
      default: throw new Error('Unknown animal type');
    }
  }
}

// Usage of the Factory Method pattern
const factory = new AnimalFactory();
const lion = factory.createAnimal('lion');
const cat = factory.createAnimal('cat');

lion.speak(); // Logs: Roar
cat.speak();  // Logs: Meow
