const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;
let driver = new Builder().forBrowser('chrome').build();


describe("Inner Suite 1", async function(){
    
    before(async function(){
        try {
            console.log("BEFORE");
            console.log("Starting Smoke Test in Chrome");
            await driver.get(environment.stg);
            console.log("Went to Staging");
        } catch(error) {
            console.error(error);
        }
    });

    after(async function(){
        try {
            console.log("AFTER EACH");
            console.log("Driver Quit");
            await driver.quit()
        } catch(error) {
            console.error(error);
        }
        
    });
    
    
    beforeEach(async function(){
        try {
            console.log("BEFORE EACH");
            await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
            console.log("Entered internal username √");
            await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        } catch(error) {
            console.error(error);
        }
    });

    afterEach(async function(){
        try {
            console.log("AFTER");
            await driver.findElement(By.id('pwTopGearIcon')).click();
            console.log("Clicked on the gear icon √");
            await driver.findElement(By.linkText('Logout')).click();
            console.log("Selected 'Logout' √");
        } catch(error) {
            console.error(error);
        }
    });

    it("Test-1", async function(){
        try {
            console.log("TEST 1");
            await driver.findElement(By.id('pwTopGearIcon')).click();
            console.log("Clicked on the gear icon √");
            await driver.findElement(By.linkText('Partner Management')).click();
            console.log("Selected 'Partner Management' √");
            await driver.findElement(By.className('k-pager-info k-label'));
            await driver.sleep(6000); // Wait for page to load
            console.log("Waited a couple seconds");
            await driver.getTitle().then(function(title) {
              assert.equal(title, "Partner Management - Pharmacy Portal - mosgood");
              console.log("Asserted title for 'Partner Management' page is: " + title );
            }); 
        } catch(error) {
            console.error(error);
        }
    });

    // it("Test-2", async function(done){  
    //     try {
    //     console.log("test 2");
    //     } catch(error) {
    //         console.error(error);
    //     }
    //     done();
    // });
 
    // it("Test-3", async function(){  
    //     try {
    //         console.log("test 3");
    //     } catch(error) {
    //         console.error(error);
    //     }
    //     done();
    // });

});