const {Builder, By, Key, until} = require('selenium-webdriver');

(async function company() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
        await driver.get('https://www.prescribewellness.com/business/company');
        await driver.wait(until.titleIs('Company | PrescribeWellness'), 1000);
        await console.log('Title has been verified');

  } finally {
        await driver.quit();
  }
})();