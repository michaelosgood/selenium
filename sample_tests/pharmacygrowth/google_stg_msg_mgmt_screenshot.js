const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function Msgmgmtscreenshot() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Message Management Test");
        await driver.get(environment.stg);
        console.log("1. Went to Staging");
        // await driver.manage().window().maximize();
        // console.log("2. Maximized the window");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internalTwo_user);
        console.log("3. Entered internal two username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internalTwo_password, Key.RETURN);
        console.log("4. Entered password and clicked 'Enter'");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("5. Clicked on the gear icon");
        await driver.findElement(By.linkText('Message Management')).click();
        console.log("6. Selected 'Message Management'");
        await driver.findElement(By.className('k-pager-info k-label'));
        await driver.sleep(6000); // Wait for page to load
        console.log("7. Waited a couple seconds");
        await driver.takeScreenshot().then(function(data) { // Take Screenshot
            fs.writeFileSync(__dirname + "/tmp/screenshot1.png", data, 'base64'); // Save screenshot to tmp folder
            console.log("8. Took screenshot");
        });
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Results: Internal 2 user went to Message Managment in Staging using Chrome");
        await driver.quit()
    }
})();