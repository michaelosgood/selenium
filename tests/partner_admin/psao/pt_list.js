const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../../credentials.js');
let environment = require('../../../environment.js');
let login = require('../../../components/login.js');
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

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        stop = new Date().getTime();
        let totalTime = (stop - start);
        console.log("PSAO Parnter Test Time = " +  (totalTime / 1000 ) + " seconds\n");
        await driver.quit()
    }
};
module.exports = psao_partner;