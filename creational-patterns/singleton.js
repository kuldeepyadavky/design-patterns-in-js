// Import the logMessage 3 from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Singleton
 * **Category**: Creational Pattern
 * **Description**:
 * The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
 * This is useful when exactly one instance of a class is needed to coordinate actions across the system.
 * 
 * **Key Concepts**:
 * - **Single Instance**: Guarantee that a class has only one instance.
 * - **Global Access**: Provide a global point of access to the instance.
 * 
 * **Real-Life Example**:
 * Consider a logging system where you want a single instance to manage all logging operations across your application. 
 * This prevents the overhead of creating multiple instances and ensures consistent logging behavior.
 */

// Singleton class
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // Return the existing instance if already created
    }
    Singleton.instance = this; // Save the new instance
  }

  someMethod() {
    logMessage('Method called');
  }
}

// Usage of the Singleton pattern
const instance1 = new Singleton();
const instance2 = new Singleton();

logMessage(instance1 === instance2); // Logs: true (both references point to the same instance)
