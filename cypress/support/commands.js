/**
 * Custom Cypress Commands
 * Reusable commands for common workflows across all tests
 */

// Login command — avoids repeating login steps in every test
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="username"]').type(username);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/dashboard');
  });
});

// Add product to cart command
Cypress.Commands.add('addToCart', (productName) => {
  cy.get('[data-testid="search-input"]').type(productName);
  cy.get('[data-testid="search-button"]').click();
  cy.contains('[data-testid="product-card"]', productName)
    .find('[data-testid="add-to-cart"]')
    .click();
  cy.get('[data-testid="cart-toast"]').should('be.visible');
});

// Navigate to cart command
Cypress.Commands.add('goToCart', () => {
  cy.get('[data-testid="cart-icon"]').click();
  cy.url().should('include', '/cart');
});

// API login command — faster than UI login for setup
Cypress.Commands.add('loginViaAPI', (username, password) => {
  cy.request({
    method: 'POST',
    url: '/api/auth/login',
    body: { username, password },
  }).then((response) => {
    expect(response.status).to.eq(200);
    window.localStorage.setItem('authToken', response.body.token);
  });
});

// Verify cart item count
Cypress.Commands.add('verifyCartCount', (expectedCount) => {
  cy.get('[data-testid="cart-count"]')
    .should('be.visible')
    .and('have.text', expectedCount.toString());
});
