var webdriver = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

driver.get(environment.stg);
driver.findElement(webdriver.By.id('mbr-uid')).sendKeys(credentials.internal_user);
driver.findElement(webdriver.By.id('mbr-pwd')).sendKeys(credentials.internal_password);
driver.findElement(webdriver.By.id('login')).click();
