// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Decorator
 * **Category**: Structural Pattern
 * **Description**:
 * The Decorator pattern allows you to add new functionality to objects dynamically, without altering their 
 * structure or affecting other objects of the same class. This pattern provides a flexible alternative to 
 * subclassing for extending functionality.
 * 
 * **Key Concepts**:
 * - **Dynamic Behavior Addition**: Attach additional behavior to objects at runtime.
 * - **Open/Closed Principle**: Objects can be extended without modifying their existing code.
 * 
 * **Real-Life Example**:
 * Think of a coffee shop where you can add different ingredients (like milk or sugar) to your coffee order. 
 * Each ingredient adds its own cost, and you can combine these ingredients to customize your coffee.
 */

// Core Coffee class
class Coffee {
  cost() {
    return 5; // Base cost of a coffee
  }
}

// Decorator for adding milk
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee; // Coffee object being decorated
  }

  cost() {
    return this.coffee.cost() + 2; // Adds milk cost to the coffee
  }
}

// Decorator for adding sugar
class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee; // Coffee object being decorated
  }

  cost() {
    return this.coffee.cost() + 1; // Adds sugar cost to the coffee
  }
}

// Creating a coffee object and decorating it
let coffee = new Coffee();
coffee = new MilkDecorator(coffee); // Add milk
coffee = new SugarDecorator(coffee); // Add sugar

logMessage(coffee.cost()); // Logs: 8 (base cost 5 + milk 2 + sugar 1)
