# 🛒 Cypress E-commerce Automation Framework

> End-to-end test automation for E-commerce applications  
> Built with **Cypress + JavaScript** | CI/CD via **GitHub Actions** | Cypress Cloud

---

## 🧱 Framework Architecture
---

## ⚙️ Tech Stack

| Layer | Tool |
|---|---|
| Automation Framework | Cypress 13.x |
| Language | JavaScript |
| Test Runner | Cypress Test Runner |
| Reporting | Cypress Cloud + Mochawesome |
| API Testing | cy.request() |
| CI/CD | GitHub Actions |
| Version Control | Git + GitHub |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cypress-ecommerce-automation.git

# Navigate to project
cd cypress-ecommerce-automation

# Install dependencies
npm install
```

### Run Tests

```bash
# Open Cypress Test Runner (interactive)
npx cypress open

# Run all tests headless
npx cypress run

# Run specific module
npx cypress run --spec "cypress/e2e/cart/**"

# Run smoke tests only
npx cypress run --env tags=smoke

# Run in specific browser
npx cypress run --browser firefox

# Run in parallel (Cypress Cloud)
npx cypress run --record --parallel
```

---

## 🔑 Key Framework Features

- ✅ **Page Object Model** — clean separation of locators and test logic
- ✅ **Custom Commands** — reusable login, addToCart, checkout commands
- ✅ **cy.request()** — seamless frontend and backend validation
- ✅ **Fixture-based Test Data** — JSON data for multiple test scenarios
- ✅ **Cross-browser Testing** — Chrome, Firefox, Edge support
- ✅ **Parallel Execution** — Cypress Cloud for faster runs
- ✅ **API + UI Combined** — backend validation alongside UI flows
- ✅ **Retry Logic** — automatic retry on flaky test steps
- ✅ **Screenshot & Video** — auto-captured on failure
- ✅ **GitHub Actions CI/CD** — automated pipeline on every push

---

## 🌐 Test Coverage — E-commerce Modules

| Module | Coverage |
|---|---|
| Authentication | Login, logout, invalid credentials, session |
| Product | Search, filter, product detail view |
| Cart | Add item, remove item, update quantity |
| Checkout | Address, payment, order confirmation |
| Orders | Order history, order details, order status |
| API | Cart API, order API, product API validation |

---

## 👤 Author

**Parimal Jagtap** — SDET | 4+ Years  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-parimaljagtap-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/parimaljagtap)
