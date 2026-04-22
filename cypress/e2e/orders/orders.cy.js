import { validUser } from '../../fixtures/test-data.json';

/**
 * Test Suite: Order Management
 * Covers: order history, order details, order status
 */
describe('Order Management Tests', () => {

  beforeEach(() => {
    cy.login(validUser.username, validUser.password);
    cy.visit('/orders');
  });

  it('[smoke] Should display order history page', () => {
    cy.get('[data-testid="orders-list"]').should('be.visible');
  });

  it('[regression] Should display order details on click', () => {
    cy.get('[data-testid="order-item"]').first().click();
    cy.get('[data-testid="order-detail"]').should('be.visible');
    cy.get('[data-testid="order-status"]').should('not.be.empty');
  });

  it('[regression] Should validate orders via API', () => {
    cy.request({
      method: 'GET',
      url: '/api/orders',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('orders');
      expect(response.body.orders).to.be.an('array');
    });
  });

  it('[regression] Should filter orders by status', () => {
    cy.get('[data-testid="status-filter"]').select('Delivered');
    cy.get('[data-testid="order-item"]').each(($order) => {
      cy.wrap($order)
        .find('[data-testid="order-status"]')
        .should('contain.text', 'Delivered');
    });
  });
});
