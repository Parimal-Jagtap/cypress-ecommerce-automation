# Contributing to Cypress E-commerce Framework

## File Placement Rules
New page object?     → cypress/pages/
New test spec?       → cypress/e2e/[module]/
New custom command?  → cypress/support/commands.js
New test data?       → cypress/fixtures/test-data.json

## Commit Format
feat: add WishlistPage POM for saved items module
test: add checkout validation for COD payment
fix: resolve intermittent cart count assertion
docs: update README with Cypress Cloud setup
refactor: move duplicate login to custom command

## Test Writing Rules

- Always use custom commands for login — never repeat login steps
- Use `cy.session()` for session caching between tests
- Use `cy.request()` for API setup — faster than UI setup
- Tag critical tests with `[smoke]` in test name
- Never use `cy.wait(5000)` — use proper assertions instead
- All selectors must use `data-testid` attributes

## Running Tests Locally

```bash
npm install
npx cypress open          # Interactive mode
npx cypress run           # Headless mode
npx cypress run --spec "cypress/e2e/cart/**"
```
