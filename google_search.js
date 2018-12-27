const {Builder, By, Key, until} = require('selenium-webdriver');

(async function googleSearch() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('cheese', Key.RETURN);
    await driver.wait(until.titleIs('cheese - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();