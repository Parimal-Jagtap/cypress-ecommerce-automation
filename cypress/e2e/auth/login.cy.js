import LoginPage from '../../pages/LoginPage';
import { validUser, invalidUser } from '../../fixtures/test-data.json';

/**
 * Test Suite: Authentication
 * Covers: valid login, invalid login, empty fields, session persistence
 */
describe('Authentication Tests', () => {

  beforeEach(() => {
    LoginPage.navigate();
  });

  it('[smoke] Should login successfully with valid credentials', () => {
    LoginPage.login(validUser.username, validUser.password);
    LoginPage.verifyRedirectToDashboard();
  });

  it('[regression] Should show error with invalid password', () => {
    LoginPage.login(validUser.username, invalidUser.password);
    LoginPage.verifyErrorMessage('Invalid username or password');
  });

  it('[regression] Should show error with invalid username', () => {
    LoginPage.login(invalidUser.username, validUser.password);
    LoginPage.verifyErrorMessage('Invalid username or password');
  });

  it('[regression] Should show validation for empty username', () => {
    LoginPage.login('', validUser.password);
    LoginPage.verifyErrorMessage('Username is required');
  });

  it('[regression] Should show validation for empty password', () => {
    LoginPage.login(validUser.username, '');
    LoginPage.verifyErrorMessage('Password is required');
  });

  it('[regression] Should persist session after page refresh', () => {
    cy.login(validUser.username, validUser.password);
    cy.visit('/dashboard');
    cy.reload();
    cy.url().should('include', '/dashboard');
  });
});
