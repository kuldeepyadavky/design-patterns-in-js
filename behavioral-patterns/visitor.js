// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Visitor
 * **Category**: Behavioral Pattern
 * **Description**:
 * The Visitor pattern allows adding further operations to objects without modifying them. This is achieved 
 * by moving the logic of these operations into a separate class (the visitor). This pattern is useful when 
 * you need to perform various unrelated operations on a set of objects.
 *
 * **Real-Life Example**:
 * Imagine a shopping cart system where products need to be taxed or discounted. Instead of changing the 
 * product classes every time a new operation is added, you can create visitors that encapsulate the logic 
 * for applying taxes, discounts, etc.
 */

// Visitor Interface
class Visitor {
  visitBook(book) {}
  visitElectronics(electronics) {}
}

// Concrete Visitor (e.g., TaxVisitor)
class TaxVisitor extends Visitor {
  visitBook(book) {
    logMessage(`Calculating tax for book: ${book.name}`);
    return book.price * 0.1; // 10% tax
  }

  visitElectronics(electronics) {
    logMessage(`Calculating tax for electronics: ${electronics.name}`);
    return electronics.price * 0.2; // 20% tax
  }
}

// Element Interface
class Product {
  accept(visitor) {}
}

// Concrete Elements
class Book extends Product {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitBook(this);
  }
}

class Electronics extends Product {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }

  accept(visitor) {
    return visitor.visitElectronics(this);
  }
}

// Usage Example
const book = new Book('Design Patterns', 500);
const electronics = new Electronics('Smartphone', 30000);

const taxVisitor = new TaxVisitor();

const bookTax = book.accept(taxVisitor);
const electronicsTax = electronics.accept(taxVisitor);

logMessage(`Tax for book: ₹${bookTax}`); // Logs: Tax for book: ₹50
logMessage(`Tax for electronics: ₹${electronicsTax}`); // Logs: Tax for electronics: ₹6000

/**
 * Explanation:
 * 1. **Visitor Interface**:
 *    - The `Visitor` class defines methods to visit each type of element (e.g., `visitBook`, `visitElectronics`).
 *
 * 2. **Concrete Visitor**:
 *    - The `TaxVisitor` class implements the visitor interface and defines how to calculate taxes for books and electronics.
 *
 * 3. **Element Interface**:
 *    - The `Product` class defines the `accept` method that takes a visitor. Concrete products like `Book` and `Electronics` override this method.
 *
 * 4. **Concrete Elements**:
 *    - The `Book` and `Electronics` classes implement the `accept` method by passing themselves to the visitor’s method (e.g., `visitBook`, `visitElectronics`).
 *
 * 5. **Usage**:
 *    - The client creates objects and passes a visitor to them. The visitor then processes the objects based on their type.
 * 
 * **Real-Life Analogy**:
 * Imagine you are visiting different stores (elements) and applying specific operations like calculating tax or discounts (visitor). The stores themselves don’t need to change when new operations are introduced—just the visitor does.
 */
