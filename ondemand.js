const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
const assert = require ('assert');

driver.get('https://web.prescribewellness.com/');
driver.findElement(webdriver.By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
driver.findElement(webdriver.By.id('mbr-pwd')).sendKeys('Influenza123!#');
var started = driver.findElement(webdriver.By.id('login')).click();
driver.wait(started, 5 * 1000, 'Server should load within 5 seconds');
// driver.findElement(webdriver.By.id('pwTopGearIcon'))