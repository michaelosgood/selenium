const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let login = require('../components/login.js');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let titles = require('../components/titles.js');
let nav = require('../gui/components/nav.js');
let assert = require("chai").assert;
let sync = require('../gui/pages/sync.js');

const googleStgRebrandingIndependents = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to User and Verify Title
        console.log("Starting Rebranding Patient List Test");
        await driver.get(environment.stg_rebranding);
        console.log("Went to Staging Rebranding");

        // Login to PW Community and Verify Title
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });
        
        //  Verify Title for Scheduled tab
        await driver.sleep(4000);
        console.log("Waited 4 seconds");
        await driver.findElement(By.partialLinkText('Scheduled')).click();
        console.log("Clicked on 'Scheduled' tab");
        await driver.sleep(4000);
        console.log("Waited 4 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        //  Verify Title for In Progress tab
        await driver.findElement(By.partialLinkText('In Progress')).click();
        console.log("Clicked on 'In Progress' tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        //  Verify Title for Not Connected tab
        await driver.findElement(By.partialLinkText('Not Connected')).click();
        console.log("Clicked on 'Not Connected' tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Active Patients page
        await driver.findElement(By.linkText(nav.act_pts)).click();
        console.log("Clicked on 'Active Patients'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Drugs page
        await driver.findElement(By.linkText(nav.drugs)).click();
        console.log("Clicked on 'Drugs'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Physicians page
        await driver.findElement(By.linkText(nav.physicians)).click();
        console.log("Clicked on 'Physicians'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Physician Groups page
        await driver.findElement(By.linkText(nav.physician_groups)).click();
        console.log("Clicked on 'Physician Groups'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title);
        });
           
        // Verify Title for Diseases page
        await driver.findElement(By.linkText(nav.diseases)).click();
        console.log("Clicked on 'Diseases'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for Patient Communications page
        await driver.findElement(By.linkText(nav.patient_communications)).click();
        console.log("Clicked on 'Patient Communications'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_pt_comm);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for 'Med Sync' page
        await driver.get(sync.url);
        console.log("Clicked on 'Synchronization'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, sync.title);
            console.log("Asserted title for 'Med Sync' page is: " + title );
        });
        // Enrolled Tab
        await driver.findElement(By.linkText(sync.enrolled)).click();
        console.log("Clicked on 'Enrolled' tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        // Resync Tab
        await driver.findElement(By.linkText(sync.resync)).click();
        console.log("Clicked on 'Resync' tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
         // UnEnrolled Tab
         await driver.findElement(By.linkText(sync.unenrolled)).click();
         console.log("Clicked on 'UnEnrolled' tab");
         await driver.sleep(3000);
         console.log("Waited 3 seconds");
          // Declined Tab
        await driver.findElement(By.linkText(sync.declined)).click();
        console.log("Clicked on 'Declined' tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Verify Title for 'Elderly on HRM' page
        // await driver.findElement(By.className('LeftNav_linkWrapper__QT16H')).click();
        // console.log("Clicked on 'Elderly on HRM");
        // await driver.sleep(5000);
        // console.log("Waited 5 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, titles.independent_dashboard);
        //     console.log("Asserted title for 'Med Sync' page is: " + title );
        // });


    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!\n");
        await driver.quit()
    }
};
module.exports = googleStgRebrandingIndependents;