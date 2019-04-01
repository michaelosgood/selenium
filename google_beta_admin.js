const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to Admin User and Verify Title
        console.log("Starting Admin Test in Chrome");
        await driver.get(environment.beta);
        console.log("Went to Beta");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.beta_user);
        console.log("Entered username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.beta_password, Key.RETURN);
        console.log("Entered password and pressed 'Enter' √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 2043550011 - NPI: - - NCPDP: - - devSampleChainStore1");
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Clinical Calendar
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("Clicked on the calendar icon √");
        await driver.findElement(By.linkText('Clinical Calendar')).click();
        console.log("Selected 'Clinical Calendar' icon √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 2043550011 - NPI: - - NCPDP: - - devSampleChainStore");
            console.log("Asserted title for 'Clinical Calendar' page is: " + title );
        });

        // Verify Title for Social Calendar
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("Clicked on the calendar icon √");
        await driver.findElement(By.linkText('Social Calendar')).click();
        console.log("Selected 'Social Calendar' icon √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Social Calendar' page is: " + title );
        });

        // Verify Title for Custom Calendar
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("Clicked on the calendar icon √");
        await driver.findElement(By.linkText('Custom Calendar')).click();
        console.log("Selected 'Custom Calendar' icon √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Social Calendar' page is: " + title );
        });

        // Verify Title for 'Growth' Pt List
        await driver.findElement(By.linkText('Growth')).click();
        console.log("Selected 'Growth' √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Growth: Patients - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Growth' page is: " + title );
        });

        // Verify Title for 'StarWellness' Pt List
        await driver.findElement(By.linkText('StarWellness')).click();
        console.log("Selected 'StarWellness' √");
        await driver.findElement(By.linkText('Synchronization')).click();
        await driver.getTitle().then(function(title) {
            assert.equal(title, "StarWellness: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
        });

        // Verify Title for 'VaccineComplete' Pt List
        await driver.findElement(By.linkText('VaccineComplete')).click();
        console.log("Selected 'VaccineComplete' √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Vaccine Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'VaccineComplete' page is: " + title );
        });

        // Verify Title for 'PrescribeMedicare' Pt List
        await driver.findElement(By.linkText('PrescribeMedicare')).click();
        console.log("Selected 'PrescribeMedicare' √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Medicare Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
        });

        // Verify Title for 'PrescribeCare' Pt List
        await driver.findElement(By.linkText('PrescribeCare')).click();
        console.log("Selected 'PrescribeCare' √");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "PrescribeCare: Patients with Encounters - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'PrescribeCare' page is: " + title );
        });

        // Send OnDemand via gear icon 
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
       // await driver.quit()
    }
})();