// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Adapter
 * **Category**: Structural Pattern
 * **Description**:
 * The Adapter Pattern allows objects with incompatible interfaces to work together by converting the
 * interface of a class into one that the client expects. It acts as a bridge between two incompatible
 * interfaces.
 *
 * **Real-Life Example**:
 * Imagine you have a new laptop that only supports USB-C ports, but your charger is a traditional USB-A.
 * You need an adapter to allow the two to work together without modifying either the laptop or the charger.
 */

// Existing interface (incompatible with the new client code)
class OldCharger {
  connectWithUSBA() {
    logMessage('Connected using USB-A');
  }
}

// New client expecting USB-C interface
class NewLaptop {
  connectWithUSBC(charger) {
    logMessage('New laptop connecting...');
    charger.connectWithUSBC();
  }
}

// Adapter that makes OldCharger compatible with NewLaptop
class ChargerAdapter {
  constructor(oldCharger) {
    this.oldCharger = oldCharger;
  }

  // Adapting the old charger to be used with the new laptop
  connectWithUSBC() {
    logMessage('Adapter converting USB-A to USB-C...');
    this.oldCharger.connectWithUSBA();
  }
}

// Usage example
const oldCharger = new OldCharger();
const adapter = new ChargerAdapter(oldCharger);
const newLaptop = new NewLaptop();

// Now the new laptop can use the old charger with the adapter
newLaptop.connectWithUSBC(adapter); // Logs: New laptop connecting..., Adapter converting USB-A to USB-C..., Connected using USB-A

/**
 * Explanation:
 * 1. **OldCharger (Incompatible Interface)**:
 *    - Represents the existing charger that works with USB-A but isn’t directly compatible with the new laptop.
 *
 * 2. **NewLaptop (Client)**:
 *    - Represents the new laptop that only supports USB-C.
 *    - It expects a `connectWithUSBC` method to connect the charger.
 *
 * 3. **Adapter (Compatibility Layer)**:
 *    - The `ChargerAdapter` converts the interface of `OldCharger` to be compatible with `NewLaptop`.
 *    - The adapter implements `connectWithUSBC`, which internally calls the original `connectWithUSBA` method of the old charger.
 *
 * **Real-Life Analogy**:
 * Think of the adapter as a power plug converter you use when traveling to another country. It allows your device (client) to connect to outlets (incompatible system) by converting the plug type.
 */