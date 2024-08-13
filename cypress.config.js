const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ize72n",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
