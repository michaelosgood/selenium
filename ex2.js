const {Builder, By, Key, until} = require('selenium-webdriver');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://web.prescribewellness.com');
    await driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
    await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#', Key.RETURN);
    await driver.findElement(By.id('pwTopGearIcon')).click();
    await driver.findElement(By.linkText('OnDemand')).click();
  } finally {
    // await driver.quit();
  }
})();