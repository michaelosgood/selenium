var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://web.prescribewellness.com/');