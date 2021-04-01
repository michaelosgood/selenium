const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let titles = require('../../components/titles.js');
let login = require('../../components/login.js');
let gear = require('../../components/gear.js');
let assert = require("chai").assert;

(async function loginAs() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(3000); 
        console.log("Waited 3 seconds");
        await driver.get("https://webstg.prescribewellness.com/Admin/AdminAccount/LoginAs");
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