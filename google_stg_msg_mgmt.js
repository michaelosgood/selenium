const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function msgMgmtTotal() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.stg);
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internalTwo_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internalTwo_password, Key.RETURN);
        await driver.findElement(By.id('pwTopGearIcon')).click();
        await driver.findElement(By.linkText('Message Management')).click();
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        await driver.takeScreenshot().then(function(data) { // Take Screenshot
            fs.writeFileSync(__dirname + "/tmp/screenshot1.png", data, 'base64'); // Save screenshot to tmp folder
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Internal 2 user went to Message Managment in Staging using Chrome");
    }
})();