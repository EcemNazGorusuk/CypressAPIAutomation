const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "avrkjw",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
