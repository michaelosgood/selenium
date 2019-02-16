const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');

(async function SignIn() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Initiating PROD Test in Firefox");
        await driver.get(environment.prod);
        console.log("1. Went to Production: √");
        await driver.manage().window().maximize();
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
        console.log("2. Entered internal username: √");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
        console.log("3. Entered password and clicked 'Enter': √");
        await driver.sleep(6000); // Wait for page to load
        console.log("4. Waited 6 seconds for page to load");
        await driver.findElement(By.id('pwTopGearIcon')).click();
        console.log("5. Clicked on the gear icon: √");
    } 
    catch(err) {
        console.log(err);
    }
})();