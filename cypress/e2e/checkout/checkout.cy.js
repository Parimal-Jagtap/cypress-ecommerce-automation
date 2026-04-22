import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import { validUser, products, address, payment } from '../../fixtures/test-data.json';

/**
 * Test Suite: Checkout Flow
 * Covers: address, payment, order confirmation
 */
describe('Checkout Flow Tests', () => {

  beforeEach(() => {
    cy.login(validUser.username, validUser.password);
    cy.addToCart(products.first.name);
    cy.goToCart();
  });

  it('[smoke] Should complete checkout successfully', () => {
    CartPage.proceedToCheckout();
    CheckoutPage.fillShippingAddress(address);
    CheckoutPage.fillPaymentDetails(payment);
    CheckoutPage.placeOrder();
    CheckoutPage.verifyOrderConfirmation().then((orderId) => {
      expect(orderId).to.not.be.empty;
      cy.log(`Order placed with ID: ${orderId}`);
    });
  });

  it('[regression] Should validate mandatory address fields', () => {
    CartPage.proceedToCheckout();
    CheckoutPage.continueToPaymentButton.click();
    cy.get('[data-testid="name-error"]')
      .should('be.visible')
      .and('contain.text', 'Full name is required');
  });

  it('[regression] Should validate payment card details', () => {
    CartPage.proceedToCheckout();
    CheckoutPage.fillShippingAddress(address);
    CheckoutPage.placeOrderButton.click();
    cy.get('[data-testid="card-error"]')
      .should('be.visible')
      .and('contain.text', 'Card number is required');
  });

  it('[regression] Should validate backend order creation via API', () => {
    CartPage.proceedToCheckout();
    CheckoutPage.fillShippingAddress(address);
    CheckoutPage.fillPaymentDetails(payment);
    CheckoutPage.placeOrder();

    // Validate backend API confirms order
    CheckoutPage.verifyOrderConfirmation().then((orderId) => {
      cy.request({
        method: 'GET',
        url: `/api/orders/${orderId}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('confirmed');
      });
    });
  });
});
