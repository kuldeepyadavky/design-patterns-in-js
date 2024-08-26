// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Mediator
 * **Category**: Behavioral Pattern
 * **Description**:
 * The Mediator pattern provides a centralized communication interface for a group of objects. Instead of
 * communicating directly with each other, objects communicate through the mediator. This reduces the 
 * interdependencies among objects and promotes loose coupling.
 *
 * **Real-Life Example**:
 * In an airport, planes do not directly communicate with each other. Instead, they communicate through the
 * air traffic control (ATC) tower, which acts as a mediator to coordinate their activities.
 */

// Mediator interface
class ChatRoomMediator {
  showMessage(user, message) {
    const time = new Date().toLocaleTimeString();
    const sender = user.getName();
    logMessage(`[${time}] ${sender}: ${message}`);
  }
}

// User class that interacts via the mediator
class User {
  constructor(name, chatMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  getName() {
    return this.name;
  }

  sendMessage(message) {
    this.chatMediator.showMessage(this, message); // Send message via the mediator
  }
}

// Client code using the mediator pattern
const chatRoom = new ChatRoomMediator();

const user1 = new User('Alice', chatRoom);
const user2 = new User('Bob', chatRoom);

user1.sendMessage('Hello, Bob!'); // Logs: [time] Alice: Hello, Bob!
user2.sendMessage('Hi, Alice!');  // Logs: [time] Bob: Hi, Alice!

/**
 * Explanation:
 * 1. **Mediator (ChatRoomMediator)**:
 *    - The `ChatRoomMediator` class is the central mediator that facilitates communication between users. It defines the method `showMessage` that handles how messages are shown.
 *
 * 2. **Colleague (User)**:
 *    - The `User` class represents participants in the chat room. Users do not communicate directly; they send messages through the mediator.
 *
 * 3. **Client Code**:
 *    - The client code creates instances of the `User` class and passes the mediator to them. When a user sends a message, it goes through the mediator, which then displays it.
 *
 * **Real-Life Analogy**:
 * Think of an air traffic control system. Each airplane doesn’t talk to other airplanes directly but relies on the ATC tower (mediator) to coordinate landing, takeoff, and flight paths.
 */
