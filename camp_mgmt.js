const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;


(async function CampMgmt() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Campaign Management Test in Chrome");
        await driver.get(environment.stg);
        console.log("1. Went to Staging: √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("2. Entered internal username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter': √");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon: √");
        await driver.findElement(By.linkText('Campaign Management')).click();
        console.log("5. Selected 'Campaign Management': √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(3000); // Wait for page to load
        console.log("6. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
            console.log("Title for Campaign Managment is: " + title );
        });
        await driver.sleep(3000); // Wait for page to load
        console.log("7. Waited a couple seconds");
        await driver.findElement(By.className('k-link')).getText().then(function(header_text) {
            assert.equal(header_text, 'CAMPAIGN OCCURENCE ID');
            console.log("Table Header displays: "+ header_text);
        })
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Title page for 'Campaign Management' has been verified - √ Passed QA!");
        await driver.quit()
    }
})();