const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let login = require('../../gui/components/login.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.prod);
        console.log("Went to Production");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000); 
        console.log("Waited 5 seconds");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User has signed in");
    }
})();