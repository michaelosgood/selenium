const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Logging into STG using Firefox");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.partner_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.partner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Partner user signed into Staging with Firefox");
    }
})();