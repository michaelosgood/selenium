const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

const example = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
      await driver.get(environment.prod);
      console.log("1. Went to Production √");
      await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.voiceport_user);
      console.log("2. Entered username √");
      await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.voiceport_password, Key.RETURN);
      console.log("3. Entered password and clicked 'Enter' √");
      await driver.getTitle().then(function(title) {
        assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 203742 - NPI: 5852489309 - NCPDP: 1111222 - VoicePort");
        console.log("Asserted title is: " + title );
    });
      await driver.findElement(By.id('pwTopGearIcon')).click();
      console.log("4. Clicked on the gear icon √");
  } 
  catch(err) {
      console.log(err);
  }
};
//example();
module.exports = example;