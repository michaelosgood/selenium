const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../gui/components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let assert = require("chai").assert;

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.stg_rebranding);
        console.log("Went to Staging Rebranding");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.sample_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.sample_password, Key.RETURN);
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
  
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Sample user signed into Staging with Chrome");
    }
})();