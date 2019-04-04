const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to H3N2 and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.sample_user);
        console.log("Entered username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter': √");
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
       // await driver.quit()
    }
})();