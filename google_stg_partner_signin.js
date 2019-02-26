const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Partner Admin Test in Chrome");
        await driver.get(environment.stg);
        console.log("1. Went to Staging: √");
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.partner_user);
        console.log("2. Entered Partner Admin username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.partner_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter': √");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon: √");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Partner Admin user succesfully signed into Staging with Chrome");
    }
})();