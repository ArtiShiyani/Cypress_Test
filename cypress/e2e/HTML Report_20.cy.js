
/*Step for HTML REPORT SETUP

1.install cypress-mochawesome-reporter
    npm i --save-dev cypress-mochawesome-reporter

2.Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
3.Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register'; 

4. Run cypress

    npx cypress run --spec Relative path of file --headed */


