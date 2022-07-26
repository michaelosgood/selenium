const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let login = require("../../../gui/pages/login.js");
let credentials = require('../../../credentials.js');
let environment = require('../../../environment.js');
let pt_profile = require('../../../gui/pages/carl.js');
let home = require('../../../gui/pages/home.js');
let assert = require("chai").assert;
let start;
let stop; 

const pt_profile_test = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        start = new Date().getTime();
        console.log("Starting Patient Profile Test");
        await driver.get(environment.prod);
        console.log("Went to Production");
   
         // Login to PW Community and Verify Title
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Go to Patient Profile
        await driver.get(pt_profile.prod);
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.title);
            console.log("Asserted title");
        });
        
        // Click on the Overview tab
        await driver.findElement(By.linkText(pt_profile.o)).click();
        console.log("Clicked on Overview tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.title);
            console.log("Asserted title");
        });
        
        // Click on the Programs tab
        await driver.findElement(By.linkText(pt_profile.p)).click();
        console.log("Clicked on Programs sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.p_title);
            console.log("Asserted title");
        });
        
        // Click on the Medications tab
        await driver.get(pt_profile.prod_medsync);
        console.log("Clicked on Medication tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.meds_title);
            console.log("Asserted title");
        });
        
        // Patieint Repoted Meds subtab
        await driver.findElement(By.linkText(pt_profile.prm)).click();
        console.log("Clicked on Patient-Reported Medication sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.meds_title);
            console.log("Asserted title");
        });
        
        // Medication Allergies subtab
        await driver.findElement(By.linkText(pt_profile.ma)).click();
        console.log("Clicked on Medication Allergies sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.meds_title);
            console.log("Asserted title");
        });
        
        // Medication History subtab
        await driver.findElement(By.linkText(pt_profile.mh)).click();
        console.log("Clicked on Medication History sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.meds_title);
            console.log("Asserted title");
        });
        
        // Med Time Reminder subtab
        await driver.findElement(By.linkText(pt_profile.mtr)).click();
        console.log("Clicked on Med Time Reminders sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.meds_title);
            console.log("Asserted title");
        });
        
        // MedWise™ tab
        await driver.findElement(By.linkText(pt_profile.mw)).click();
        console.log("Clicked on MedWise™ tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.mw_title);
            console.log("Asserted title");
        });                            

        // Medicare tab 
        await driver.findElement(By.linkText(pt_profile.m)).click();
        console.log("Clicked on Medicare tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.m_title);
            console.log("Asserted title");
        });

        // Vaccines tab
        await driver.get('https://web.prescribewellness.com/Patient/Vaccinations?patientId=AB6002230683436188168042F8DF9D88&timer=true');
        console.log("Went to Vaccines tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.v_title);
            console.log("Asserted title");
        });
        

        // eCare tab
        await driver.get('https://web.prescribewellness.com/Patient/eCarePlans?patientId=AB6002230683436188168042F8DF9D88&timer=true');
        console.log("Went to eCare tab");
         await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.ec_title);
            console.log("Asserted title");
        });

        // Care Campaigns tab
        await driver.findElement(By.linkText(pt_profile.cc)).click();
        console.log("Clicked on Care Campaigns tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.cc_title);
            console.log("Asserted title");
        });

        // Communications tab 
        await driver.findElement(By.linkText(pt_profile.c)).click();
        console.log("Clicked on Communications tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.c_title);
            console.log("Asserted title");
        });
        
        // Fax History subtab
        await driver.findElement(By.linkText(pt_profile.fh)).click();
        console.log("Clicked on Fax History sub-tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.c_title);
            console.log("Asserted title");
        });

        // Log tab
        await driver.findElement(By.linkText(pt_profile.l)).click();
        console.log("Clicked on Log tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_profile.l_title);
            console.log("Asserted title");
        });
        
    }
    catch(err) {
        console.log(err);
    }

    finally {
        stop = new Date().getTime();
        let totalTime = (stop - start);
        console.log("Pt Profile Test Time = " +  (totalTime / 1000 ) + " seconds\n");
        await driver.quit()
    }
};
module.exports = pt_profile_test;