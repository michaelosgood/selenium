const { Builder, By, Key, actions, until } = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

const firefoxStgPublic = async function() {
    let driver = await new Builder().forBrowser('firefox').build();
        try {
            // Go to Publis Site and Verify Title
            console.log("Starting Admin Test in Chrome");
            await driver.get(environment.stg_public);
            console.log("Went to Staging's Public Site");
            await driver.sleep(6000); // Wait for page to load
            await driver.getTitle().then(function (title) {
                assert.equal(title, "Home | PrescribeWellness");
                console.log("Asserted title is: " + title);
            });
    
        }
        catch (err) {
            console.log(err);
        }
        finally {
            console.log("Test Completed!!");
            await driver.quit()
        }
    };

module.exports = firefoxStgPublic;