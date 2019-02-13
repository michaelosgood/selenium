const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.stg);
        console.log("1. Went to Staging");
       // await driver.manage().window().maximize();
       // console.log("2. Maximized the window");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("2. Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter'");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Results: Internal user signed into Staging with Chrome");
    }
})();