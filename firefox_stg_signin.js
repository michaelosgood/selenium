var webdriver = require('selenium-webdriver');
let credentials = require('./credentials.js');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

driver.get('https://webstg.prescribewellness.com/');
driver.findElement(webdriver.By.id('mbr-uid')).sendKeys(credentials.internal_user);
driver.findElement(webdriver.By.id('mbr-pwd')).sendKeys(credentials.internal_password);
driver.findElement(webdriver.By.id('login')).click();
