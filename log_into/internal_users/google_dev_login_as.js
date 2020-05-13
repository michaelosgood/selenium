const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let titles = require('../../components/titles.js');
let assert = require("chai").assert;

(async function loginAs() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.dev);
        console.log("Went to DEV");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(15000); 
        console.log("Waited 15 seconds");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Login As')).click();
        console.log("Selected 'Login As'");
        await driver.sleep(6000); 
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.login_as);
            console.log("Title for 'Login As' is: " + title );
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User has been taken to 'Login As'");
    }
})();