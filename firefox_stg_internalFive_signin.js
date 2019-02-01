const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function CustomerSignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get(environment.stg);
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internalFive_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internalFive_password, Key.RETURN);
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Internal 5 user signed into Staging with Firefox");
    }
})();