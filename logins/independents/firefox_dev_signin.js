const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function FirefoxSignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating Firefox DEV Test");
        await driver.get(environment.dev);
        console.log("Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'return'");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Internal user signed into DEV using Firefox");
    }
})();