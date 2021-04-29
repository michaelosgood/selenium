const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let assert = require("chai").assert;
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let pt_profile = require('../../components/patient_profile.js');
let login = require('../../components/login.js');
let pt_list = require('../../components/patient_list.js');
let titles = require('../../components/titles.js');


(async function dp_2184() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        
        console.log("\nStarting DP-2184 Test");
        await driver.get(environment.local);
        console.log("Went to LOCAL");

        // Login to User
        await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        
        //Verify Dashboard Title
        await driver.getTitle().then(function(title) {
            assert.equal(title, titles.independent_dashboard);
            console.log("Asserted title is: " + title );
        });
        
        // Click on the VC Patient List
        await driver.findElement(By.linkText(pt_list.vc)).click();
        console.log("Clicked on VaccineComplete patient list");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on the Not Vaccinated tab
        await driver.findElement(By.partialLinkText(pt_list.vc_notvaccinated)).click();
        console.log("Clicked on Not Vaccinated tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        
        // Click on the Vaccinated tab
        await driver.findElement(By.partialLinkText(pt_list.vc_vaccinated)).click();
        console.log("Clicked on Vaccinated sub-tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        
        // Click on the Declined tab
        await driver.findElement(By.partialLinkText(pt_list.vc_declined)).click();
        console.log("Clicked on Declined tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Go to Patient Profile
        await driver.get(pt_profile.local_link);
        console.log("Pull up the patient's profile");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Click on Vaccines tab
        await driver.findElement(By.linkText('Vaccines')).click();
        console.log("Clicked on Vaccines tab");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
})();