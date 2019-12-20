const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let pt_search = require('../components/patient_search.js');
let assert = require("chai").assert;

const googleStgPtProfiles = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to User and Verify Title
        console.log("Starting Patient Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging");

        // Login to H3N2 and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });
        
        // Use magnifying glass to search for 'Allen' and click on name
        await driver.sleep(3000); // Wait for page to load
        await driver.findElement(By.className(pt_search.search)).click();
        console.log("Clicked on the search icon");
        await driver.findElement(By.className(pt_search.input)).sendKeys('Allen');
        console.log("Searched for Allen");
        await driver.findElement(By.className(pt_search.input)).click();
        await driver.sleep(3000); // Wait for page to load
        await driver.findElement(By.className(pt_search.button)).click();
        console.log("Clicked on 'Search' button");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.className(pt_search.result)).click();
        await driver.sleep(6000); // Wait for page to load

        // Overview tab and respective sub-tabs
        await driver.sleep(8000); // wait for page to load
        await driver.findElement(By.linkText('Programs')).click();
        console.log("Clicked on Programs sub-tab");
        await driver.sleep(6000); // wait for page to load

        // Click on Medication tab and respective sub-tabs
        await driver.findElement(By.linkText('Medications')).click();
        console.log("Clicked on Medication tab");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Patient-Reported Medication')).click();
        console.log("Clicked on Patient-Reported Medication");
        await driver.sleep(6000); // wait for page to load

        await driver.findElement(By.linkText('Medication Allergies')).click();
        console.log("Clicked on Medication Allergies");
        await driver.sleep(10000); // wait for page to load

        await driver.findElement(By.linkText('Medication History')).click();
        console.log("Clicked on Medication History");
        await driver.sleep(10000); // wait for page to load

        await driver.findElement(By.linkText('Med Time Reminders')).click();
        console.log("Clicked on Med Time Reminders");
        await driver.sleep(10000); // wait for page to load

        // Click on Medicare tab 
        await driver.findElement(By.linkText('Medicare')).click();
        console.log("Clicked on Medicare tab");
        await driver.sleep(10000); // wait for page to load

        // Click on Vaccines tab
        await driver.findElement(By.linkText('Vaccines')).click();
        console.log("Clicked on Vaccines tab");
        await driver.sleep(10000); // wait for page to load

        // Click on PrescribeCare tab
        await driver.findElement(By.xpath("//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']")).click();
        console.log("Clicked on PrescribeCare tab");
        await driver.sleep(10000);

        // Click on Care Campaigns tab
        await driver.findElement(By.linkText('Care Campaigns')).click();
        console.log("Clicked on Care Campaigns tab");
        await driver.sleep(10000); // wait for page to load

        // Click on Communications tab
        await driver.findElement(By.linkText('Communications')).click();
        console.log("Clicked on Communications tab");
        await driver.sleep(10000); // wait for page to load

        // Click on Log tab
        await driver.findElement(By.linkText('Log')).click();
        console.log("Clicked on Log tab");
        await driver.sleep(60000); // wait for page to load
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
};
module.exports = googleStgPtProfiles;