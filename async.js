const {Builder, By, until} = require('selenium-webdriver');

promise.USE_PROMISE_MANAGER = false;

describe('Google Search', function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('example', async function() {
    await driver.get('https://www.google.com/ncr');

    await driver.findElement(By.name('q')).sendKeys('webdriver');
    await driver.findElement(By.name('btnK')).click();

    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  });
});