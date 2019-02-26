const {Builder, By, Key, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function ondemand() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Initiating OnDemand Test in Chrome");
    await driver.get(environment.prod);
    console.log("1. Went to Production √");
    await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
    console.log("2. Entered customer username: √");
    await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
    console.log("3. Entered password and clicked 'Enter': √");
    await driver.sleep(6000); // Wait for page to load
    await driver.findElement(By.id('pwTopGearIcon')).click();
    console.log("4. Clicked on the gear icon: √");
    await driver.findElement(By.linkText('OnDemand')).click();
    console.log("5. Selected 'OnDemand': √");
    await driver.sleep(6000); // Wait for page to load
    await driver.findElement(By.id('phone_numbers')).sendKeys('3036534679');
    console.log("6. Entered a phone number √");
    await driver.sleep(6000); // Wait for page to load
    await driver.findElement(By.css('.btn-pw')).click();
    console.log("7. Clicked on 'Next' button");
    await driver.sleep(6000); // Wait for page to load
    await driver.findElement(By.css('.btn-select-campaign')).click();
    console.log("8. Clicked on 'Select' button");
    await driver.sleep(6000); // Wait for page to load
    await driver.findElement(By.css('.fright')).click();
    console.log("9. Clicked on 'Send Message' button");
    await driver.sleep(2000); // Wait for page to load
    await driver.takeScreenshot().then(function(data) { // Take Screenshot
      fs.writeFileSync(__dirname + "/tmp/OnDemand_screenshot.png", data, 'base64'); // Save screenshot to tmp folder
      console.log("10. Took screenshot");
  });

  } 
  catch(err) {
    console.log(err);
  }
  finally {
    await driver.sleep(6000); // Wait for page to load
    console.log("TEST RESULTS: OnDemand SMS has been sent!! √ Passed QA!");
    await driver.quit()
  }
})();