const {Builder, By, Key, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function CustomerSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(environment.stg);
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internalTwo_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internalTwo_password, Key.RETURN);
        await driver.findElement(By.id('pwTopGearIcon')).click();
        await driver.findElement(By.linkText('Message Management')).click();
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.takeScreenshot().then(function(data) {
            fs.writeFileSync(__dirname + "/tmp/screenshot1.png", data, 'base64');
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Internal 2 user went to Message Managment in Staging using Chrome");
    }
})();