let webdriver = require("selenium-webdriver");
const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require("chai");
let credentials = require('./credentials.js');
let environment = require('./environment.js');

describe("Login to web.prescribewellness.com", function() {
    this.timeout(30000);
    let driver;

    before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function() {
        //driver.quit();
        console.log("test completed");
    });

    it("should go to the Prod login page", function() {
        driver.get(environment.prod);
    });

    it("should input login credentials and", function() {
        driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
    });

    it("should click on login button", function() {
        driver.findElement(By.id('pwTopGearIcon')).click()
    });
  
});

