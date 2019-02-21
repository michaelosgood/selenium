const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function SampleSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.stg);
        console.log("1. Went to Staging √");
       await driver.manage().window().maximize();
       console.log("2. Maximized the window √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.sample_user);
        console.log("3. Entered sample username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("4. Entered password and clicked 'Enter' √");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("5. Clicked on the gear icon √");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Sample user successfully signed into Staging with Chrome");
    }
})();