const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let login = require('../components/login.js');
let assert = require("chai").assert;

const googleProdPartnerPartner = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Starting Chain Partner Test");
        await driver.get(environment.prod);
        console.log("Went to Prod");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.partner_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.partner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(15000);
        console.log("Waited 15 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Verify Title for 'Active Patients' Page
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("Selected 'Active Patients'");
        await driver.sleep(6000);
        console.log("Waited 6 seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        }); 

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!\n");
        await driver.quit()
    }
};
module.exports = googleProdPartnerPartner;