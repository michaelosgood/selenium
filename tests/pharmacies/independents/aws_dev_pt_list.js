const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let assert = require("chai").assert;
let calendar = require('../../../gui/pages/calendar.js');
let credentials = require('../../../credentials.js');
let eld_hrm = require('../../../gui/pages/eld_hrm.js');
let ecare = require('../../../gui/pages/ecare.js');
let environment = require('../../../environment.js');
let home = require('../../../gui/pages/home.js');
let login = require('../../../gui/pages/login.js');
let medicare = require('../../../gui/pages/medicare.js');
let messages = require('../../../gui/pages/messages.js');
let opp = require('../../../gui/pages/opp.js');
let pt_comm = require('../../../gui/pages/pt_comm.js');
let sync = require('../../../gui/pages/sync.js');
let vaccinations = require('../../../gui/pages/vaccinations.js');
let start ;
let stop ; 


const pt_list_test = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        start = new Date().getTime();
        console.log("Starting Patient List Test");
        await driver.get(environment.aws_dev);
        console.log("Went to AWS");

        // Login to PW Community and Verify Title
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });
        
        //  Verify Title for Scheduled tab
        await driver.sleep(4000);
        console.log("Waited 4 seconds");
        await driver.findElement(By.partialLinkText(home.scheduled)).click();
        console.log("Clicked on 'Scheduled' tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        //  Verify Title for In Progress tab
        await driver.findElement(By.partialLinkText(home.in_progress)).click();
        console.log("Clicked on 'In Progress' tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        //  Verify Title for Not Connected tab
        await driver.findElement(By.partialLinkText(home.not_connected)).click();
        console.log("Clicked on 'Not Connected' tab");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Verify Title for Active Patients page
        await driver.findElement(By.linkText(home.act_pat)).click();
        console.log("Clicked on 'Active Patients'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Verify Title for Drugs page
        await driver.findElement(By.linkText(home.drugs)).click();
        console.log("Clicked on 'Drugs'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Verify Title for Physicians page
        await driver.findElement(By.linkText(home.phys)).click();
        console.log("Clicked on 'Physicians'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Verify Title for Physician Groups page
        await driver.findElement(By.linkText(home.phys_grp)).click();
        console.log("Clicked on 'Physician Groups'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });
           
        // Verify Title for Diseases page
        await driver.findElement(By.linkText(home.dis)).click();
        console.log("Clicked on 'Diseases'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, home.title);
            console.log("Asserted title");
        });

        // Verify Title for Patient Communications page
        await driver.findElement(By.linkText(pt_comm.pt_comm)).click();
        console.log("Clicked on 'Patient Communications'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, pt_comm.title);
            console.log("Asserted title");
        });

        // Verify Title for 'Med Sync' page
        await driver.get(sync.aws_dev);
        console.log("Went to 'Synchronization'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, sync.title);
            console.log("Asserted title");
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
        await driver.get(eld_hrm.aws_dev);
        console.log("Went to 'Elderly on HRM'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, eld_hrm.title);
            console.log("Asserted title");
        });

        // Verfiy Title for 'Vaccinations' page 'Rejected' tab
        await driver.get(vaccinations.aws_dev);
        console.log("Went to 'Vaccinations' page")
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, vaccinations.title);
            console.log("Asserted title");
        });

        // Verify title for Medicare Plan Reviews page
        await driver.findElement(By.linkText(medicare.txt)).click();
        console.log("Clicked on 'Medicare Plan Reviews'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, medicare.title);
            console.log("Asserted title");
        });

        // Verify title for eCare Plans page
        await driver.findElement(By.linkText(ecare.txt)).click();
        console.log("Clicked on 'eCare Plans'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, ecare.title);
            console.log("Asserted title");
        });
        
        // Verfiy title for Messages page
        await driver.findElement(By.linkText(messages.txt)).click();
        console.log("Clicked on 'Messages'");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, messages.title);
            console.log("Asserted title");
        });

        // Calendar
        await driver.get(calendar.aws_dev);
        console.log("Went to 'Clinical Calendar' page");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, calendar.title);
            console.log("Asserted title");
        });

        // Social Calendar
        await driver.get(calendar.aws_dev_social);
        console.log("Went to 'Social Calendar' page");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, calendar.title);
            console.log("Asserted title");
        });

        /// Custom Calendar
        await driver.get(calendar.aws_dev_custom);
        await driver.sleep(3000);
        console.log("Went to 'Custom Calendar' page");
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, calendar.title);
            console.log("Asserted title");
        });

        // Opportunities
        await driver.get(opp.aws_dev);
        console.log("Went to 'Opportunities' page");
        await driver.sleep(3000);
        console.log("Waited 3 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, opp.title);
            console.log("Asserted title");
        });


    }
    catch(err) {
        console.log(err);
    }
    finally {
       stop = new Date().getTime();
       let totalTime = (stop - start);
       console.log("Pt List Test Time = " +  (totalTime / 1000 ) + " seconds\n");
       await driver.quit()
    }
};
module.exports = pt_list_test;