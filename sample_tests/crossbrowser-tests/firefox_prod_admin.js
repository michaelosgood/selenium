const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Login to Admin User and Verify Title
        console.log("Starting Admin Test in Firefox");
        await driver.get(environment.prod);
        console.log("Went to PROD");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
            console.log("Asserted title is: " + title );
        });
        
        // Message Management Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Message Management')).click();
        console.log("Selected 'Message Management'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(3000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for Message Managment is: " + title );
        });
        // Campaign Management Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Campaign Management')).click();
        console.log("Selected 'Campaign Managment'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(3000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Campaign Managment' page is: " + title );
        });

        // Login As Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Login As')).click();
        console.log("Selected 'Login As'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(3000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Login As - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Login As' page is: " + title );
        });

        // Template Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Template Management')).click();
        console.log("Selected 'Template Management'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(3000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Communication Templates - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Template Management' page is: " + title );
        });
        // User Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('User Management')).click();
        console.log("Selected 'User Management'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(3000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "User Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'User Management' page is: " + title );
        }); 
         // Account Managment Verify Title
         await driver.findElement(By.id('pwTopGearIcon')).click();
         console.log("Clicked on the gear icon");
         await driver.findElement(By.linkText('Account Management')).click();
         console.log("Selected 'Account Management'");
         await driver.findElement(By.className('k-pager-info k-label'));
         await driver.sleep(6000); // Wait for page to load
         console.log("Waited a couple seconds");
         await driver.getTitle().then(function(title) {
             assert.equal(title, "Account Management - Pharmacy Portal - mosgood");
             console.log("Asserted title for 'Account Management' page is: " + title );
         }); 

        // Partner Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Partner Management')).click();
        console.log("Selected 'Partner Management'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Partner Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Partner Management' page is: " + title );
        }); 

        // Logout of Admin
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Logout')).click();
        console.log("Selected 'Logout'");

        
        // Login to H3N2 and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Clinical Calendar
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("Clicked on the calendar icon");
        await driver.findElement(By.linkText('Clinical Calendar')).click();
        console.log("Selected 'Clinical Calendar' icon");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Clinical Calendar' page is: " + title );
        });

        // Verify Title for Social Calendar
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("Clicked on the calendar icon");
        await driver.findElement(By.linkText('Social Calendar')).click();
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        console.log("Selected 'Social Calendar' icon");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Social Calendar' page is: " + title );
        });

        // Verify Title for Custom Calendar
        await driver.findElement(By.className('fa-calendar')).click();
        console.log("Clicked on the calendar icon √");
        await driver.findElement(By.linkText('Custom Calendar')).click();
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        console.log("Selected 'Custom Calendar' icon");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Social Calendar' page is: " + title );
        });

        // Verify Title for 'Growth' Pt List
        await driver.findElement(By.linkText('Growth')).click();
        console.log("Selected 'Growth'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Growth: Patients - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'Growth' page is: " + title );
        });

        // Verify Title for 'StarWellness' Pt List
        await driver.findElement(By.linkText('StarWellness')).click();
        console.log("Selected 'StarWellness'");
        await driver.findElement(By.linkText('Synchronization')).click();
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "StarWellness: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
        });

        // Verify Title for 'VaccineComplete' Pt List
        await driver.findElement(By.linkText('VaccineComplete')).click();
        console.log("Selected 'VaccineComplete'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Vaccine Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'VaccineComplete' page is: " + title );
        });

        // Verify Title for 'PrescribeMedicare' Pt List
        await driver.findElement(By.linkText('PrescribeMedicare')).click();
        console.log("Selected 'PrescribeMedicare'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Medicare Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
        });

        // Verify Title for 'PrescribeCare' Pt List
        await driver.findElement(By.linkText('PrescribeCare')).click();
        console.log("Selected 'PrescribeCare'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "PrescribeCare: Patients with Encounters - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title for 'PrescribeCare' page is: " + title );
        });

        // Send OnDemand via gear icon 
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('OnDemand')).click();
        console.log("Selected 'OnDemand'");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.id('phone_numbers')).sendKeys('9494158370');
        console.log("Entered a phone number");
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