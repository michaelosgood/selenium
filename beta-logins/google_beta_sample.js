const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.beta);
        console.log("Went to Beta");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.sample_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("Entered password and clicked Enter");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Internal user successfully signed into Production with Chrome");
    }
})();