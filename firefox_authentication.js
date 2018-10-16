var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

driver.get('https://web.prescribewellness.com/');
driver.findElement(webdriver.By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
driver.findElement(webdriver.By.id('mbr-pwd')).sendKeys('Influenza123!#');
driver.findElement(webdriver.By.id('login')).click();
