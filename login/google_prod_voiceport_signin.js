const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.prod);
        console.log("Went to Production");
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.voiceport_user);
        console.log("Entered voiceport username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.voiceport_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Voiceport user signed into Production with Chrome");
    }
})();