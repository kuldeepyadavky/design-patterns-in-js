import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Prototype
 * **Category**: Creational Pattern
 * **Description**:
 * The Prototype Pattern is used to create new objects by cloning an existing prototype object.
 * Instead of creating new objects from scratch, you clone an existing one, which is useful when
 * object creation involves complex setup or performance concerns.
 *
 * **Real-Life Example**:
 * Consider a manufacturing process where you create multiple identical products from a master template
 * (the prototype). Cloning the template is faster than designing each product from scratch.
 */

// Define a prototype object
const vehiclePrototype = {
  init(model) {
    this.model = model;
  },
  getModel() {
    return this.model;
  }
};

// Create a new object using Object.create with the prototype
function createVehicle(model) {
  const vehicle = Object.create(vehiclePrototype);
  vehicle.init(model);
  return vehicle;
}

// Usage of the Prototype Pattern
const car = createVehicle('Tesla Model S');
const bike = createVehicle('Ducati Panigale');

// Log the models of the created vehicles
logMessage(car.getModel()); // Logs: Tesla Model S
logMessage(bike.getModel()); // Logs: Ducati Panigale

/**
 * Explanation:
 * 1. **Prototype Definition**:
 *    - The `vehiclePrototype` object serves as the prototype for all vehicle instances.
 *    - It defines common methods (like `init` and `getModel`) that all instances can share.
 *
 * 2. **Creating New Objects**:
 *    - The `createVehicle` function uses `Object.create()` to clone the prototype object and then initializes it.
 *    - This approach avoids the need for class-based inheritance, focusing on object composition and cloning.
 *
 * 3. **Shared Methods**:
 *    - All instances created from the prototype share the same methods, promoting memory efficiency.
 *
 * **Real-Life Analogy**:
 * Imagine you are creating multiple gadgets using a master design template. Instead of designing each gadget from scratch, you make copies of the template and tweak the details as needed.
 */
