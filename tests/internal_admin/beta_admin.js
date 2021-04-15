const { Builder, By, Key, actions, until } = require('selenium-webdriver');
let assert = require("chai").assert;
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let gear = require('../../gui/components/gear.js');
let login = require("../../gui/pages/login.js");
let start ;
let stop ; 
let titles = require('../../gui/components/titles.js');

const admin_test = async function() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        start = new Date().getTime();
        console.log("Starting Admin Test");
        await driver.get(environment.beta);
        console.log("Went to Beta");
        
        // Login to User and Verify Title
        await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.dashboard);
            console.log("Asserted title");
        });

       // Message Management Verify Title
       await driver.get("https://beta-web.prescribewellness.com/MessageManagement");
       console.log("Went to Message Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.msg_mgmt);
           console.log("Asserted title");
       });

       // Template Managment Verify Title
       await driver.get('https://beta-web.prescribewellness.com/CommunicationTemplates');
       console.log("Went to Template Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.template_mgmt);
           console.log("Asserted title");
       });

       // Campaign Management Verify Title
       await driver.get('https://beta-web.prescribewellness.com/CampaignManagement');
       console.log("Went to Campaign Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_mgmt);
           console.log("Asserted title");
       });

       // Communication Plan Templates Verify Title
       await driver.get('https://beta-web.prescribewellness.com/CampaignManagement/CommPlanTemplates');
       console.log("Went to Communication Plan Templates");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.comm_plan);
           console.log("Asserted title");
       });

       // Bulk Campaign Management
       await driver.get('https://beta-web.prescribewellness.com/BulkCampaignManagement');
       console.log("Went to Campaign Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.bulk);
           console.log("Asserted title");
       });

       // Mass Operations
       await driver.get('https://beta-web.prescribewellness.com/Admin/BatchOperation');
       console.log("Went to Mass Operations");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.mass_ops);
           console.log("Asserted title");
       });

       // Campaign Tools Verify Title
       await driver.get('https://beta-web.prescribewellness.com/CampaignManagement/CampaignTools');
       console.log("Went to Campaign Tools");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Campaign Template Editor
       await driver.findElement(By.linkText(gear.camp_tools_cte)).click();
       console.log("Selected 'Campaign Template Editor'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Campaign Category Management
       await driver.findElement(By.linkText(gear.camp_tools_ccm)).click();
       console.log("Selected 'Campaign Category Management'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Test Criteria
       await driver.findElement(By.linkText(gear.camp_tools_ct)).click();
       console.log("Selected 'Test Criteria'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Criteria Parameters
       await driver.findElement(By.linkText(gear.camp_tools_cp)).click();
       console.log("Selected 'Criteria Parameters'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Scrubbed Contacts
       await driver.findElement(By.linkText(gear.camp_tools_sc)).click();
       console.log("Selected 'Scrubbed Contacts'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Twilio Logs
       await driver.findElement(By.linkText(gear.camp_tools_tl)).click();
       console.log("Selected 'Twilio Logs'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - API Health Check
       await driver.findElement(By.linkText(gear.camp_tools_ahc)).click();
       console.log("Selected 'API Health Check'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Campaign Tools - Machine Learning
       await driver.findElement(By.linkText(gear.camp_tools_ml)).click();
       console.log("Selected 'Machine Learning'");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.camp_tools);
           console.log("Asserted title");
       });

       // Call History Verify Title
       await driver.get('https://beta-web.prescribewellness.com/CallHistory');
       console.log("Went to Call History");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.call_history);
           console.log("Asserted title");
       });

       // Global NCL Management
       await driver.get('https://beta-web.prescribewellness.com/Ncl/Global');
       console.log("Went to Global NCL");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.global_ncl);
           console.log("Asserted title");
       });

       // Login As Verify Title
       await driver.get('https://beta-web.prescribewellness.com/Admin/AdminAccount/LoginAs');
       console.log("Went to Login As");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.login_as);
           console.log("Asserted title");
       });

       // User Managment Verify Title
       await driver.get('https://beta-web.prescribewellness.com/Admin/AdminAccount/UserManagement');
       console.log("Went to User Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.user_mgmt);
           console.log("Asserted title");
       });

       // Partner Managment Verify Title
       await driver.get('https://beta-web.prescribewellness.com/Admin/AdminPartner/PartnerManagement');
       console.log("Went to Partner Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.partner_mgmt);
           console.log("Asserted title");
       });

       // Account Managment Verify Title
       await driver.get('https://beta-web.prescribewellness.com/Admin/AdminDealer/DealerManagement');
       console.log("Went to Account Management");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.account_mgmt);
           console.log("Asserted title");
       });

       // Settings Verify Title
       await driver.get('https://beta-web.prescribewellness.com/Account/Manage#information');
       console.log("Went to Settings");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");
       await driver.getTitle().then(function (title) {
           assert.equal(title, titles.settings);
           console.log("Asserted title");
       });

    }
    catch (err) {
        console.log(err);
    }
    finally {
        stop = new Date().getTime();
        let totalTime = (stop - start);
        console.log("Admin Test Time = " +  (totalTime / 1000 ) + " seconds\n");
        await driver.quit()
    }
};
module.exports = admin_test;