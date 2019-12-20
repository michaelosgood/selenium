const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let titles = require('../components/titles.js');
let assert = require("chai").assert;

const googleDevCache = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Login to User and Verify Title
        console.log("Starting Patient Test in Chrome");
        await driver.get(environment.dev);
        console.log("Went to DEV");

        // Login as a Chain Sample User and Verify Title
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.chainSample_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.chainSample_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_dashboard);
            console.log("Asserted title is: " + title );
        });
        
        // Verify Title for Active Patients page
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("Clicked on 'Active Patients'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_dashboard);
            console.log("Asserted title is: " + title );
        });

        // Verify Title for 'Growth' Pt List
        await driver.findElement(By.linkText('Growth')).click();
        console.log("Selected 'Growth'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_growth);
            console.log("Asserted title for 'Growth' page is: " + title );
        });

        // Verify Title for 'StarWellness' Pt List
        await driver.findElement(By.linkText('StarWellness')).click();
        console.log("Selected 'StarWellness'");
        await driver.findElement(By.linkText('Synchronization')).click();
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_starwellness);
            console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
        });

        // Verify Title for 'VaccineComplete' Pt List
        await driver.findElement(By.linkText('VaccineComplete')).click();
        console.log("Selected 'VaccineComplete'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_vaccines);
            console.log("Asserted title for 'VaccineComplete' page is: " + title );
        });

        // Verify Title for 'PrescribeMedicare' Pt List
        await driver.findElement(By.linkText('PrescribeMedicare')).click();
        console.log("Selected 'PrescribeMedicare'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_pmed);
            console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
        });

        // Verify Title for 'PrescribeCare' Pt List
        await driver.findElement(By.linkText('PrescribeCare')).click();
        console.log("Selected 'PrescribeCare'");
        await driver.sleep(10000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.chain_pcare);
            console.log("Asserted title for 'PrescribeCare' page is: " + title );
        });

    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
};
module.exports = googleDevCache;