const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get(environment.stg);
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.partner_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.partner_password, Key.RETURN);
        await driver.findElement(By.id('pwTopGearIcon')).click();
    } 
    catch(err) {
        console.log(err);
    }
})();