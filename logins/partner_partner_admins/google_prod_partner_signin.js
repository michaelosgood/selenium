const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.prod);
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.partner_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.partner_password, Key.RETURN);
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.id('pwTopGearIcon')).click();
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Parnter Admin user signed into Production with Chrome");
    }
})();