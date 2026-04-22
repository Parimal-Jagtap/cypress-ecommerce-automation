/**
 * CartPage — Page Object for cart management
 * Covers: view cart, update quantity, remove item, proceed to checkout
 */
class CartPage {

  get cartItems() { return cy.get('[data-testid="cart-item"]'); }
  get cartTotal() { return cy.get('[data-testid="cart-total"]'); }
  get checkoutButton() { return cy.get('[data-testid="checkout-button"]'); }
  get emptyCartMessage() { return cy.get('[data-testid="empty-cart"]'); }
  get removeItemButton() { return cy.get('[data-testid="remove-item"]'); }

  navigate() {
    cy.visit('/cart');
  }

  getCartItemCount() {
    return this.cartItems.its('length');
  }

  updateQuantity(itemName, quantity) {
    this.cartItems
      .contains(itemName)
      .parents('[data-testid="cart-item"]')
      .find('[data-testid="quantity-input"]')
      .clear()
      .type(quantity);
  }

  removeItem(itemName) {
    this.cartItems
      .contains(itemName)
      .parents('[data-testid="cart-item"]')
      .find('[data-testid="remove-item"]')
      .click();
  }

  verifyItemInCart(itemName) {
    this.cartItems.should('contain.text', itemName);
  }

  verifyCartIsEmpty() {
    this.emptyCartMessage.should('be.visible');
  }

  proceedToCheckout() {
    this.checkoutButton.click();
    cy.url().should('include', '/checkout');
  }
}

export default new CartPage();
