const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

(async function VoiceportSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating VoicePort Sign In Test in Chrome");
        await driver.get(environment.prod);
        console.log("1. Went to Production: √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.voiceport_user);
        console.log("2. Entered VoicePort username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.voiceport_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter': √");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon: √");
    } 
    catch(err) {
        console.log(err);
    }
})();