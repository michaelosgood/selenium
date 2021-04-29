const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function chainSampleSignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating Login Test in Firefox");
        await driver.get(environment.local);
        console.log("Went to LOCAL");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.chainSample_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.chainSample_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Chain Sample user signed in with Firefox");
    }
})();