const { Builder, By, Key, actions, until } = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

const fireforxProdAdmins = async function() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Login to Admin User and Verify Title
        console.log("Starting Admin Test in Firefox");
        await driver.get(environment.prod);
        console.log("Went to Production ");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
            console.log("Asserted title is: " + title);
        });

        // Message Management Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Message Management')).click();
        console.log("Selected 'Message Management'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for Message Managment is: " + title);
        });
        // Campaign Management Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Campaign Management')).click();
        console.log("Selected 'Campaign Managment'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Campaign Managment' page is: " + title);
        });

        // Login As Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Login As')).click();
        console.log("Selected 'Login As'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Login As - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Login As' page is: " + title);
        });

        // Template Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Template Management')).click();
        console.log("Selected 'Template Management'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Communication Templates - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Template Management' page is: " + title);
        });
        // User Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('User Management')).click();
        console.log("Selected 'User Management'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "User Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'User Management' page is: " + title);
        });
        // Account Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Account Management')).click();
        console.log("Selected 'Account Management'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Account Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Account Management' page is: " + title);
        });

        // Partner Managment Verify Title
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.linkText('Partner Management')).click();
        console.log("Selected 'Partner Management'");
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Partner Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Partner Management' page is: " + title);
        });

        // Logout of Admin
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon");
        await driver.findElement(By.className('btn-link')).click();
        console.log("Selected 'Logout'");

    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
};
module.exports = firefoxProdAdmins;