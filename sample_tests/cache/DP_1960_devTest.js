const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require("../../components/login.js");
let pt_search = require("../../components/patient_search.js");
let filter = require("../../components/filter.js");
let pt_profile = require('../../components/patient_profile.js');
let titles = require('../../components/titles.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function chainSampleSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        
        // CHAIN SAMPLE
        console.log("Initiating DP-1960 A Test in Chrome");
        await driver.get(environment.dev);
        console.log("Went to Dev");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.chainSample_user);
        console.log("Entered username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.chainSample_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(10000);
        console.log("Waited 10 seconds for page to load");

       // Click on the Active Patients page
       await driver.findElement(By.linkText('Active Patients')).click();
       console.log("Clicked on Active Patients");
       await driver.sleep(10000);
       console.log("Waited 10 seconds");

       // Apply Filters
        //    await driver.findElement(By.id(filter.button)).click();
        //    console.log("Clicked on the 'Filters' button");
        //    await driver.sleep(3000);
        //    console.log("Waited 3 seconds");

        //    await driver.findElement(By.partialLinkText(filter.disease)).click();
        //    await driver.sleep(3000);
        //    console.log("Waited 3 seconds");

        //    await driver.findElement(By.partialLinkText(filter.hypertension)).click();
        //    await driver.sleep(3000);
        //    console.log("Waited 3 seconds");

        //    await driver.findElement(By.id(filter.apply)).click();
        //    await driver.sleep(10000);
        //    console.log("Waited 10 seconds");
       
       // Logout
       await driver.findElement(By.id('pwTopGearIcon')).click();
       console.log("Clicked on the gear icon");
       await driver.findElement(By.className('btn-link')).click();
       console.log("Selected 'Logout'");
       await driver.sleep(2000);
       console.log("Waited 2 seconds");

       // CHAIN PARTNER
       await driver.findElement(By.id(login.id)).sendKeys(credentials.chainPartner_user);
       console.log("Entered username");
       await driver.findElement(By.id(login.pw)).sendKeys(credentials.chainPartner_password, Key.RETURN);
       console.log("Entered password and clicked 'Enter'");
       await driver.sleep(10000);
       console.log("Waited 10 seconds");

       // Click on the Active Patients page
       await driver.findElement(By.linkText('Active Patients')).click();
       console.log("Clicked on Active Patients");
       await driver.sleep(3000);
       console.log("Waited 3 seconds");

       await driver.findElement(By.className(filter.update)).click();
       console.log("Clicked on Update button");
       await driver.sleep(10000);
       console.log("Waited 10 seconds");

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("DP-1960 Test has concluded");
        await driver.quit()
    }
})();