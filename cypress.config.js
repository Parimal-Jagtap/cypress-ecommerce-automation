const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Base URL of the application
    baseUrl: process.env.BASE_URL || 'https://your-ecommerce-app.com',

    // Test files location
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Support file
    supportFile: 'cypress/support/e2e.js',

    // Fixtures folder
    fixturesFolder: 'cypress/fixtures',

    // Screenshots on failure
    screenshotOnRunFailure: true,

    // Video recording
    video: true,

    // Retry failed tests
    retries: {
      runMode: 2,   // CI retries
      openMode: 0,  // Local retries
    },

    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 15000,

    // Viewport
    viewportWidth: 1280,
    viewportHeight: 720,

    // Reporter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
