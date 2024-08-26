// Import the logMessage from a common logger module
import { logMessage, logError } from '../common/logger.js';

/**
 * **Pattern**: Retry
 * **Category**: Resilience Pattern (Behavioral/Structural)
 * **Description**:
 * The Retry Pattern handles transient failures by retrying an operation multiple times before giving up.
 * It is commonly used to deal with network errors, temporary outages, or rate-limiting scenarios.
 * 
 * **Real-Life Example**:
 * Think of trying to call someone whose phone is temporarily out of coverage. Instead of giving up after one attempt,
 * you might retry calling them after a short delay, hoping they regain coverage.
 */

// Function simulating an operation that may fail sporadically
function unreliableOperation() {
  return Math.random() > 0.7; // Returns true (success) 30% of the time, false (failure) 70% of the time
}

// Retry function with exponential backoff
async function retryOperation(operation, retries = 5, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      logMessage(`Attempt ${attempt}`);
      const result = operation();
      if (result) {
        logMessage('Operation succeeded'); // Logs: Operation succeeded
        return result; // Exit if the operation is successful
      } else {
        throw new Error('Operation failed');
      }
    } catch (error) {
      logError(error.message);
      if (attempt === retries) {
        logError('All retry attempts failed'); // Logs: All retry attempts failed
        throw error; // Re-throw after exhausting retries
      }
      // Exponential backoff: Increase delay with each retry
      const backoffTime = delay * Math.pow(2, attempt - 1);
      logMessage(`Retrying in ${backoffTime}ms...`);
      await new Promise(resolve => setTimeout(resolve, backoffTime));
    }
  }
}

// Usage of the Retry Pattern
retryOperation(unreliableOperation)
  .then(() => logMessage('Process completed')) // Logs: Process completed
  .catch(() => logError('Process failed after all retries')); // Logs: Process failed after all retries

/**
 * Explanation:
 * 1. **Unreliable Operation**:
 *    - The `unreliableOperation` function simulates a process that has a high chance of failure (70%).
 * 
 * 2. **Retry Logic**:
 *    - The `retryOperation` function handles retries. It takes the operation to be retried, the maximum number of retries,
 *      and an initial delay between retries.
 * 
 * 3. **Exponential Backoff**:
 *    - The retry delay increases exponentially with each attempt, reducing the frequency of retries and allowing more time
 *      for transient issues to resolve.
 * 
 * 4. **Usage**:
 *    - The retry mechanism is used to attempt the unreliable operation multiple times. If the operation fails repeatedly,
 *      the error is eventually re-thrown after all retries are exhausted.
 * 
 * **Real-Life Analogy**:
 * Think of a vending machine that occasionally fails to dispense items. Instead of giving up immediately, you might wait a bit
 * and try pressing the button again. If it still doesn’t work after several tries, you finally consider it broken.
 */
