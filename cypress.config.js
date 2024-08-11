const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "1vizwi",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
