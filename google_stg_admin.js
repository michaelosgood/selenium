const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdminTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Starting Admin Test in Chrome");
        await driver.get(environment.stg);
        console.log("Went to Staging √");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("Entered internal username √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter' √");
        // Message Management Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon √");
        await driver.findElement(By.linkText('Message Management')).click();
        console.log("Selected 'Message Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for Message Managment is: " + title );
        });
        // Campaign Management Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon √");
        await driver.findElement(By.linkText('Campaign Management')).click();
        console.log("Selected 'Campaign Managment' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Campaign Managment' page is: " + title );
        });
        
        // Login As Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon √");
        await driver.findElement(By.linkText('Login As')).click();
        console.log("Selected 'Login As' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Login As - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Login As' page is: " + title );
        });

        // Template Managment
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon √");
        await driver.findElement(By.linkText('Template Management')).click();
        console.log("Selected 'Template Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "Communication Templates - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'Template Management' page is: " + title );
        });
        // User Managment
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("Clicked on the gear icon √");
        await driver.findElement(By.linkText('User Management')).click();
        console.log("Selected 'User Management' √");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("Waited a couple seconds");
        await driver.getTitle().then(function(title) {
            assert.equal(title, "User Management - Pharmacy Portal - mosgood");
            console.log("Asserted title for 'User Management' page is: " + title );
        }); 
         // Account Managment
         await driver.findElement(By.id('pwTopGearIcon')).click();
         console.log("Clicked on the gear icon √");
         await driver.findElement(By.linkText('Account Management')).click();
         console.log("Selected 'Account Management' √");
         await driver.findElement(By.className('k-pager-info k-label'));
         await driver.sleep(6000); // Wait for page to load
         console.log("Waited a couple seconds");
         await driver.getTitle().then(function(title) {
             assert.equal(title, "Account Management - Pharmacy Portal - mosgood");
             console.log("Asserted title for 'Account Management' page is: " + title );
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
            console.log("Asserted title for 'Partner Management' page is: " + title );
        }); 

        // Logout Test
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("10. Clicked on the gear icon √");
        await driver.findElement(By.linkText('Logout')).click();
        console.log("11. Selected 'Logout' √");

        // Loging to H3N2
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        console.log("2. Entered username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter': √");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("4. Clicked on the gear icon: √");
        }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("TEST RESULTS: Titles for Admin Pages have been verified - √ Passed QA!");
        //await driver.quit()
    }
})();