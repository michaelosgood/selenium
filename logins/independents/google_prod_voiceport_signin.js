const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function VoiceportSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating VoicePort Sign In Test in Chrome");
        await driver.get(environment.prod);
        console.log("Went to PROD");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.voiceport_user);
        console.log("Entered Voiceport username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.voiceport_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Voiceport user signed into PROD with Chrome");
    }
})();