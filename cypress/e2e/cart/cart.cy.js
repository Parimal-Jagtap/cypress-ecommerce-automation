import CartPage from '../../pages/CartPage';
import ProductPage from '../../pages/ProductPage';
import { validUser, products } from '../../fixtures/test-data.json';

/**
 * Test Suite: Cart Management
 * Covers: add item, remove item, update quantity, empty cart
 */
describe('Cart Management Tests', () => {

  beforeEach(() => {
    cy.login(validUser.username, validUser.password);
    cy.visit('/products');
  });

  it('[smoke] Should add product to cart successfully', () => {
    cy.addToCart(products.first.name);
    cy.goToCart();
    CartPage.verifyItemInCart(products.first.name);
  });

  it('[regression] Should remove product from cart', () => {
    cy.addToCart(products.first.name);
    cy.goToCart();
    CartPage.removeItem(products.first.name);
    CartPage.verifyCartIsEmpty();
  });

  it('[regression] Should update product quantity in cart', () => {
    cy.addToCart(products.first.name);
    cy.goToCart();
    CartPage.updateQuantity(products.first.name, 3);
    cy.get('[data-testid="quantity-input"]').should('have.value', '3');
  });

  it('[regression] Should add multiple products to cart', () => {
    cy.addToCart(products.first.name);
    cy.addToCart(products.second.name);
    cy.goToCart();
    CartPage.verifyItemInCart(products.first.name);
    CartPage.verifyItemInCart(products.second.name);
  });

  it('[regression] Should validate cart total updates correctly', () => {
    cy.addToCart(products.first.name);
    cy.goToCart();
    CartPage.cartTotal.should('be.visible').and('not.be.empty');
  });
});
