const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../gui/components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function stgEdenSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.betaEden_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.betaEden_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Eden user signed in with Chrome");
    }
})();