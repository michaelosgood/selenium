const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://web.prescribewellness.com');
    await driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
    await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 3000);
  } finally {
    await driver.quit();
  }
})();