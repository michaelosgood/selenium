const { Builder, By, Key, actions, until } = require('selenium-webdriver');
let login = require('../components/login.js');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let titles = require('../components/titles.js');
let gear = require('../components/gear.js');
let assert = require("chai").assert;

const firefoxProdAdmins = async function() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Login to Admin User and Verify Title
        console.log("Starting Internal Admin Test");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.dashboard);
            console.log("Asserted title is: " + title);
        });

        // Message Management Verify Title
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.msg_mgmt)).click();
        console.log("Selected 'Message Management'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.msg_mgmt);
            console.log("Asserted title for Message Managment is: " + title);
        });

        // Template Managment Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.temp_mgmt)).click();
        console.log("Selected 'Template Management'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.template_mgmt);
            console.log("Asserted title for 'Template Management' page is: " + title);
        });

        // Campaign Management Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.camp_mgmt)).click();
        console.log("Selected 'Campaign Managment'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.camp_mgmt);
            console.log("Asserted title for 'Campaign Managment' page is: " + title);
        });

        // Login As Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.login_as)).click();
        console.log("Selected 'Login As'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.login_as);
            console.log("Asserted title for 'Login As' page is: " + title);
        });


        // User Managment Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.user_mgmt)).click();
        console.log("Selected 'User Management'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.user_mgmt);
            console.log("Asserted title for 'User Management' page is: " + title);
        });

        // Account Managment Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.acct_mgmt)).click();
        console.log("Selected 'Account Management'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.account_mgmt);
            console.log("Asserted title for 'Account Management' page is: " + title);
        });

        // Partner Managment Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.partner_mgmt)).click();
        console.log("Selected 'Partner Management'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.partner_mgmt);
            console.log("Asserted title for 'Partner Management' page is: " + title);
        });

        // Call History Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.call_history)).click();
        console.log("Selected 'Call History'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.call_history);
            console.log("Asserted title for 'Call History' page is: " + title);
        });

        // Campaign Tools Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.camp_tools)).click();
        console.log("Selected 'Campaign Tools'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.camp_tools);
            console.log("Asserted title for 'Campaigns Tools' page is: " + title);
        });

        // Settings Verify Title
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText(gear.settings)).click();
        console.log("Selected 'Settings'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, titles.settings);
            console.log("Asserted title for 'Settings' page is: " + title);
        });

        // Logout of Admin
        await driver.findElement(By.id(gear.icon)).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.id(gear.logout)).click();
        console.log("Selected 'Logout'");

    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!\n");
        await driver.quit()
    }
};
module.exports = firefoxProdAdmins;