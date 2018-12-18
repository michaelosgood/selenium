const webdriver = require('selenium-webdriver');
// let config = require('./config.js');
const test = require('selenium-webdriver/testing');
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
let assert = require ('assert');

driver.get('https://web.prescribewellness.com/');

inputField = driver.findElement(webdriver.By.id('mbr-uid'));

const useremail = "h3n2@prescribewellness.com";

inputField.sendKeys(useremail);

const password = "Influenza123!#";

inputField = driver.findElement(webdriver.By.id('mbr-pwd'));

inputField.sendKeys(password);

driver.findElement(webdriver.By.id("login")).click();

