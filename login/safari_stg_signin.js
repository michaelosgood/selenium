const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

(async function SafariExample() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get(environment.stg)
    await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user)
    await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN)
  } 
  catch(err) {
    console.log(err);
}
  finally {
    console.log("Internal user signed into Staging using Safari")
}
})();