const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Logging into PROD as a Partner Admin using Firefox");
        await driver.get(environment.prod);
        console.log("Went to PROD");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.partner_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.partner_password, Key.RETURN);
        console.log("Entered password and clicked 'return'");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Parnter Admin user signed into PROD with Firefox");
    }
})();