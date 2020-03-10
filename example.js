const {Builder, By, Key, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let login = require('./components/login.js');
let titles = require('./components/titles.js');
let assert = require("chai").assert;
let time = new Date();
const log = './reports/tests_' + time + '.txt' ;

const smoketest = async function() {
  let startDate = new Date();
  fs.appendFile(log, '\n\nExample SmokeTest Conducted on: ' + startDate, function (err){
      if (err) throw err;
      console.log('Example SmokeTest Conducted on: '+ startDate)
  });
  let driver = await new Builder().forBrowser('chrome').build();
  try {  
      // LOGIN
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

      // VALIDATE DASHBOARD TITLE
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Landing Page
      await driver.getTitle().then(function(title) {
          assert.equal(title, titles.dashboard);
          console.log("Asserted title is: " + title);
          fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
            if (err) throw err;
          });
      });
      // Waited 10 seconds
      await driver.sleep(10000);
      await fs.appendFile(log, '\nWaited 10 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 10 seconds');
      });

      // VALIDATE MESSAGE MANAGEMENT TITLE
      // Click on Gear Icon
      await driver.findElement(By.className('pwTopNavIcon fa fa-cog')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err){
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Message Management
      await driver.findElement(By.linkText('Message Management')).click();
      await fs.appendFile(log, '\nSelected Message Management', function (err){
        if (err) throw err;
        console.log('Selected Message Management')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Message Management Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.msg_mgmt);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE CAMPAIGN MANAGEMENT TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Campaign Management
      await driver.findElement(By.linkText('Campaign Management')).click();
      await fs.appendFile(log, '\nSelected Campaign Management', function (err) {
        if (err) throw err;
        console.log('Selected Campaign Management')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Campaign Management Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.camp_mgmt);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE LOGIN AS TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Login As
      await driver.findElement(By.linkText('Login As')).click();
      await fs.appendFile(log, '\nSelected Login As', function (err) {
        if (err) throw err;
        console.log('Selected Login As')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Campaign Management Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.login_as);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE TEMPLATE MANAGEMENT TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Template Management
      await driver.findElement(By.linkText('Template Management')).click();
      await fs.appendFile(log, '\nSelected Template Management', function (err) {
        if (err) throw err;
        console.log('Selected Template Management')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Template Management Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.template_mgmt);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE USER MANAGEMENT TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select User Management
      await driver.findElement(By.linkText('User Management')).click();
      await fs.appendFile(log, '\nSelected User Management', function (err) {
        if (err) throw err;
        console.log('Selected User Management')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for User Management Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.user_mgmt);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE PARTNER MANAGEMENT TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Partner Mangagement
      await driver.findElement(By.linkText('Partner Management')).click();
      await fs.appendFile(log, '\nSelected Partner Management', function (err) {
        if (err) throw err;
        console.log('Selected Partner Management')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Partner Management Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.partner_mgmt);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE CALL HISTORY TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Call History
      await driver.findElement(By.linkText('Call History')).click();
      await fs.appendFile(log, '\nSelected Call History', function (err) {
        if (err) throw err;
        console.log('Selected Call History')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Call History Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.call_history);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE DEVELOPER TOOLS TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Developer Tools
      await driver.findElement(By.linkText('Developer Tools')).click();
      await fs.appendFile(log, '\nSelected Developer Tools', function (err) {
        if (err) throw err;
        console.log('Selected Developer Tools')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Developer Tools Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.dev_tools);
        console.log("Asserted title is: " + title);
        fs.appendFile(log, '\nAsserted title is: ' + title, function (err) {
          if (err) throw err;
        });
      });

      // VALIDATE SETTINGS TITLE
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nClicked on the gear icon', function (err) {
        if (err) throw err;
        console.log('Clicked on the gear icon');
      }); 
      // Select Settings
      await driver.findElement(By.linkText('Settings')).click();
      await fs.appendFile(log, '\nSelected Settings', function (err) {
        if (err) throw err;
        console.log('Selected Settings')
      });
      // Waited 6 seconds
      await driver.sleep(6000);
      await fs.appendFile(log, '\nWaited 6 seconds', function(err) {
        if (err) throw err;
        console.log('Waited 6 seconds');
      });
      // Assert Title for Settings Page
      await driver.getTitle().then(function(title) {
        assert.equal(title, titles.settings);
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
    fs.appendFile(log, '\nExample SmokeTest Completed on: ' + endDate, function (err){
      if (err) throw err;
      console.log('Example SmokeTest Completed on: '+ endDate);
    });
    await driver.quit();
  }
};
smoketest();
