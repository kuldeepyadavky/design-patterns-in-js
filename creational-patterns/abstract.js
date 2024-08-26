// Import the logMessage from a common logger module
import { logMessage } from '../common/logger.js';

/**
 * **Pattern**: Abstract Factory
 * **Category**: Creational Pattern
 * **Description**:
 * The Abstract Factory Pattern provides an interface to create families of related or dependent objects
 * without specifying their concrete classes.
 *
 * **Real-Life Example**:
 * Consider a UI toolkit that needs to support both dark and light themes. You can use an abstract factory
 * to create themed UI components like buttons, checkboxes, and input fields based on the selected theme.
 */

// Abstract factory interface
class UIFactory {
  createButton() {
    throw new Error('Method "createButton" should be implemented');
  }
  createCheckbox() {
    throw new Error('Method "createCheckbox" should be implemented');
  }
}

// Concrete factory for dark theme
class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }
  createCheckbox() {
    return new DarkCheckbox();
  }
}

// Concrete factory for light theme
class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createCheckbox() {
    return new LightCheckbox();
  }
}

// Dark theme components
class DarkButton {
  render() {
    logMessage('Rendering dark-themed button');
  }
}

class DarkCheckbox {
  render() {
    logMessage('Rendering dark-themed checkbox');
  }
}

// Light theme components
class LightButton {
  render() {
    logMessage('Rendering light-themed button');
  }
}

class LightCheckbox {
  render() {
    logMessage('Rendering light-themed checkbox');
  }
}

// Usage example
function renderUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

// Choose a factory based on some configuration
const darkThemeFactory = new DarkThemeFactory();
const lightThemeFactory = new LightThemeFactory();

// Rendering the UI with different themes
logMessage('Dark Theme:');
renderUI(darkThemeFactory); // Logs: Rendering dark-themed button, Rendering dark-themed checkbox

logMessage('Light Theme:');
renderUI(lightThemeFactory); // Logs: Rendering light-themed button, Rendering light-themed checkbox

/**
 * Explanation:
 * 1. **Abstract Factory Interface**:
 *    - The `UIFactory` class defines an interface for creating families of related objects (e.g., buttons and checkboxes).
 *    - Concrete implementations like `DarkThemeFactory` and `LightThemeFactory` provide specific instances of those objects.
 *
 * 2. **Concrete Factories**:
 *    - Each concrete factory creates objects specific to a theme (e.g., dark or light). These factories produce components like buttons and checkboxes matching the selected theme.
 *
 * 3. **Decoupling Creation from Usage**:
 *    - The `renderUI` function relies on the abstract factory without needing to know about specific classes. It just uses the factory to get the required objects.
 *
 * **Real-Life Analogy**:
 * Imagine you’re running a furniture shop. You have two collections: one with modern-style furniture and one with classic-style furniture. Depending on the customer's preference, you pick furniture from the appropriate collection without mixing them.
 */