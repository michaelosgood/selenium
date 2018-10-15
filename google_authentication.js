var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
var assert = require ('assert');

driver.get('https://web.prescribewellness.com/');
driver.findElement(webdriver.By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
driver.findElement(webdriver.By.id('mbr-pwd')).sendKeys('Influenza123!#');
driver.findElement(webdriver.By.id('login')).click();
