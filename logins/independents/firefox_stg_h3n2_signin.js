const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating H3N2 Test in Firefox");
        await driver.get(environment.stg);
        console.log("Went to STG");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Customer user signed into STG with Firefox");
    }
})();