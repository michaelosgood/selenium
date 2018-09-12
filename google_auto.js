

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://web.prescribewellness.com/');

inputField = driver.findElement(webdriver.By.id('mbr-uid'));

var useremail = "mosgood@prescribewellness.com";

inputField.sendKeys(useremail);

var password = "TestPW";

inputField = driver.findElement(webdriver.By.id('mbr-pwd'));

inputField.sendKeys(password);

