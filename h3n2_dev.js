let webdriver = require("selenium-webdriver");
let { Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');


describe("Login to web.prescribewellness.com", function() {
    this.timeout(30000);
    let driver;

    before(function() {
        let Builder = require('selenium-webdriver');
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function() {
        driver.findElement(By.id('pwTopGearIcon')).click()
        console.log("test completed");
        //driver.quit();
    });

    it("should go to the Prod login page", function() {
        driver.get(environment.dev);
        driver.manage().window().maximize();
    });

    it("should input login credentials and", function() {
        driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
    });
});

