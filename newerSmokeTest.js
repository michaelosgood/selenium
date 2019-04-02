const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;
let expect = require("chai").expect;
const currentDate = Date.now().toString();


describe("Default Test",  ()=> {
    const driver = new Builder().forBrowser('chrome').build();

    it("Test-1", async ()=> {
    
        // try {
            await driver.get(environment.prod);
            console.log("1. Went to Production");
            await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
            console.log("2. Entered username");
            await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
            await driver.sleep(6000); // Wait for page to load
            console.log("3. Entered password and clicked 'Enter'");
            await driver.getTitle().then(function(title) {
              assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
              console.log("Asserted title is: " + title );
            }); 
        // } catch(error) {
        //     console.error(error);
        // }
    });

});