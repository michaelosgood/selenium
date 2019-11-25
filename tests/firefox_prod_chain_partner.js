const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

const firefoxProdChainPartner = async function() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating Login Test in Firefox");
        await driver.get(environment.prod);
        console.log("Went to PROD");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.chainPartner_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.chainPartner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Verify Title for 'Active Patients' Page
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("Selected 'Active Patients'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Verify Title for 'Campaigns' Page
        await driver.findElement(By.linkText('Campaigns')).click();
        console.log("Selected 'Campaigns'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
};
module.exports = firefoxProdChainPartner;