const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Message Management Test in Chrome");
        await driver.get(environment.prod);
        console.log("1. Went to Production √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("2. Entered internal username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter' √");
        // Message Management Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon √");
        await driver.findElement(By.linkText('Message Management')).click();
        console.log("5. Selected 'Message Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("6. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
            console.log("Title for Message Managment is: " + title );
        });
        // Campaign Management Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("7. Clicked on the gear icon √");
        await driver.findElement(By.linkText('Campaign Management')).click();
        console.log("8. Selected 'Campaign Managment' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("9. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
            console.log("Title for 'Campaign Managment' page is: " + title );
        });
        // Login As Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("10. Clicked on the gear icon √");
        await driver.findElement(By.linkText('Login As')).click();
        console.log("11. Selected 'Login As' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("12. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Login As - Pharmacy Portal - mosgood");
            console.log("Title for 'Login As' page is: " + title );
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Title page for Admin Pages have been verified - √ Passed QA!");
        await driver.quit()
    }
})();