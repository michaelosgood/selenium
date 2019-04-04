const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdhRingsTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Test in Chrome");
        await driver.get(environment.stg);
        console.log("1. Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.sample_user);
        console.log("2. Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter'");
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
       // await driver.quit()
    }
})();