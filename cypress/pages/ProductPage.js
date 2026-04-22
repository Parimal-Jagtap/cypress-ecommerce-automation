/**
 * ProductPage — Page Object for product search and detail
 * Covers: search, filter, product detail, add to cart
 */
class ProductPage {

  get searchInput() { return cy.get('[data-testid="search-input"]'); }
  get searchButton() { return cy.get('[data-testid="search-button"]'); }
  get productCards() { return cy.get('[data-testid="product-card"]'); }
  get filterDropdown() { return cy.get('[data-testid="filter-dropdown"]'); }
  get sortDropdown() { return cy.get('[data-testid="sort-dropdown"]'); }
  get addToCartButton() { return cy.get('[data-testid="add-to-cart"]'); }
  get productTitle() { return cy.get('[data-testid="product-title"]'); }
  get productPrice() { return cy.get('[data-testid="product-price"]'); }

  navigate() {
    cy.visit('/products');
  }

  searchProduct(productName) {
    this.searchInput.clear().type(productName);
    this.searchButton.click();
  }

  selectProduct(productName) {
    this.productCards
      .contains(productName)
      .click();
  }

  addFirstProductToCart() {
    this.productCards.first()
      .find('[data-testid="add-to-cart"]')
      .click();
  }

  verifySearchResults(productName) {
    this.productCards
      .should('have.length.greaterThan', 0)
      .first()
      .should('contain.text', productName);
  }

  verifyNoResults() {
    cy.get('[data-testid="no-results-message"]')
      .should('be.visible')
      .and('contain.text', 'No products found');
  }
}

export default new ProductPage();
