const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let login = require('../components/login.js');
let pt_profile = require('../components/patient_profile.js');
let assert = require("chai").assert;

const googleDevChainPartner = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Starting Chain Partner Test");
        await driver.get(environment.dev);
        console.log("Went to Dev");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.chainPartner_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.chainPartner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Verify Title for 'Active Patients' Page
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("Selected 'Active Patients'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Verify Title for 'Campaigns' Page
        await driver.findElement(By.linkText('Campaigns')).click();
        console.log("Selected 'Campaigns'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Go to Patient Profile
        await driver.get(pt_profile.dev_chain_link);
        console.log("Went to the patient's profile")
        await driver.sleep(8000);
        console.log("Waited 8 seconds");

        // Click on the Overview tab
        await driver.findElement(By.linkText('Overview')).click();
        console.log("Clicked on Overview tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on the Programs tab
        await driver.findElement(By.linkText('Programs')).click();
        console.log("Clicked on Programs sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on the 'Medications' tab
        await driver.findElement(By.linkText('Medications')).click();
        console.log("Clicked on Medication tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        await driver.findElement(By.linkText('Patient-Reported Medication')).click();
        console.log("Clicked on Patient-Reported Medication sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        await driver.findElement(By.linkText('Medication Allergies')).click();
        console.log("Clicked on Medication Allergies sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        await driver.findElement(By.linkText('Medication History')).click();
        console.log("Clicked on Medication History sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        await driver.findElement(By.linkText('Med Time Reminders')).click();
        console.log("Clicked on Med Time Reminders sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on the Medicare tab
        await driver.findElement(By.linkText('Medicare')).click();
        console.log("Clicked on Medicare tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on Vaccines tab
        await driver.findElement(By.linkText('Vaccines')).click();
        console.log("Clicked on Vaccines tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on PrescribeCare tab
        await driver.findElement(By.xpath("//a[@href = '/Patient/PrescribeCare?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true']")).click();
        console.log("Clicked on PrescribeCare tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on Care Campaigns tab
        await driver.findElement(By.linkText('Care Campaigns')).click();
        console.log("Clicked on Care Campaigns tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on Communications tab and respective sub-tabs
        await driver.findElement(By.linkText('Communications')).click();
        console.log("Clicked on Communications tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        await driver.findElement(By.linkText('Fax History')).click();
        console.log("Clicked on Fax History sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on Log tab
        await driver.findElement(By.linkText('Log')).click();
        console.log("Clicked on Log tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds"); 
        
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!\n");
        await driver.quit()
    }
};
module.exports = googleDevChainPartner;