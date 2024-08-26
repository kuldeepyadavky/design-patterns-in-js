// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Chain of Responsibility
 * **Category**: Behavioral Pattern
 * **Description**:
 * The Chain of Responsibility pattern passes a request along a chain of potential handlers until one of
 * them handles it. Each handler in the chain decides either to handle the request or pass it to the next
 * handler in the chain.
 *
 * **Real-Life Example**:
 * Think of a customer support system. The first level support tries to handle a customer’s query. If it
 * can’t, it passes the query to the next level of support, like a supervisor or a manager.
 */

// Abstract handler class
class SupportLevel {
  setNext(handler) {
    this.nextHandler = handler;
    return handler; // Enables method chaining
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    logMessage('No one could handle the request.');
    return null;
  }
}

// Concrete handler classes
class BasicSupport extends SupportLevel {
  handle(request) {
    if (request.type === 'basic') {
      logMessage('Basic Support: Resolved the issue.');
    } else {
      logMessage('Basic Support: Cannot handle, escalating...');
      return super.handle(request);
    }
  }
}

class SupervisorSupport extends SupportLevel {
  handle(request) {
    if (request.type === 'supervisor') {
      logMessage('Supervisor Support: Resolved the issue.');
    } else {
      logMessage('Supervisor Support: Cannot handle, escalating...');
      return super.handle(request);
    }
  }
}

class ManagerSupport extends SupportLevel {
  handle(request) {
    if (request.type === 'manager') {
      logMessage('Manager Support: Resolved the issue.');
    } else {
      logMessage('Manager Support: Cannot handle, this is the highest level.');
      return super.handle(request);
    }
  }
}

// Client code
const basicSupport = new BasicSupport();
const supervisorSupport = new SupervisorSupport();
const managerSupport = new ManagerSupport();

// Setting up the chain: Basic -> Supervisor -> Manager
basicSupport.setNext(supervisorSupport).setNext(managerSupport);

logMessage(basicSupport); 
// Logs: BasicSupport {
//   nextHandler: SupervisorSupport { nextHandler: ManagerSupport {} }
// }

// Example request
const request = { type: 'supervisor' };

// Starting the chain of responsibility
basicSupport.handle(request); // Logs: Basic Support: Cannot handle, escalating... Supervisor Support: Resolved the issue.

/**
 * Explanation:
 * 1. **SupportLevel (Abstract Handler)**:
 *    - Defines a common interface for all concrete handlers. It has a method `setNext` to set the next
 *      handler in the chain and a `handle` method to process or pass the request.
 *
 * 2. **Concrete Handlers (BasicSupport, SupervisorSupport, ManagerSupport)**:
 *    - Each concrete handler handles requests it is responsible for, or passes it to the next handler in
 *      the chain.
 *
 * 3. **Chain Setup**:
 *    - The chain is set up by linking the handlers. The client starts the request with the first handler,
 *      which either handles it or passes it down the chain.
 *
 * **Real-Life Analogy**:
 * Consider a customer calling support. The first level tries to resolve the issue. If they can't, they
 * escalate it to a supervisor. If the supervisor can’t resolve it, they escalate it to a manager.
 */
