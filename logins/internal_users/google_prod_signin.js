const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let login = require('../../components/login.js');
let gear = require('../../components/gear.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.prod);
        console.log("Went to Production");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); 
        console.log("Waited 6 seconds");
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User has signed in");
    }
})();