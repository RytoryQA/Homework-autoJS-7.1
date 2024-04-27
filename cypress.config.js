const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 0,
    video: false, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
