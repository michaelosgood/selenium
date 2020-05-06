const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let assert = require("chai").assert;

(async function goToSwPatientList() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); 
        console.log("Waited for page to load");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: '" + title +"'");
        });
        await driver.findElement(By.linkText('StarWellness')).click();
        console.log("Clicked on the StarWellness link");
        await driver.findElement(By.linkText('Synchronization')).click();
        console.log("Clicked on the Synchronization link");
        await driver.sleep(6000); 
        console.log("Waited for page to load");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "StarWellness: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: '" + title +"'");
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User has been taken to the SW patient list"); 
    }
})();