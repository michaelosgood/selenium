const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating H3N2 Test in Chrome");
        await driver.get(environment.beta);
        console.log("Went to BETA");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Customer user signed into DEV with Chrome");
    }
})();