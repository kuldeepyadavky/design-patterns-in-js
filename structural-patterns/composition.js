// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Composition
 * **Category**: Structural Pattern
 * **Description**:
 * Composition involves combining multiple objects or behaviors to create more complex objects. Instead of using inheritance, 
 * composition allows for flexible and reusable code by combining various functional objects.
 * 
 * **Key Concepts**:
 * - **Code Reuse**: Combine multiple sources of functionality to form a new object.
 * - **Flexible Design**: Avoids rigid class hierarchies and enables more adaptable object construction.
 * 
 * **Real-Life Example**:
 * Imagine a robot that can both walk and eat. Instead of creating a complex class hierarchy, you create small objects for 
 * each behavior (walking and eating) and then compose them into the robot.
 */

// Define individual behavior objects
const canEat = {
  eat() {
    logMessage('Eating...'); // Method representing the eating behavior
  }
};

const canWalk = {
  walk() {
    logMessage('Walking...'); // Method representing the walking behavior
  }
};

// Combine behavior objects into a new object
const robot = Object.assign({}, canEat, canWalk);
// robot now has both eat and walk methods
robot.eat(); // Logs: Eating...
robot.walk(); // Logs: Walking...
