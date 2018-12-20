const webdriver = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get(environment.stg);

inputField = driver.findElement(webdriver.By.id('mbr-uid'));

inputField.sendKeys(credentials.internal_user);

inputField = driver.findElement(webdriver.By.id('mbr-pwd'));

inputField.sendKeys(credentials.internal_password);

driver.findElement(webdriver.By.id("login")).click();

