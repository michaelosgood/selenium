const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get(environment.stg);
    console.log("Went to Staging");
    await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.dev_user);
    console.log("Entered username");
    await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.dev_password, Key.RETURN);
    console.log("Entered password and pressed 'Enter'");
    await driver.sleep(6000); 
    console.log("Waited 6 seconds");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User signed into STG with Firefox");
    }
})();