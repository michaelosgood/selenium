let webdriver = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

driver.get(environment.prod);
driver.findElement(webdriver.By.id('mbr-uid')).sendKeys(credentials.customer_user);
driver.findElement(webdriver.By.id('mbr-pwd')).sendKeys(credentials.customer_password);
driver.findElement(webdriver.By.id('login')).click();
