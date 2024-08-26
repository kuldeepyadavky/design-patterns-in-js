// Import the logMessage function from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * The Revealing Module Pattern
 * 
 * Description:
 * The Revealing Module Pattern is used to encapsulate private details of a module while exposing only 
 * the desired public methods and properties. It helps in creating a clean and organized public interface 
 * while keeping internal details private.
 *
 * Key Concepts:
 * - Encapsulation: Keeps internal details private and exposes only what is necessary.
 * - Revealing: Exposes public methods and properties through an object literal.
 * 
 * Real-life Example:
 * Think of a module like a car. The car has private components like the engine and transmission that 
 * the driver does not interact with directly. The public interface of the car (the steering wheel, 
 * pedals, and dashboard controls) is what the driver uses to operate the car.
 */

const myModule = (() => {
  // Private variable (not accessible outside this function)
  let privateVar = 'I am private';

  // Private method (not accessible outside this function)
  function privateMethod() {
    logMessage(privateVar); // Logs the private variable
  }

  // Public method (exposed to the outside)
  function publicMethod() {
    privateMethod(); // Calls the private method
  }

  // Return an object exposing only the public methods
  // This object becomes the public interface of the module
  return {
    publicMethod: publicMethod
  };
})();

// Log the public interface of the module to show its structure
logMessage(myModule); // Logs: { publicMethod: [Function: publicMethod] }

// Usage example
myModule.publicMethod(); // Logs: I am private

/**
 * Explanation:
 * 1. **IIFE Definition**: 
 *    - The module is defined using an Immediately Invoked Function Expression (IIFE) to create a 
 *      private scope for variables and methods.
 * 2. **Private Variable**:
 *    - `privateVar` is a variable that is private to the module and cannot be accessed from outside.
 * 3. **Private Method**:
 *    - `privateMethod` is a method that operates on the private variable and is not exposed outside.
 * 4. **Public Method**:
 *    - `publicMethod` is a method that is accessible outside the module and calls the private method.
 * 5. **Return Statement**:
 *    - An object literal containing the public methods is returned, making them accessible from outside.
 * 6. **Logging and Usage**:
 *    - The `logMessage` function is used to log the structure of the module, showing the exposed public methods.
 *    - Calling `myModule.publicMethod()` demonstrates its functionality, which internally uses the private method.
 */
