// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Delegation
 * **Category**: Behavioral Pattern
 * **Description**:
 * Delegation involves an object passing some of its behavior to another object. This allows for shared behavior between 
 * objects without requiring them to be in a strict inheritance hierarchy.
 * 
 * **Key Concepts**:
 * - **Behavior Delegation**: One object handles certain tasks while another object focuses on different responsibilities.
 * - **Code Reuse**: Allows shared functionality without tight coupling through inheritance.
 * 
 * **Real-Life Example**:
 * In an office setting, a manager might delegate specific tasks (like tracking projects) to an assistant. The manager provides 
 * the details, but the assistant handles the execution and reporting.
 */

// Base object defining common behavior
const Task = {
  setID: function(ID) {
    this.id = ID; // Sets the ID for the task
  },
  outputID: function() {
    logMessage(this.id); // Outputs the ID of the task
  }
};

// Create a new object that delegates to the Task object
const XYZ = Object.create(Task); // XYZ inherits methods from Task

logMessage(XYZ);

// Add specific methods to the XYZ object
XYZ.prepareTask = function(ID, label) {
  this.setID(ID); // Delegate ID setting to Task
  this.label = label; // Additional property specific to XYZ
};

XYZ.outputTaskDetails = function() {
  this.outputID(); // Delegate ID output to Task
  logMessage(this.label); // Output the label
};

// Using the XYZ object
XYZ.prepareTask(1, "Task 1");
XYZ.outputTaskDetails(); // Logs: 1 and Task 1
