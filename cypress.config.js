const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.zara.com/pl/",
    redirectionLimit: 3,
    retries: {
      runMode: 1,
      openMode: 1
    },
    watchForFileChanges: true,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    waitForAnimations: true,
    testIsolation: false,    
    // Konfiguracja raportowania
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome, mocha-junit-reporter",
      mochawesomeReporterOptions: {
        reportDir: "cypress/results",
        overwrite: false,
        html: false,
        json: true
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: "cypress/results/junit-report-[hash].xml",
        toConsole: false
      }
    }
  },
});
