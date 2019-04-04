const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;

(async function AdhRingsTest() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Test in Chrome");
        await driver.get(environment.stg);
        console.log("1. Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.sample_user);
        console.log("2. Entered internal username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter'");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.linkText('Active Patients')).click();
        console.log("4. Clicked on 'Active Patients'");
        await driver.sleep(6000); // Wait for page to load
        // Tried finding by xpath. not working 
        // await driver.findElement(By.xpath('//*[@id="chart_diabetic_statin_pie"]/div/div[1]/div/svg/g[1]/path')).click();
        
        //Tried finding by css - not working
        // await driver.findElement(By.css("#chart_diabetic_statin_pie > div > div:nth-child(1) > div > svg > g:nth-child(2) > path")).click();
       
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Test Completed!!");
       // await driver.quit()
    }
})();