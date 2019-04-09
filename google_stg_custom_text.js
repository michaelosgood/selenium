const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
       

        // Login to H3N2 and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter': √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });
        
        // Verify Title for Active Patients page
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("Clicked on 'Active Patients'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Drugs page
        await driver.findElement(By.linkText('Drugs')).click();
        console.log("Clicked on 'Drugs'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Diseases page
        await driver.findElement(By.linkText('Diseases')).click();
        console.log("Clicked on 'Diseases'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });

        // Send Custom OnDemand SMS via gear icon 
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon: √");
        await driver.findElement(By.linkText('OnDemand')).click();
        console.log("Selected 'OnDemand' √");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.id('phone_numbers')).sendKeys('9494158370');
        console.log("Entered a phone number √");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.css('.btn-pw')).click();
        console.log("Clicked on 'Next' button");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.css('.btn-select-campaign')).click();
        console.log("Clicked on 'Select' button");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.css('.fright')).click();
        console.log("Clicked on 'Send Message' button");
        await driver.sleep(6000); // Wait for page to load

    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
})();