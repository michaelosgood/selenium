const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let titles = require('../../components/titles.js');
let assert = require("chai").assert;

(async function acctMgmt() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.prod);
        console.log("Went to Production");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(15000); 
        console.log("Waited 15 seconds");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Account Management')).click();
        console.log("Selected 'Account Managment'");
        await driver.sleep(6000); 
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.account_mgmt);
            console.log("Asserted title for 'Account Management' page is: " + title);
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User has been taken to 'Account Management'");
    }
})();