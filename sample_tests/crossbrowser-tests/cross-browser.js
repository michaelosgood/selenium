//-----CROSS BROWSER SIGN IN TEST -------------//
// Type 'mocha cross-broswer.js' in the command line and press 'Enter' on keyboard execute test
const assert = require('assert');

const {Browser, By, Key, until} = require('selenium-webdriver');
const {ignore, suite} = require('selenium-webdriver/testing');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

suite(function(env) {
    describe('Sign in to Production, go to msg mgmt, & verify title', async function() {
        beforeEach(function(done) {
            this.timeout(30000); // A very long environment setup.
            setTimeout(done, 2500);
          });
          let driver = await env.builder().build();
          try {
            console.log("INITIATING CROSS BROWSER TEST");
            await driver.get(environment.prod);
            console.log("1. Went to PROD");
            await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
            console.log("2. Entered username");
            await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
            console.log("3. Entered password and clicked 'Enter'");
            await driver.sleep(5000); // Wait for page to load
            await driver.findElement(By.id('pwTopGearIcon')).click();
            console.log("4. Clicked on the gear icon");
            await driver.findElement(By.linkText('Message Management')).click();
            console.log("5. Selected 'Message Management'");
            await driver.findElement(By.className('k-pager-info k-label'));
            await driver.sleep(4000); // Wait for page to load
            console.log("6. Waited a couple seconds");
            await driver.getTitle().then(function(title) {
                assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
                console.log("Title for Message Managment is: " + title );
                });
          }
          catch(err) {
            console.log(err);
          }
          finally {
            console.log("TEST COMPLETED");
            await driver.quit()
          }

    });
});
