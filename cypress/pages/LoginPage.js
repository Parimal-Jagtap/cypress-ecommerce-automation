/**
 * LoginPage — Page Object for authentication flows
 * Covers: valid login, invalid login, session management
 */
class LoginPage {

  // Locators
  get usernameInput() { return cy.get('[data-testid="username"]'); }
  get passwordInput() { return cy.get('[data-testid="password"]'); }
  get loginButton() { return cy.get('[data-testid="login-button"]'); }
  get errorMessage() { return cy.get('[data-testid="error-message"]'); }
  get forgotPasswordLink() { return cy.contains('Forgot Password'); }

  navigate() {
    cy.visit('/login');
  }

  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  verifyErrorMessage(expectedMessage) {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', expectedMessage);
  }

  verifyRedirectToDashboard() {
    cy.url().should('include', '/dashboard');
  }
}

export default new LoginPage();
