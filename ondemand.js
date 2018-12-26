const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function ondemand() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(environment.prod);
    await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
    await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
    await console.log('Login Successful');
    await driver.findElement(By.id('pwTopGearIcon')).click();
    await driver.findElement(By.linkText('OnDemand')).click();
    await driver.findElement(By.id('phone_numbers')).sendKeys('3036534679');
    await console.log('Phone Number has been entered');
    await driver.findElement(By.css('.btn-pw')).click();
    await driver.findElement(By.tagName('button')).findElement(By.linkText('Select')).click();

  } finally {
    // Uncomment out when test script is complete
    // await driver.quit();
    //*[@id="onDemandModalWindowArea"]/div/div[2]/div/div/div[3]/div[3]/div[2]/div[1]/div[3]/button
    // #onDemandModalWindowArea > div > div.modal-dialog.ondemand-modal-dialog-wrapper > div > div > div.modal-demand-content > div.campaigns-table > div.campaigns-wrapper > div:nth-child(2) > div:nth-child(3) > button
    // <button type="button" class="btn btn-pw btn-select-campaign">Select</button>
  }
})();