// Import the logMessage function from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * Mixins Pattern
 * 
 * Description:
 * Mixins allow objects to borrow (or mix in) methods from another object, enabling code reuse and 
 * composition over traditional inheritance. This pattern is useful for extending the behavior of 
 * objects in a flexible and modular way, without creating complex inheritance hierarchies.
 *
 * Key Concepts:
 * - Composition over Inheritance: Mixins enable you to add functionality to objects without using 
 *   inheritance, promoting more flexible and maintainable code.
 * - Code Reuse: Mixins provide a way to reuse code across different objects without duplicating it.
 * 
 * Real-life Example:
 * Consider a vehicle object that needs to have the ability to start and stop. Instead of creating a 
 * complex inheritance hierarchy, you can create a mixin with the start and stop methods and mix 
 * them into the vehicle object.
 */

// Define a mixin with common functionality
const mixin = {
  sayHi() {
    logMessage(`Heya!, ${this.name}`); // Logs a greeting with the person's name
  }
};

// Define an object to which we want to add functionality
const person = {
  name: 'Kuldeep'
};

// Mix in the methods from the mixin object to the person object
Object.assign(person, mixin);

// Log the structure of the person object after mixing in
logMessage(person); // Logs: { name: 'Kuldeep', sayHi: [Function: sayHi] }

// Usage example
person.sayHi(); // Logs: Heya!, Kuldeep

/**
 * Explanation:
 * 1. **Mixin Definition**:
 *    - `mixin` is an object containing methods that can be added to other objects. It provides reusable 
 *      functionality that can be mixed into other objects.
 * 2. **Object to Extend**:
 *    - `person` is an object that initially has a `name` property but lacks methods.
 * 3. **Mixing In Methods**:
 *    - `Object.assign(person, mixin)` is used to copy the methods from `mixin` into `person`, adding the 
 *      `sayHi` method to the `person` object.
 * 4. **Usage**:
 *    - After mixing in, `person` has access to the `sayHi` method from `mixin`. Calling `person.sayHi()` 
 *      logs a greeting message including the person's name.
 * 
 * Missing Elements:
 * - **Multiple Mixins**: You can mix in multiple objects by passing them as additional arguments to 
 *   `Object.assign()`. This allows combining multiple sources of functionality into a single object.
 * - **Conflict Handling**: If multiple mixins define methods with the same name, the method from the 
 *   last mixin passed to `Object.assign()` will override previous ones.
 */

// Example of mixing multiple mixins
const additionalMixin = {
  sayGoodbye() {
    logMessage(`Goodbye, ${this.name}`);
  }
};

// Extend the person object with additional functionality
Object.assign(person, additionalMixin);

// Log the structure of the person object after mixing in
logMessage(person); // Logs: { name: 'Kuldeep', sayHi: [Function: sayHi], sayGoodbye: [Function: sayGoodbye] }

// Usage of additional method
person.sayGoodbye(); // Logs: Goodbye, Kuldeep


// Mixins are a specific technique within composition to extend the behavior of objects by adding methods from mixin objects.
