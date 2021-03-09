const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../../credentials.js');
let environment = require('../../../environment.js');
let login = require('../../../gui/pages/login.js');
let pt_profile = require('../../../gui/pages/lacy.js');
let assert = require("chai").assert;
let start ;
let stop ; 


const psao_partner = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        start = new Date().getTime();
        console.log("Starting PSAO Partner Test");
        await driver.get(environment.stg_rebranding);
        console.log("Went to Staging Rebranding");

        // Login to Enterprise Dashboard
        await driver.findElement(By.id(login.id)).sendKeys(credentials.partner_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.partner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title");
        });

        // Verify Title for 'Enterpise Active Patients' Page
        await driver.findElement(By.linkText('Enterprise Active Patients')).click();
        console.log("Selected 'Enterpise Active Patients'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title");
        }); 

        // // Go to Patient Profile
        // await driver.get("https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD");
        // console.log("Went to the patient's profile")
        // await driver.sleep(8000);
        // console.log("Waited 8 seconds");

        // // Click on the Overview tab
        // await driver.findElement(By.linkText(pt_profile.o)).click();
        // console.log("Clicked on Overview tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.title);
        //     console.log("Asserted title");
        // });
        
        // // Click on the Programs tab
        // await driver.findElement(By.linkText(pt_profile.p)).click();
        // console.log("Clicked on Programs sub-tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.p_title);
        //     console.log("Asserted title");
        // });
        
        // // Click on the Medications tab
        // await driver.get(pt_profile.stg_medsync);
        // console.log("Clicked on Medication tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.meds_title);
        //     console.log("Asserted title");
        // });
        
        // // Patieint Repotred Meds subtab
        // await driver.findElement(By.linkText(pt_profile.prm)).click();
        // console.log("Clicked on Patient-Reported Medication sub-tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.meds_title);
        //     console.log("Asserted title");
        // });
        
        // // Medication Allergies subtab
        // await driver.findElement(By.linkText(pt_profile.ma)).click();
        // console.log("Clicked on Medication Allergies sub-tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.meds_title);
        //     console.log("Asserted title");
        // });
        
        // // Medication History subtab
        // await driver.findElement(By.linkText(pt_profile.mh)).click();
        // console.log("Clicked on Medication History sub-tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.meds_title);
        //     console.log("Asserted title");
        // });
                           

        // // Medicare tab 
        // await driver.findElement(By.linkText(pt_profile.m)).click();
        // console.log("Clicked on Medicare tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.m_title);
        //     console.log("Asserted title");
        // });

        // // Vaccines tab
        // await driver.findElement(By.linkText(pt_profile.v)).click();
        // console.log("Clicked on Vaccines tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.v_title);
        //     console.log("Asserted title");
        // });

        // // eCare tab
        // await driver.get(pt_profile.stg_ecare);
        // console.log("Clicked on Care tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.ec_title);
        //     console.log("Asserted title");
        // });

        // // Care Campaigns tab
        // await driver.findElement(By.linkText(pt_profile.cc)).click();
        // console.log("Clicked on Care Campaigns tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.cc_title);
        //     console.log("Asserted title");
        // });

        // // Communications tab 
        // await driver.findElement(By.linkText(pt_profile.c)).click();
        // console.log("Clicked on Communications tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.c_title);
        //     console.log("Asserted title");
        // });
        
        // // Fax History subtab
        // await driver.findElement(By.linkText(pt_profile.fh)).click();
        // console.log("Clicked on Fax History sub-tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.c_title);
        //     console.log("Asserted title");
        // });

        // // Log tab
        // await driver.findElement(By.linkText(pt_profile.l)).click();
        // console.log("Clicked on Log tab");
        // await driver.sleep(3000);
        // console.log("Waited 3 seconds");
        // await driver.getTitle().then(function(title) {
        //     assert.equal(title, pt_profile.l_title);
        //     console.log("Asserted title");
        // });

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        stop = new Date().getTime();
        let totalTime = (stop - start);
        console.log("PSAO Partner Test Time = " +  (totalTime / 1000 ) + " seconds\n");
        await driver.quit()
    }
};
module.exports = psao_partner;