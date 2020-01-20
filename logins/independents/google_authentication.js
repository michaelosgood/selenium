// Updated Test
const {Builder, By, Key, until} = require('selenium-webdriver');
let login = require('../../components/login.js');
let environment = require('../../environment.js');
let credentials = require('../../credentials.js');
let assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();

describe('Login to PROD using Google Chrome as the Browser', function() {
    
    it('should navigate to "https://web.prescribewellness.com"', function () {
        driver.get(environment.prod)
    });
    it('should input user name & password, then click on the login button', function() { 
        driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
        driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
    });
    // it('should click on the "gear" icon and select "Logout"', function() {
    //     driver.findElement(By.id('pwTopGearIcon')).click();
    //     driver.findElement(By.linkText('Logout')).click();
    // });
});