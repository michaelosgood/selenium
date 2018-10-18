const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https:/web.prescribewellness.com/');
    await driver.findElement(By.id('mbr-uid'));sendKeys('h3n2@prescribewellness.com');
    await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#');
    await driver.wait(10000);
  } finally {
    await driver.quit();
  }
})();