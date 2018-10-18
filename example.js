var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://web.prescribewellness.com');
    driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
    driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#');
    driver.findElement(By.id('login')).click();
    