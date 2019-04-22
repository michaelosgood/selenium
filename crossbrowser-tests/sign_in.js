//-----CROSS BROWSER SIGN IN TEST -------------//
// Type 'mocha sign_in.js' in the command line and press 'Enter' on keyboard execute test
const assert = require('assert');

const {Browser, By, Key, until} = require('selenium-webdriver');
const {ignore, suite} = require('selenium-webdriver/testing');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

suite(function(env) {
  describe('Sign in to Staging', async function() {
    let driver;

//    before(async function() {
      // env.builder() returns a Builder instance preconfigured for the
      // envrionment's target browser (you may still define browser specific
      // options if necessary (i.e. firefox.Options or chrome.Options)).
//      driver = await env.builder().build();
//    });

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
    });

    // it('demo 2: Go to google.com and verify title', async function() {
    //   await driver.get('https://www.google.com/');
    //   let url = await driver.getCurrentUrl();
    //   assert.equal(url, 'https://www.google.com/');
    // });

    //after(() => driver && driver.quit());
  });
});
