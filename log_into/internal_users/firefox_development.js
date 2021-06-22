const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let login = require('../../gui/components/login.js');
let gear = require('../../gui/components/gear.js');
let assert = require("chai").assert;

(async function loginAs() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating Login Test in Firefox");
        await driver.get(environment.dev);
        console.log("Went to Development");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(15000); 
        console.log("Waited 15 seconds");
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.login_as)).click();
        console.log("Selected 'Login As'");
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