const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://www.saucedemo.com",
      "chromeWebSecurity": false,
      "viewportWidth": 1280,
      "viewportHeight": 720,
      "reporter": "mochawesome",
        "reporterOptions": {
          "reportDir":"cypress/reports",
          "reportFilename": "[status]_[datetime]-[name]-cypressReport",
          "reportTitle" : "Swag Lab Cypress Test Report",
          "timestamp": "longDate",
          "overwrite" : true,
          "html" : true,
          "json" : true,
          "charts" : true,
          "embeddedScreenshots": true
        },
      "video" : false,
      setupNodeEvents(on, config) {
       
      },
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    }
});