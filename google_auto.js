var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
var assert = require ('assert');

driver.get('https://web.prescribewellness.com/');

inputField = driver.findElement(webdriver.By.id('mbr-uid'));

var useremail = "h3n2@prescribewellness.com";

inputField.sendKeys(useremail);

var password = "Influenza123!";

inputField = driver.findElement(webdriver.By.id('mbr-pwd'));

inputField.sendKeys(password);

driver.findElement(webdriver.By.id('login')).click();