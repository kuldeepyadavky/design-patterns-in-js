// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Builder
 * **Category**: Creational Pattern
 * **Description**:
 * The Builder Pattern constructs complex objects step-by-step by separating the construction process
 * from the final representation. It allows for more controlled and flexible object creation, especially
 * when there are multiple ways to build an object or when the object has many configuration options.
 *
 * **Real-Life Example**:
 * Consider a scenario where you want to build a custom pizza. You specify the crust, sauce, cheese, and toppings
 * step-by-step, and the pizza is assembled according to your exact specifications.
 */

// Class representing a complex object: a Pizza
class Pizza {
  constructor(builder) {
    this.size = builder.size;
    this.crust = builder.crust;
    this.sauce = builder.sauce;
    this.cheese = builder.cheese;
    this.toppings = builder.toppings;
  }

  describe() {
    logMessage(`Pizza Details:
      Size: ${this.size}
      Crust: ${this.crust}
      Sauce: ${this.sauce}
      Cheese: ${this.cheese}
      Toppings: ${this.toppings.join(', ')}
    `);
  }
}

// Builder class for constructing a Pizza step-by-step
class PizzaBuilder {
  constructor(size) {
    this.size = size;
    this.toppings = [];
  }

  setCrust(crust) {
    this.crust = crust;
    return this; // Enables method chaining
  }

  setSauce(sauce) {
    this.sauce = sauce;
    return this;
  }

  setCheese(cheese) {
    this.cheese = cheese;
    return this;
  }

  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }

  build() {
    return new Pizza(this); // Returns the fully constructed Pizza object
  }
}

// Usage of the Builder Pattern
const myPizza = new PizzaBuilder('Large')
  .setCrust('Thin Crust')
  .setSauce('Tomato Basil')
  .setCheese('Mozzarella')
  .addTopping('Pepperoni')
  .addTopping('Mushrooms')
  .build();

// Log the details of the built Pizza
myPizza.describe();

/**
 * Explanation:
 * 1. **Builder Class**:
 *    - The `PizzaBuilder` class encapsulates the construction logic for a `Pizza` object.
 *    - Each method sets a property and returns `this` to allow method chaining.
 *
 * 2. **Final Product**:
 *    - The `Pizza` class is the final product. It is constructed using the builder and stores the configuration.
 *
 * 3. **Construction Process**:
 *    - You can specify only the properties you need. For example, if you don’t want sauce, you can skip the `setSauce()` method.
 *    - The final object is created using the `build()` method, which returns a fully constructed `Pizza`.
 *
 * **Real-Life Analogy**:
 * Think of ordering a custom pizza. You tell the builder (the person making your pizza) the size, crust, sauce, cheese, and toppings
 * you want, and they assemble it step-by-step until you have the exact pizza you requested.
 */
