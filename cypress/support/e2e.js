// Import custom commands
import './commands';

// Global before each test
beforeEach(() => {
  // Clear cookies and local storage before each test
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Suppress uncaught exception errors from application
Cypress.on('uncaught:exception', (err) => {
  // Return false to prevent test failure on app errors
  if (err.message.includes('ResizeObserver') ||
      err.message.includes('Non-Error promise rejection')) {
    return false;
  }
});
