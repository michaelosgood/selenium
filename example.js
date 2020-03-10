const {Builder, By, Key, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let login = require('./components/login.js');
let assert = require("chai").assert;
let time = new Date();
const log = './reports/tests' + time + '.txt' ;

const smoketest = async function() {
  let startDate = new Date();
  fs.appendFile(log, '\n\n_____Staging Smoke Test Conducted on: ' + startDate +'_____', function (err){
      if (err) throw err;
      console.log('Test Conducted on: '+ startDate)
  });
  let driver = await new Builder().forBrowser('chrome').build();
  try {  
      // Go to Staging
      await driver.get(environment.stg);
      await fs.appendFile(log, '\nWent to Staging', function (err){
        if (err) throw err;
        console.log('Went to Staging');
      });
      // Enter Username
      await driver.findElement(By.id(login.id)).sendKeys(credentials.internal_user);
      await fs.appendFile(log, '\nEntered internal username', function (err){
        if (err) throw err;
        console.log('Entered internal username');
      });
      // Enter Password & Press Enter
      await driver.findElement(By.id(login.pw)).sendKeys(credentials.internal_password, Key.RETURN);
      await fs.appendFile(log, '\nEntered password and clicked Enter', function (err){
        if (err) throw err;
        console.log('Entered password and clicked Enter');
      });
      // Enter Password & Press Enter
      await driver.sleep(6000);
      await fs.appendFile(log, 'Waited 6 seconds', function(err){
        console.log('Waited 6 seconds');
      });

        // 'Message Management' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err){
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 

      // Assert Title for Landing Page
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
          console.log("Asserted title is: " + title);
          fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
            if (err) throw err;
          });
      });
  }
  catch(err) {
      console.log(err);
  }
  finally {
    let endDate = new Date();
    fs.appendFile(log, '_____Staging Smoke Test Completed on: ' + endDate +'_____', function (err){
      if (err) throw err;
      console.log('Test Conducted on: '+ endDate);
    });
    await driver.quit();
  }
};
smoketest();
