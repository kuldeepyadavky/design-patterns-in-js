// Import the logMessage 3 from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Proxy
 * **Category**: Structural Pattern
 * **Description**:
 * The Proxy pattern provides a surrogate or placeholder for another object to control access to it. Proxies 
 * can be used to implement various functionalities such as access control, logging, or lazy initialization.
 * 
 * **Key Concepts**:
 * - **Access Control**: Proxies manage and control access to the real subject.
 * - **Additional Functionality**: Add extra functionality before or after delegating the request to the real subject.
 * - **Lazy Initialization**: Delays the creation of an object until it is needed.
 * 
 * **Real-Life Example**:
 * Consider a situation where you need to access a document. The real document might be large and resource-intensive 
 * to load. A proxy can act as a placeholder, loading the document only when it is actually needed, thus saving resources 
 * and improving performance.
 */

// Real subject class (Expensive document to load)
class RealDocument {
  constructor(filename) {
    this.filename = filename;
    this.loadDocument(); // Simulate a time-consuming operation
  }

  loadDocument() {
    logMessage(`Loading document: ${this.filename}`);
    // Simulate a delay
    this.content = `Content of ${this.filename}`;
  }

  display() {
    logMessage(`Displaying document: ${this.content}`);
  }
}

// Proxy class that controls access to the real document
class ProxyDocument {
  constructor(filename) {
    this.filename = filename;
    this.realDocument = null; // Real document is not created yet
  }

  display() {
    if (!this.realDocument) {
      this.realDocument = new RealDocument(this.filename); // Create real document only when needed
    }
    this.realDocument.display(); // Delegate to real document
  }
}

// Usage of the proxy
const document = new ProxyDocument('document.pdf');

logMessage('ProxyDocument: Document is not loaded yet');
document.display(); // Triggers loading of the real document and displaying it

logMessage('ProxyDocument: Document should be cached now');
document.display(); // Directly displays the cached document
