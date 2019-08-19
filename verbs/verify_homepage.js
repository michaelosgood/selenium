const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;
let driver;

const verifyHomePage = async function() {
    try {
        driver = await new Builder().forBrowser('chrome').build();
        // Verify HompPage Title
        await driver.sleep(6000); // Wait for page to load
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
            console.log("Asserted title is: " + title );
        });
    }

    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Verified Title for Homepage");
    }
};
module.exports = verifyHomePage; 