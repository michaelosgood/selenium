const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function VoiceportSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating VoicePort Sign In Test in Chrome");
        await driver.get(environment.local);
        console.log("Went to LOCAL");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.voiceport_user);
        console.log("Entered VoicePort username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.voiceport_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Voiceport user signed into DEV with Chrome");
    }
})();