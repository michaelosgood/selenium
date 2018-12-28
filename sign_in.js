//-----CROSS BROWSER SIGN IN TEST -------------//

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

    it('demo 1: Go to Staging, seach for webdriver, wait until the title updates', async function() {
      await driver.get(environment.stg);
      await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
      await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
    });

    // it('demo 2: Go to google.com and verify title', async function() {
    //   await driver.get('https://www.google.com/');
    //   let url = await driver.getCurrentUrl();
    //   assert.equal(url, 'https://www.google.com/');
    // });

    //after(() => driver && driver.quit());
  });
});
