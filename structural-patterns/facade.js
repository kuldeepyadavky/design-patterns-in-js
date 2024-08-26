// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Facade
 * **Category**: Structural Pattern
 * **Description**:
 * The Facade pattern provides a simplified interface to a complex subsystem. It hides the complexity of the 
 * subsystem and provides a more user-friendly interface for interacting with it. This pattern is used to make 
 * a system easier to use by encapsulating a set of complex operations into a single interface.
 * 
 * **Key Concepts**:
 * - **Simplified Interface**: Provide a single, unified interface to a set of interfaces in a subsystem.
 * - **Encapsulation**: Hide the complexities of the subsystem from the user.
 * 
 * **Real-Life Example**:
 * Consider a smart home system where you have various devices like lights, thermostat, and security cameras. 
 * A smart home controller (Facade) provides a simple interface to control these devices, rather than having 
 * to interact with each device individually.
 */

// Subsystem classes representing different smart home devices

class Light {
  turnOn() {
    logMessage('Light is turned on');
  }

  turnOff() {
    logMessage('Light is turned off');
  }
}

class Thermostat {
  setTemperature(temperature) {
    logMessage(`Thermostat set to ${temperature}°C`);
  }
}

class SecurityCamera {
  activate() {
    logMessage('Security camera activated');
  }

  deactivate() {
    logMessage('Security camera deactivated');
  }
}

// Facade class providing a simplified interface
class SmartHomeFacade {
  constructor() {
    this.light = new Light();
    this.thermostat = new Thermostat();
    this.securityCamera = new SecurityCamera();
  }

  startDay() {
    logMessage('Starting the day...');
    this.light.turnOn(); // Turn on the lights
    this.thermostat.setTemperature(22); // Set thermostat to 22°C
    this.securityCamera.activate(); // Activate the security camera
  }

  endDay() {
    logMessage('\nEnding the day...');
    this.light.turnOff(); // Turn off the lights
    this.securityCamera.deactivate(); // Deactivate the security camera
  }
}

// Using the facade to interact with the smart home system
const smartHome = new SmartHomeFacade();
smartHome.startDay(); // Simplified interface to start the day
smartHome.endDay(); // Simplified interface to end the day
