const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let pt_search = require('../../components/patient_search.js');
let assert = require("chai").assert;

(async function pmp_2587() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.local);
        console.log("Went to LOCAL");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.chainPartner_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.chainPartner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(10000);
        console.log("Waited 10 seconds");
        await driver.getTitle().then(function (title) {
            assert.equal(title, "Enterprise Dashboard");
            console.log("Asserted title is: " + title);
        });

        // Use magnifying glass to search for 'Bagwell' and click on name
        await driver.findElement(By.className(pt_search.search)).click();
        console.log("Clicked on the search icon");
        await driver.findElement(By.className(pt_search.local_input)).sendKeys('Bagwell');
        console.log("Searched for Bagwell");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.findElement(By.className(pt_search.local_input)).click();
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.findElement(By.className(pt_search.local_button)).click();
        console.log("Clicked on 'Search' button");
        await driver.sleep(5000);
        console.log("Waited 5 seconds");
        await driver.findElement(By.className(pt_search.local_result)).click();
        await driver.sleep(5000);
        console.log("Waited 5 seconds");

        // Use magnifying glass to search for 'Bagwell' and click on name
        // await driver.findElement(By.className(pt_search.search)).click();
        // console.log("Clicked on the search icon");
        // await driver.findElement(By.className(pt_search.local_input)).sendKeys('Bagwell');
        // console.log("Searched for Bagwell");
        // await driver.findElement(By.className(pt_search.local_input)).click();
        // await driver.sleep(3000); // Wait for page to load
        // await driver.findElement(By.className(pt_search.button)).click();
        // console.log("Clicked on 'Search' button");
        // await driver.sleep(6000); // Wait for page to load
        // await driver.findElement(By.className(pt_search.result)).click();
        // await driver.sleep(6000); // Wait for page to load
        
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
        await driver.quit()
    }
})();
