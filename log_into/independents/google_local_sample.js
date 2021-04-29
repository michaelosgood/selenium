const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../components/login.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');
let assert = require("chai").assert;

(async function SignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating Login Test in Chrome");
        await driver.get(environment.local);
        console.log("Went to LOCAL");
        await driver.findElement(By.id(login.id)).sendKeys(credentials.sample_user);
        console.log("Entered internal username");
        await driver.findElement(By.id(login.pw)).sendKeys(credentials.sample_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(10000);
        console.log("Waited 10 seconds");
        //click on close button in merck modal
        await driver.findElement(By.xpath("//button[@class = 'btn btn-default']")).click();
        console.log("Closed out Merck Modal");
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Sample user signed into Dev with Chrome");
    }
})();