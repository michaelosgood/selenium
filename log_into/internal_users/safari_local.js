const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('safari').build();
    try {
        console.log("Initiating Login Test in Safari");
        await driver.get(environment.local);
        console.log("Went to LOCAL");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(15000); 
        console.log("Waited 15 seconds");;
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Internal user signed into DEV with Safari");
    }
})();