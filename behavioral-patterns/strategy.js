// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Strategy
 * **Category**: Behavioral Pattern
 * **Description**:
 * The Strategy Pattern allows for the selection of an algorithm at runtime. It defines a family of algorithms,
 * encapsulates each one, and makes them interchangeable without changing the code that uses them.
 * 
 * **Real-Life Example**:
 * Think of a navigation app that lets you choose between different routes: "fastest", "shortest", or "scenic".
 * Depending on user input, the app uses a different strategy (algorithm) to calculate the route.
 */

// Strategy Interface
class PaymentStrategy {
  pay(amount) {
    throw new Error('Method "pay" should be implemented');
  }
}

// Concrete Strategies
class CreditCardStrategy extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    logMessage(`Paid ${amount} using Credit Card ending with ${this.cardNumber.slice(-4)}`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    logMessage(`Paid ${amount} using PayPal account: ${this.email}`);
  }
}

// Context Class
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy; // Set the payment strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy; // Change the payment strategy at runtime
  }

  processPayment(amount) {
    this.strategy.pay(amount); // Delegate payment to the strategy
  }
}

// Usage of the Strategy Pattern
const creditCardStrategy = new CreditCardStrategy('1234-5678-9876-5432');
const paypalStrategy = new PayPalStrategy('kuldeep@poeepoee.com');

const paymentContext = new PaymentContext(creditCardStrategy);
paymentContext.processPayment(100); // Logs: Paid 100 using Credit Card ending with 5432

paymentContext.setStrategy(paypalStrategy);
paymentContext.processPayment(200); // Logs: Paid 200 using PayPal account: user@example.com

/**
 * Explanation:
 * 1. **Strategy Interface**:
 *    - `PaymentStrategy` defines a common interface for all payment methods. Each strategy must implement the `pay` method.
 * 
 * 2. **Concrete Strategies**:
 *    - `CreditCardStrategy` and `PayPalStrategy` implement the `pay` method, providing specific behavior for each payment type.
 * 
 * 3. **Context Class**:
 *    - `PaymentContext` uses a strategy object to delegate payment processing. It can dynamically change the strategy at runtime.
 * 
 * 4. **Usage**:
 *    - The client code can switch between different payment strategies without modifying the code that processes the payment.
 * 
 * **Real-Life Analogy**:
 * Imagine you are traveling and want to choose between different modes of transport like a car, bike, or bus. 
 * The Strategy Pattern allows you to change your mode of transport (strategy) based on factors like time, cost, or convenience.
 */
