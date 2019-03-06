const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.stg);
        console.log("1. Went to Staging √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.sample_user);
        console.log("2. Entered internal username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter' √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - SampUser");
            console.log("Asserted title is: " + title );
        });
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("4. Clicked on the calendar icon √");
        await driver.findElement(By.linkText('Clinical Calendar')).click();
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Internal user successfully signed into Production with Chrome");
    }
})();