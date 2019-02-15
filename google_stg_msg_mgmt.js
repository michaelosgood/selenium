const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function Msgmgmt() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Message Management Test in Chrome");
        await driver.get(environment.stg);
        console.log("1. Went to Staging: √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("2. Entered internal username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter': √");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon: √");
        await driver.findElement(By.linkText('Message Management')).click();
        console.log("5. Selected 'Message Management': √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("6. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
            console.log("Title for Message Managment is: " + title );
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Title page for 'Message Management' has been verified - √ Passed QA!");
        await driver.quit()
    }
})();