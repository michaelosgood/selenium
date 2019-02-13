const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function FirefoxSignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating Firefox Staging Test");
        await driver.get(environment.stg);
        console.log("1. Went to Staging √");
        await driver.manage().window().maximize();
        console.log("2.Maximized the window √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("3 Entered username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("4. Entered password and clicked 'return' √");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Internal successfully signed into Staging using Firefox");
    }
})();