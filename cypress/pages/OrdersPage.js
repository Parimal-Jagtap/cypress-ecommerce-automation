/**
 * OrdersPage — Page Object for order management
 * Covers: order history, order details, status tracking
 */
class OrdersPage {

  get ordersList() {
    return cy.get('[data-testid="orders-list"]');
  }

  get orderItems() {
    return cy.get('[data-testid="order-item"]');
  }

  get orderStatusFilter() {
    return cy.get('[data-testid="status-filter"]');
  }

  get orderSearchInput() {
    return cy.get('[data-testid="order-search"]');
  }

  get orderDetailPanel() {
    return cy.get('[data-testid="order-detail"]');
  }

  get orderStatusLabel() {
    return cy.get('[data-testid="order-status"]');
  }

  get cancelOrderButton() {
    return cy.get('[data-testid="cancel-order"]');
  }

  get cancelConfirmButton() {
    return cy.get('[data-testid="confirm-cancel"]');
  }

  navigate() {
    cy.visit('/orders');
  }

  verifyOrdersListVisible() {
    this.ordersList.should('be.visible');
  }

  clickFirstOrder() {
    this.orderItems.first().click();
  }

  filterByStatus(status) {
    this.orderStatusFilter.select(status);
  }

  searchOrder(orderId) {
    this.orderSearchInput.clear().type(orderId);
  }

  verifyOrderStatus(expectedStatus) {
    this.orderStatusLabel
      .should('be.visible')
      .and('contain.text', expectedStatus);
  }

  cancelFirstOrder() {
    this.orderItems.first()
      .find('[data-testid="cancel-order"]')
      .click();
    this.cancelConfirmButton.click();
  }
}

export default new OrdersPage();
