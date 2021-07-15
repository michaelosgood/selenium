const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let login = require('../../gui/components/login.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered internal username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000); 
        console.log("Waited 5 seconds");

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Internal user signed into Dev with Chrome");
    }
})();