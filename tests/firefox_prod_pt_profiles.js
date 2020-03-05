const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let login = require("../components/login.js");
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let pt_profile = require('../components/patient_profile.js');
let titles = require('../components/titles.js');
let assert = require("chai").assert;

const firefoxProdPtProfiles = async function() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Go to Prod
        console.log("Starting Independent Pharmacy Patient Profile Test");
        await driver.get(environment.prod);
        console.log("Went to Production");

 // Login to User
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        
        //Verify Dashboard Title
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Go to Patient Profile
        await driver.get(pt_profile.prod_link);
        
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
        await driver.sleep(6000);
        console.log("Waited 6 seconds");

        // Click on Medicare tab 
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
        await driver.findElement(By.xpath("//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']")).click();
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
        console.log("Test Completed!!");
        await driver.quit()
    }
};
module.exports = firefoxProdPtProfiles;