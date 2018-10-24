const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://web.prescribewellness.com');
    await driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
    await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#', Key.RETURN);
    await driver.findElement(By.id('pwTopGearIcon')).click();
    await driver.findElement(By.linkText('OnDemand')).click();
    await driver.findElement(By.id('phone_numbers')).sendKeys('3036534679');
    await driver.findElement(By.css('.btn-pw')).click();
    await driver.findElement(By.css('.btn-select-campaign')).click();
    await driver.findElement(By.css('.btn-pw')).click();
  } finally {
    // Uncomment out when test script is complete
    // await driver.quit();
  }
})();