// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Observer
 * **Category**: Behavioral Pattern
 * **Description**:
 * The Observer pattern defines a one-to-many relationship between a subject and its observers. When the
 * subject changes its state, all its observers are notified and updated automatically. This pattern is 
 * useful when you want to ensure that multiple objects stay in sync with the state of a central object.
 *
 * **Real-Life Example**:
 * Think of a newsletter subscription system. Users (observers) subscribe to a newsletter (subject).
 * Whenever a new issue is published, all subscribers receive it.
 */

// The Subject class (Observable)
class Newsletter {
  constructor() {
    this.subscribers = []; // List of observers
  }

  // Method to subscribe to notifications
  subscribe(observer) {
    this.subscribers.push(observer);
  }

  // Method to unsubscribe from notifications
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  // Notify all observers about a state change
  notify(news) {
    this.subscribers.forEach(subscriber => subscriber.update(news));
  }
}

// The Observer class
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  // This method is called when the subject changes state
  update(news) {
    logMessage(`${this.name} received news: ${news}`);
  }
}

// Usage example
const newsletter = new Newsletter(); // The subject

// Creating observers
const subscriber1 = new Subscriber('Alice');
const subscriber2 = new Subscriber('Bob');

// Subscribing to the newsletter
newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);

// Publishing a new issue
newsletter.notify('New issue of JavaScript Weekly!');

// Unsubscribing one observer
newsletter.unsubscribe(subscriber1);

// Publishing another issue
newsletter.notify('Second issue of JavaScript Weekly!');

/**
 * Explanation:
 * 1. **Subject (Newsletter)**:
 *    - The `Newsletter` class represents the subject being observed. It maintains a list of observers (subscribers) and notifies them whenever there's a state change.
 *
 * 2. **Observer (Subscriber)**:
 *    - The `Subscriber` class represents the observers. Each observer implements an `update` method, which gets called whenever the subject notifies them of a change.
 *
 * 3. **Usage**:
 *    - The `subscribe` method allows observers to register themselves with the subject. The `notify` method triggers the update for all observers when a state change occurs.
 *
 * **Real-Life Analogy**:
 * A YouTube channel (subject) has subscribers (observers). Whenever a new video is posted, all subscribers get notified.
 */
