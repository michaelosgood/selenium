const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating Admin Test in Firefox");
        await driver.get(environment.prod);
        console.log("1. Went to Production √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("2. Entered username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter' √");
        await driver.sleep(6000); // Wait for page to load
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
        // Template Managment
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("13. Clicked on the gear icon √");
        await driver.findElement(By.linkText('Template Management')).click();
        console.log("14. Selected 'Template Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("15. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Communication Templates - Pharmacy Portal - mosgood");
            console.log("Title for 'Template Management' page is: " + title );
        });
        // User Managment
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("16. Clicked on the gear icon √");
        await driver.findElement(By.linkText('User Management')).click();
        console.log("17. Selected 'User Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("18. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "User Management - Pharmacy Portal - mosgood");
            console.log("Title for 'User Management' page is: " + title );
        }); 
         // Account Managment
         await driver.findElement(By.id('pwTopGearIcon')).click();
         console.log("19. Clicked on the gear icon √");
         await driver.findElement(By.linkText('Account Management')).click();
         console.log("20. Selected 'Account Management' √");
         await driver.findElement(By.className('k-pager-info k-label'));
         await driver.sleep(6000); // Wait for page to load
         console.log("21. Waited a couple seconds");
         await driver.getTitle().then(function(title) {
             assert.equal(title, "Account Management - Pharmacy Portal - mosgood");
             console.log("Title for 'Account Management' page is: " + title );
         }); 
        // Partner Managment
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("22. Clicked on the gear icon √");
        await driver.findElement(By.linkText('Partner Management')).click();
        console.log("23. Selected 'Partner Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("24. Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Partner Management - Pharmacy Portal - mosgood");
            console.log("Title for 'Partner Management' page is: " + title );
        }); 
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Titles for Admin Pages have been verified - √ Passed QA!");
        await driver.quit()
    }
})();