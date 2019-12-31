const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let titles = require('../components/titles.js');
let pt_profile = require('../components/patient_profile.js');
let assert = require("chai").assert;

const googleStgCache = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to User and Verify Title
        console.log("Starting Patient Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to STG");

        // Login as a Customer User and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });
        
        // Verify Title for Active Patients page
        await driver.sleep(10000); // Wait for page to load
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("Clicked on 'Active Patients'");
        await driver.sleep(3000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for 'Growth' Pt List
        await driver.findElement(By.linkText('Growth')).click();
        console.log("Selected 'Growth'");
        await driver.sleep(3000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_growth);
            console.log("Asserted title for 'Growth' page is: " + title );
        });

        // Verify Title for 'StarWellness' Pt List
        await driver.findElement(By.linkText('StarWellness')).click();
        console.log("Selected 'StarWellness'");
        await driver.findElement(By.linkText('Synchronization')).click();
        await driver.sleep(3000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_starwellness);
            console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
        });

        // Verify Title for 'VaccineComplete' Pt List
        await driver.findElement(By.linkText('VaccineComplete')).click();
        console.log("Selected 'VaccineComplete'");
        await driver.sleep(3000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_vaccines);
            console.log("Asserted title for 'VaccineComplete' page is: " + title );
        });

        // Verify Title for 'PrescribeMedicare' Pt List
        await driver.findElement(By.linkText('PrescribeMedicare')).click();
        console.log("Selected 'PrescribeMedicare'");
        await driver.sleep(3000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_pmed);
            console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
        });

        // Verify Title for 'PrescribeCare' Pt List
        await driver.findElement(By.linkText('PrescribeCare')).click();
        console.log("Selected 'PrescribeCare'");
        await driver.sleep(3000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_pcare);
            console.log("Asserted title for 'PrescribeCare' page is: " + title );
        });

        // Go to Patient Profile
        await driver.get(pt_profile.stg_link);

        // Click on the Overview tab
        await driver.findElement(By.linkText('Overview')).click();
        console.log("Clicked on Overview tab");
        await driver.sleep(6000); // wait for page to load

        // Click on the Programs tab
        await driver.findElement(By.linkText('Programs')).click();
        console.log("Clicked on Programs sub-tab");
        await driver.sleep(6000); // wait for page to load

        // Click on the 'Medications' tab
        await driver.findElement(By.linkText('Medications')).click();
        console.log("Clicked on Medication tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Patient-Reported Medication')).click();
        console.log("Clicked on Patient-Reported Medication sub-tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Medication Allergies')).click();
        console.log("Clicked on Medication Allergies sub-tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Medication History')).click();
        console.log("Clicked on Medication History sub-tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Med Time Reminders')).click();
        console.log("Clicked on Med Time Reminders sub-tab");
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
        await driver.findElement(By.xpath("//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']")).click();
        console.log("Clicked on PrescribeCare tab");
        await driver.sleep(6000);

        // Click on Care Campaigns tab
        await driver.findElement(By.linkText('Care Campaigns')).click();
        console.log("Clicked on Care Campaigns tab");
        await driver.sleep(6000); // wait for page to load

        // Click on Communications tab and respective sub-tabs
        await driver.findElement(By.linkText('Communications')).click();
        console.log("Clicked on Communications tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Fax History')).click();
        console.log("Clicked on Fax History sub-tab");
        await driver.sleep(6000); // wait for page to load

        // Click on Log tab
        await driver.findElement(By.linkText('Log')).click();
        console.log("Clicked on Log tab");
        await driver.sleep(6000); // wait for page to load

    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
};
module.exports = googleStgCache;