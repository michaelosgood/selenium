const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function CustomerSignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get(environment.stg);
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internalOne_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internalOne_password, Key.RETURN);
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Customer user signed into Staging with Firefox");
    }
})();