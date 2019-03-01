//-----CROSS BROWSER SIGN IN TEST -------------//
// Type 'mocha cross-broswer.js' in the command line and press 'Enter' on keyboard execute test
const assert = require('assert');

const {Browser, By, Key, until} = require('selenium-webdriver');
const {ignore, suite} = require('./node_modules/selenium-webdriver/testing');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

suite(function(env) {
  describe('Sign in to Staging', async function() {
    let driver;

    // env.builder() returns a Builder instance preconfigured for the
    // envrionment's target browser (you may still define browser specific
    // options if necessary (i.e. firefox.Options or chrome.Options)).
    //____CODE IS BELOW____Uncomment if needed
    // before(async function() {
    //   driver = await env.builder().build();
    // });

    it('DEMO 1: CROSS BROWSER TEST', async function() {
      driver = await env.builder().build();
      console.log("INITIATING CROSS BROWSER TEST");
      await driver.get(environment.stg);
      console.log("1. Went to Staging √");
      await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
      console.log("2. Entered username √");
      await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
      console.log("3. Entered password and clicked 'Enter' √");
      await driver.sleep(6000); // Wait for page to load
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
    });


  });
});
