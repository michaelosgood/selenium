const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;
const currentDate = Date.now().toString();

const mosgood = async function() {
  console.log(currentDate);
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Login to Admin User and Verify Title
    console.log("Starting Admin Test in Firefox");
    await driver.get(environment.stg);
    console.log("Went to STG");
    await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
    console.log("Entered internal username");
    await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
    console.log("Entered password and clicked 'Enter'");
    await driver.sleep(6000); // Wait for page to load
    await driver.getTitle().then(function(title) {
      assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
      console.log("Asserted title is: " + title );
    });
  } 
  catch(err) {
      console.log(err);
  }
  finally {
    console.log("Test Completed!!");
    await driver.quit()
  }
}();