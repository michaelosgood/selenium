const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

(async function ptProfileTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to Admin User and Verify Title
        console.log("Starting Admin Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging ");

        // Login to H3N2 and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });
        
        // Verify Title for Active Patients page
        // await driver.findElement(By.linkText('Active Patients')).click();
        // console.log("Clicked on 'Active Patients'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title is: " + title );
        // });

        // Verify Title for Drugs page
        // await driver.findElement(By.linkText('Drugs')).click();
        // console.log("Clicked on 'Drugs'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title is: " + title );
        // });

        // Verify Title for Diseases page
        // await driver.findElement(By.linkText('Diseases')).click();
        // console.log("Clicked on 'Diseases'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title is: " + title );
        // });

         // Verify Title for Physicians page
        //  await driver.findElement(By.linkText('Physicians')).click();
        //  console.log("Clicked on 'Physicians'");
        //  await driver.sleep(6000); // Wait for page to load
        //  await driver.getTitle().then(function(title) {
        //      assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //      console.log("Asserted title is: " + title );
        //  });

         // Verify Title for Physician Groups page
        //  await driver.findElement(By.linkText('Physician Groups')).click();
        //  console.log("Clicked on 'Physician Groups'");
        //  await driver.sleep(6000); // Wait for page to load
        //  await driver.getTitle().then(function(title) {
        //      assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //      console.log("Asserted title is: " + title );
        //  });

        // Verify Title for Clinical Calendar
        // await driver.findElement(By.className('fa-calendar')).click();
        // console.log("Clicked on the calendar icon");
        // await driver.findElement(By.linkText('Clinical Calendar')).click();
        // console.log("Selected 'Clinical Calendar' icon");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'Clinical Calendar' page is: " + title );
        // });

        // Verify Title for Social Calendar
        // await driver.findElement(By.className('fa-calendar')).click();
        // console.log("Clicked on the calendar icon");
        // await driver.findElement(By.linkText('Social Calendar')).click();
        // console.log("Selected 'Social Calendar' icon");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'Social Calendar' page is: " + title );
        // });

        // Verify Title for Custom Calendar
        // await driver.findElement(By.className('fa-calendar')).click();
        // console.log("Clicked on the calendar icon");
        // await driver.findElement(By.linkText('Custom Calendar')).click();
        // console.log("Selected 'Custom Calendar' icon");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'Social Calendar' page is: " + title );
        // });

        // Verify Title for 'Growth' Pt List
        // await driver.findElement(By.linkText('Growth')).click();
        // console.log("Selected 'Growth'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Growth: Patients - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'Growth' page is: " + title );
        // });

        // Verify Title for 'StarWellness' Pt List
        // await driver.findElement(By.linkText('StarWellness')).click();
        // console.log("Selected 'StarWellness'");
        // await driver.findElement(By.linkText('Synchronization')).click();
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "StarWellness: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
        // });

        // Verify Title for 'VaccineComplete' Pt List
        // await driver.findElement(By.linkText('VaccineComplete')).click();
        // console.log("Selected 'VaccineComplete'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Vaccine Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'VaccineComplete' page is: " + title );
        // });

        // Verify Title for 'PrescribeMedicare' Pt List
        // await driver.findElement(By.linkText('PrescribeMedicare')).click();
        // console.log("Selected 'PrescribeMedicare'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "Medicare Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
        // });

        // Verify Title for 'PrescribeCare' Pt List
        // await driver.findElement(By.linkText('PrescribeCare')).click();
        // console.log("Selected 'PrescribeCare'");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, "PrescribeCare: Patients with Encounters - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
        //     console.log("Asserted title for 'PrescribeCare' page is: " + title );
        // });

        // Use magnifying glass to search for 'Allen' and click on name
        await driver.findElement(By.className('fa-search')).click();
        console.log("Clicked on the search icon");
        await driver.findElement(By.className('o-kd-autocomplete-input o-search-icon c-kd__input u-input-chicklet-none karmadata__o-kd-autocomplete-input___30sJ9 karmadata__c-kd__input___1_1Yx karmadata__u-input-chicklet-none___15ugP')).sendKeys('Allen');
        console.log("Searched for Allen");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.className('o-options__option karmadata__o-options__option___2aNDg')).click();
        console.log("Selected on Carl Allen");
        await driver.sleep(6000); // Wait for page to load

        // Click on Medication tab and respective sub-tabs
        await driver.findElement(By.linkText('Medications')).click();
        console.log("Clicked on Medication tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Patient-Reported Medication')).click();
        console.log("Clicked on Patient-Reported Medication");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Medication Allergies')).click();
        console.log("Clicked on Medication Allergies");
        await driver.sleep(6000); // wait for page to load
        
        await driver.findElement(By.linkText('Medication History')).click();
        console.log("Clicked on Medication History");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Med Time Reminders')).click();
        console.log("Clicked on Med Time Reminders");
        await driver.sleep(6000); // wait for page to load

        // Click on Medicare tab 
        await driver.findElement(By.linkText('Medicare')).click();
        console.log("Clicked on Medicare tab");
        await driver.sleep(10000); // wait for page to load

        // Click on Vaccines tab
        await driver.findElement(By.linkText('Vaccines')).click();
        console.log("Clicked on Vaccines tab");
        await driver.sleep(6000); // wait for page to load

        // Click on PrescribeCare tab
        // Commenting out for now because it's selecting the PrescribeCare from the pt list
        await driver.findElement(By.linkText('PrescribeCare')).click();
        console.log("Clicked on PrescribeCare tab");
        await driver.sleep(6000); // wait for page to load

        // Click on Care Campaigns tab
        await driver.findElement(By.linkText('Care Campaigns')).click();
        console.log("Clicked on Care Campaigns tab");
        await driver.sleep(6000); // wait for page to load

    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        //await driver.quit()
    }
})();