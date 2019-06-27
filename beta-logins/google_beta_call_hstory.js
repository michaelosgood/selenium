const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

(async function callHist() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.beta);
        console.log("Went to Beta");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Call History')).click();
        console.log("Selected 'Call History'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Call History - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Call History' page is: " + title);
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User has been taken to 'Call History'");
    }
})();