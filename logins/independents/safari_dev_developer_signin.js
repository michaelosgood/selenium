const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get(environment.dev);
    console.log("Went to DEV");
    await driver.findElement(By.id(login.id)).sendKeys(credentials.dev_user);
    console.log("Entered username");
    await driver.findElement(By.id(login.pw)).sendKeys(credentials.dev_password, Key.RETURN);
    console.log("Entered password and pressed 'Enter'");
    await driver.sleep(5000);
    console.log("Waited 5 seconds");
    await driver.get(environment.chain);
    console.log("Went to Chain CDN");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("User signed into Dev with Safari");
    }
})();