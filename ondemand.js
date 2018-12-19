const {Builder, By, Key, until} = require('selenium-webdriver');

(async function ondemand() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://web.prescribewellness.com');
    await driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
    await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#', Key.RETURN);
    await console.log('Login Successful');
    await driver.findElement(By.id('pwTopGearIcon')).click();
    await driver.findElement(By.linkText('OnDemand')).click();
    await driver.findElement(By.id('phone_numbers')).sendKeys('3036534679');
    await console.log('Phone Number has been entered');
    await driver.findElement(By.css('.btn-pw')).click();
    await driver.findElement(By.xpath('//*[@id="onDemandModalWindowArea"]/div/div[2]/div/div/div[3]/div[3]/div[2]/div[1]/div[3]/button')).click();
  } finally {
    // Uncomment out when test script is complete
    // await driver.quit();
  }
})();