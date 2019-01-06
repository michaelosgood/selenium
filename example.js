const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

async function example() {
  let driver = await new Builder()
  .forBrowser('chrome')
  .build();

  await driver.get(environment.prod)
  await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user)
  await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN)
  await driver.findElement(By.id('pwTopGearIcon')).click()
  await takeScreenshot()
}
example();