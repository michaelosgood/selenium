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

    before(async function() {
      // env.builder() returns a Builder instance preconfigured for the
      // envrionment's target browser (you may still define browser specific
      // options if necessary (i.e. firefox.Options or chrome.Options)).
      driver = await env.builder().build();
    });

    it('DEMO 1: CROSS BROWSER TEST', async function() {
      console.log("INITIATING CROSS BROWSER TEST");
      await driver.get(environment.stg);
      console.log("1. Went to Staging √");
      await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
      console.log("2. Entered username √");
      await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
      console.log("3. Entered password and clicked 'Enter' √");
      await driver.sleep(6000); // Wait for page to load
    });


  });
});
