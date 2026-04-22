/**
 * CheckoutPage — Page Object for checkout and payment flow
 * Covers: address, payment, order confirmation
 */
class CheckoutPage {

  // Address fields
  get fullNameInput() { return cy.get('[data-testid="full-name"]'); }
  get addressInput() { return cy.get('[data-testid="address"]'); }
  get cityInput() { return cy.get('[data-testid="city"]'); }
  get pincodeInput() { return cy.get('[data-testid="pincode"]'); }
  get continueToPaymentButton() { return cy.get('[data-testid="continue-payment"]'); }

  // Payment fields
  get cardNumberInput() { return cy.get('[data-testid="card-number"]'); }
  get cardExpiryInput() { return cy.get('[data-testid="card-expiry"]'); }
  get cardCvvInput() { return cy.get('[data-testid="card-cvv"]'); }
  get placeOrderButton() { return cy.get('[data-testid="place-order"]'); }

  // Confirmation
  get orderConfirmationMessage() { return cy.get('[data-testid="order-confirmation"]'); }
  get orderIdLabel() { return cy.get('[data-testid="order-id"]'); }

  fillShippingAddress(addressData) {
    this.fullNameInput.type(addressData.fullName);
    this.addressInput.type(addressData.address);
    this.cityInput.type(addressData.city);
    this.pincodeInput.type(addressData.pincode);
    this.continueToPaymentButton.click();
  }

  fillPaymentDetails(paymentData) {
    this.cardNumberInput.type(paymentData.cardNumber);
    this.cardExpiryInput.type(paymentData.expiry);
    this.cardCvvInput.type(paymentData.cvv);
  }

  placeOrder() {
    this.placeOrderButton.click();
  }

  verifyOrderConfirmation() {
    this.orderConfirmationMessage
      .should('be.visible')
      .and('contain.text', 'Order placed successfully');
    return this.orderIdLabel.invoke('text');
  }
}

export default new CheckoutPage();
