# Design Patterns in JavaScript

Welcome to the Design Patterns repository! This repository demonstrates various design patterns implemented in JavaScript. The patterns are categorized into behavioral, creational, and structural patterns. Each pattern is accompanied by examples, explanations, and real-life analogies.

## Folder Structure

```
├── behavioral-patterns/
│   ├── chain-of-responsibility.js
│   ├── delegation.js
│   ├── iterator.js
│   ├── mediator.js
│   ├── observer.js
│   ├── retry.js
│   ├── strategy.js
│   └── visitor.js
├── common/
│   └── logger.js
├── creational-patterns/
│   ├── abstract.js
│   ├── adapter.js
│   ├── builder.js
│   ├── factory.js
│   ├── inheritance.js
│   ├── prototype.js
│   └── singleton.js
├── structural-patterns/
│   ├── composition.js
│   ├── decorator.js
│   ├── facade.js
│   ├── mixins.js
│   ├── proxy.js
│   └── revealing-module.js
├── package.json
```

## Getting Started

This repository is organized into three main categories of design patterns:

### 1. Behavioral Patterns
Behavioral patterns are concerned with communication between objects.

- **Chain of Responsibility**: Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
- **Delegation**: Allows objects to delegate tasks to other objects, avoiding tight coupling.
- **Iterator**: Provides a way to access the elements of an aggregate object sequentially.
- **Mediator**: Defines an object that encapsulates how a set of objects interact.
- **Observer**: Defines a one-to-many dependency between objects.
- **Retry**: Handles failure scenarios by retrying failed operations.
- **Strategy**: Defines a family of algorithms and makes them interchangeable.
- **Visitor**: Adds new operations to classes without changing their structure.

### 2. Creational Patterns
Creational patterns deal with object creation mechanisms.

- **Abstract Factory**: Provides an interface for creating families of related objects.
- **Adapter**: Converts the interface of a class into another interface clients expect.
- **Builder**: Separates the construction of a complex object from its representation.
- **Factory Method**: Defines an interface for creating an object but lets subclasses alter the type of object.
- **Inheritance**: Derives new classes from existing ones.
- **Prototype**: Creates objects by cloning existing ones.
- **Singleton**: Ensures a class has only one instance and provides a global point of access to it.

### 3. Structural Patterns
Structural patterns deal with object composition and relationships.

- **Composition**: Combines objects to achieve more complex functionality.
- **Decorator**: Attaches additional responsibilities to objects dynamically.
- **Facade**: Provides a simplified interface to a complex subsystem.
- **Mixins**: Provides a way to add behavior to objects without using inheritance.
- **Proxy**: Provides a surrogate or placeholder for another object.
- **Revealing Module**: Exposes only the properties and methods you want while keeping others private.

## Usage

Each pattern is implemented in its respective JavaScript file under the appropriate category folder. You can explore these patterns and their usage by running the examples provided in the code.

To log messages and errors, the `logger.js` module located in the `common` folder is used.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kuldeepyadavky/design-patterns-in-js.git
   ```

2. Navigate to the project directory:

   ```bash
   cd design-patterns-in-js
   ```

3. Run the examples:

   Use Node.js to run any pattern file directly, for example:

   ```bash
      # Behavioral Patterns
      node behavioral-patterns/chain-of-responsibility.js
      node behavioral-patterns/delegation.js
      node behavioral-patterns/iterator.js
      node behavioral-patterns/mediator.js
      node behavioral-patterns/observer.js
      node behavioral-patterns/retry.js
      node behavioral-patterns/strategy.js
      node behavioral-patterns/visitor.js

      # Creational Patterns
      node creational-patterns/abstract.js
      node creational-patterns/adapter.js
      node creational-patterns/builder.js
      node creational-patterns/factory.js
      node creational-patterns/inheritance.js
      node creational-patterns/prototype.js
      node creational-patterns/singleton.js

      # Structural Patterns
      node structural-patterns/composition.js
      node structural-patterns/decorator.js
      node structural-patterns/facade.js
      node structural-patterns/mixins.js
      node structural-patterns/proxy.js
      node structural-patterns/revealing-module.js

   ```

## License

This project is licensed under the MIT License.
