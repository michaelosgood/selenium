const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.prod);
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.voiceport_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.voiceport_password, Key.RETURN);
        await driver.findElement(By.id('pwTopGearIcon')).click();
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Voiceport user signed into Production with Chrome");
    }
})();