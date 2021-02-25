const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let login = require("../../gui/pages/login.js");
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let pt_profile = require('../../gui/pages/patient_profile.js');
let home = require('../../gui/pages/home.js');
let assert = require("chai").assert;
let start ;
let stop ; 

const pt_profile_test = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        start = new Date().getTime();
        // Login to User and Verify Title
        console.log("Starting Rebranding Patient Profile Test");
        await driver.get(environment.stg_rebranding);
        console.log("Went to Staging Rebranding");
   
         // Login to PW Community and Verify Title
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Go to Patient Profile
        await driver.get(pt_profile.stg_link);
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        
        // Click on the Overview tab
        await driver.findElement(By.linkText('Overview')).click();
        console.log("Clicked on Overview tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        
        // Click on the Programs tab
        await driver.findElement(By.linkText('Programs')).click();
        console.log("Clicked on Programs sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        
        // Click on the 'Medications' tab
        // await driver.findElement(By.linkText('Medications')).click();
        await driver.get("https://stg-rebranding.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88");
        console.log("Clicked on Medication tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        await driver.findElement(By.linkText('Patient-Reported Medication')).click();
        console.log("Clicked on Patient-Reported Medication sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        await driver.findElement(By.linkText('Medication Allergies')).click();
        console.log("Clicked on Medication Allergies sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        await driver.findElement(By.linkText('Medication History')).click();
        console.log("Clicked on Medication History sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        await driver.findElement(By.linkText('Med Time Reminders')).click();
        console.log("Clicked on Med Time Reminders sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Click on MedWise™ Tab
        await driver.findElement(By.linkText('MedWise™')).click();
        console.log("Clicked on MedWise™ tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");                                    

        // Click on Medicare tab 
        await driver.findElement(By.linkText('Medicare')).click();
        console.log("Clicked on Medicare tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Click on Vaccines tab
        await driver.findElement(By.linkText('Vaccines')).click();
        console.log("Clicked on Vaccines tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Click on eCare tab
        await driver.findElement(By.xpath("//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']")).click();
        console.log("Clicked on Care tab");
         await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Click on Care Campaigns tab
        await driver.findElement(By.linkText('Care Campaigns')).click();
        console.log("Clicked on Care Campaigns tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Click on Communications tab and respective sub-tabs
        await driver.findElement(By.linkText('Communications')).click();
        console.log("Clicked on Communications tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        await driver.findElement(By.linkText('Fax History')).click();
        console.log("Clicked on Fax History sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");

        // Click on Log tab
        await driver.findElement(By.linkText('Log')).click();
        console.log("Clicked on Log tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
    }
    catch(err) {
        console.log(err);
    }

    finally {
        stop = new Date().getTime();
        let totalTime = (stop - start);
        console.log("Pt Profile Test Time = " +  (totalTime / 1000 ) + " seconds");
        await driver.quit()
    }
};
module.exports = pt_profile_test;