const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

const loginToStaging = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to User
        console.log("Starting Patient Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
    }

    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Logged into Staging");
    }
};
module.exports = loginToStaging; 