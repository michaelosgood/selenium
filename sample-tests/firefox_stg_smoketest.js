const {Builder, By, Key, until} = require('selenium-webdriver');
let fs = require('fs');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;
let date = new Date();
const log = '../reports/stg-tests.txt';

const firefoxStgSmoketest = async function() {
  fs.appendFile(log, '\n\n_____Firefox Staging Smoke Test Conducted on: ' + date +'_____', function (err){
      if (err) throw err;
      console.log('Test Conducted on: '+ date)
  });
  let driver = await new Builder().forBrowser('firefox').build();
  try {
      // 'Landing Page' Verify Title   
      // Go to STG
      await driver.get(environment.stg);
      await fs.appendFile(log, '\nSTEP 1: Went to Staging', function (err){
        if (err) throw err;
        console.log('STEP 1: Went to Staging')
      });
      // Enter Username
      await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.internal_user);
      await fs.appendFile(log, '\nSTEP 2: Entered internal username', function (err){
        if (err) throw err;
        console.log('STEP 2: Entered internal username')
      });
      // Enter Password & Press Enter
      await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.internal_password, Key.RETURN);
      await fs.appendFile(log, '\nSTEP 3: Entered password and clicked Enter', function (err){
        if (err) throw err;
        console.log('STEP 3: Entered password and clicked Enter')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 4: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 4: Wait for page to load')
      });
      // Assert Title for Landing Page
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
          console.log("STEP 5: Asserted title is: " + title);
          fs.appendFile(log, '\nSTEP 5: Asserted title is: ' + title, function (err) {
            if (err) throw err;
          });
      });

      // 'Message Management' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 6: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 6: Clicked on the gear icon')
      });
      // Select Message Management
      await driver.findElement(By.linkText('Message Management')).click();
      await fs.appendFile(log, '\nSTEP 7: Selected Message Management', function (err){
        if (err) throw err;
        console.log('STEP 7: Selected Message Management')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 8: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 8: Wait for page to load')
      });
      // Assert Title for Msg Mgmt
      await driver.getTitle().then(function(title) {
        assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
        console.log("STEP 9: Asserted title for Message Management is: " + title);
        fs.appendFile(log, '\nSTEP 9: Asserted title is: ' + title, function (err){
          if (err) throw err;
         });
      });

      // 'Campaign Management' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 10: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 10: Clicked on the gear icon')
      });
      // Select Campaign Management
      await driver.findElement(By.linkText('Campaign Management')).click();
      await fs.appendFile(log, '\nSTEP 11: Selected Campaign Management', function (err){
        if (err) throw err;
        console.log('STEP 11: Selected Campaign Management')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 12: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 12: Wait for page to load')
      });
      // Assert Title for Campaign Mgmt
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
          console.log("STEP 13: Asserted title for 'Campaign Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 13: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // 'Login As' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
        await fs.appendFile(log, '\nSTEP 14: Clicked on the gear icon', function (err){
          if (err) throw err;
          console.log('STEP 14: Clicked on the gear icon')
        });
        // Select Login As
      await driver.findElement(By.linkText('Login As')).click();
      await fs.appendFile(log, '\nSTEP 15: Selected Login As', function (err){
        if (err) throw err;
        console.log('STEP 15: Selected Login As')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 16: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 16: Wait for page to load')
      });
      // Assert title Login As
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Login As - Pharmacy Portal - mosgood");
          console.log("STEP 17: Asserted title for 'Login As' page is: " + title );
          fs.appendFile(log, '\nSTEP 17: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // 'Template Managment' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 18: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 18: Clicked on the gear icon')
      });
      // Select 'Template Managment'
      await driver.findElement(By.linkText('Template Management')).click();
      await fs.appendFile(log, '\nSTEP 19: Selected Template Management', function (err){
        if (err) throw err;
        console.log('STEP 19: Selected Template Management')
      });  
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 20: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 20: Wait for page to load')
      });
      // Assert title for Template Management
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Communication Templates - Pharmacy Portal - mosgood");
          console.log("STEP 21: Asserted title for 'Template Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 21: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // 'User Managment' Verify Title
      // Clicked on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 22: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 22: Clicked on the gear icon')
      });
      // Select 'User Managment'
      await driver.findElement(By.linkText('User Management')).click();
      await fs.appendFile(log, '\nSTEP 23: Selected User Management', function (err){
        if (err) throw err;
        console.log('STEP 23: Selected User Management')
      });  
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 24: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 24: Wait for page to load')
      });
      // Assert title for User Management
      await driver.getTitle().then(function(title) {
          assert.equal(title, "User Management - Pharmacy Portal - mosgood");
          console.log("STEP 25: Asserted title for 'User Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 25: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      }); 

      // Account Managment Verify Title
      // Clicked on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 26: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 26: Clicked on the gear icon')
      });
      // Selected User Management
      await driver.findElement(By.linkText('Account Management')).click();
      await fs.appendFile(log, '\nSTEP 27: Selected User Management', function (err){
        if (err) throw err;
        console.log("STEP 27: Selected Account Management")
      }); 
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 28: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 28: Wait for page to load')
      });
      // Assert title for 'Account Management'
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Account Management - Pharmacy Portal - mosgood");
          console.log("STEP 29: Asserted title for 'Account Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 29: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      }); 

      // Partner Managment Verify Title
      // Clicked on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 30: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 30: Clicked on the gear icon')
      });
      // Select Partner Management
      await driver.findElement(By.linkText('Partner Management')).click();
      await fs.appendFile(log, '\nSTEP 31: Selected Partner Management', function (err){
        if (err) throw err;
        console.log("STEP 31: Selected Partner Management")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 32: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 32: Wait for page to load')
      });
      // Assert title for 'Partner Management'
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Partner Management - Pharmacy Portal - mosgood");
          console.log("STEP 33: Asserted title for 'Partner Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 33: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      }); 

      // Logout of Admin
      // Clicked on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 34: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 34: Clicked on the gear icon')
      });
      // Select 'Logout'
      await driver.findElement(By.linkText('Logout')).click();
      await fs.appendFile(log, '\nSTEP 35: Selected Logout', function (err){
        if (err) throw err;
        console.log("STEP 35: Selected Logout")
      });

      // Login to H3N2 and Verify Title
      // Enter Username
      await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
      await fs.appendFile(log, '\nSTEP 36: Entered username', function (err){
        if (err) throw err;
        console.log("STEP 36: Entered username")
      });
      // Enter Password & Press Enter
      await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
      await fs.appendFile(log, '\nSTEP 37: Entered password and clicked Enter', function (err){
        if (err) throw err;
        console.log('STEP 37: Entered password and clicked Enter')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 38: Wait for page to load', function (err){
        if (err) throw err;
          console.log('STEP 38: Wait for page to load')
      });
      // Assert title for Landing page
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 39: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 39: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });
    
      // Verify Title for Active Patients page
      // Selected Active Patients
      await driver.findElement(By.linkText('Active Patients')).click();
      await fs.appendFile(log, '\nSTEP 40: Clicked on Active Patients', function (err){
        if (err) throw err;
        console.log("STEP 40: Clicked on Active Patients")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 41: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 41: Wait for page to load')
      });
      // Assert title for 'Active Patients'
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 42: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 42: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });
    
      // Verify Title for Drugs page
      await driver.findElement(By.linkText('Drugs')).click();
      await fs.appendFile(log, '\nSTEP 43: Clicked on Drugs', function (err){
        if (err) throw err;
        console.log("STEP 43: Clicked on Drugs")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 44: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 44: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 45: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 45: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for Diseases page
      await driver.findElement(By.linkText('Diseases')).click();
      await fs.appendFile(log, '\nSTEP 46: Clicked on Diseases', function (err){
        if (err) throw err;
        console.log("STEP 46: Clicked on Diseases")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 47: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 47: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 48: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 48: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for Physicians page
      await driver.findElement(By.linkText('Physicians')).click();
      await fs.appendFile(log, '\nSTEP 49: Clicked on Physicians', function (err){
        if (err) throw err;
        console.log("STEP 49: Clicked on Physicians")
      });
      //  Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 50: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 50: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log('STEP 51: Asserted title is: ' + title );
          fs.appendFile(log, '\nSTEP 51: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for Physician Groups page
      await driver.findElement(By.linkText('Physician Groups')).click();
      await fs.appendFile(log, '\nSTEP 52: Clicked on Physician Groups', function (err){
        if (err) throw err;
        console.log("STEP 52: Clicked on Physician Groups")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 53: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 53: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 54: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 54: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for Clinical Calendar
      await driver.findElement(By.className('fa-calendar')).click();
      await fs.appendFile(log, '\nSTEP 55: Clicked on Calendar icon', function (err){
        if (err) throw err;
        console.log("STEP 55: Clicked on Calendar icon")
      });
      await driver.findElement(By.linkText('Clinical Calendar')).click();
      await fs.appendFile(log, '\nSTEP 56: Selected Clinical Calendar icon', function (err){
        if (err) throw err;
        console.log("STEP 56: Selected Clinical Calendar icon")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 57: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 57: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 58: Asserted title for 'Clinical Calendar' page is: " + title );
          fs.appendFile(log, '\nSTEP 58: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for Social Calendar
      await driver.findElement(By.className('fa-calendar')).click();
      await fs.appendFile(log, '\nSTEP 59: Clicked on Calendar icon', function (err){
        if (err) throw err;
        console.log("STEP 59: Clicked on Calendar icon")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 60: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 60: Wait for page to load')
      });
      await driver.findElement(By.linkText('Social Calendar')).click();
      await fs.appendFile(log, '\nSTEP 61: Selected Social Calendar', function (err){
        if (err) throw err;
        console.log("STEP 61: Selected Social Calendar")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 62: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 62: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 63: Asserted title for 'Social Calendar' page is: " + title );
          fs.appendFile(log, '\nSTEP 63: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for Custom Calendar
      await driver.findElement(By.className('fa-calendar')).click();
      await fs.appendFile(log, '\nSTEP 64: Clicked on the calendar icon', function (err){
        if (err) throw err;
        console.log('STEP 64: Clicked on the calendar icon');
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 65: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 65: Wait for page to load')
      });
      await driver.findElement(By.linkText('Custom Calendar')).click();
      await fs.appendFile(log, '\nSTEP 66: Selected Custom Calendar', function (err){
        if (err) throw err;
        console.log("STEP 66: Selected Custom Calendar")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 67: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 67: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log('STEP 68: Asserted title is: ' + title );
          fs.appendFile(log, '\nSTEP 68: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for 'Growth' Pt List
      await driver.findElement(By.linkText('Growth')).click();
      await fs.appendFile(log, '\nSTEP 69: Selected Growth', function (err){
        if (err) throw err;
        console.log("STEP 69: Selected Growth")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 70: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 70: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Growth: Patients - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 71: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 71: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for 'StarWellness' Pt List
      await driver.findElement(By.linkText('StarWellness')).click();
      await fs.appendFile(log, '\nSTEP 72: Selected StarWellness', function (err){
        if (err) throw err;
        console.log("STEP 72: Selected StarWellness")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 73: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 73: Wait for page to load')
      });
      await driver.findElement(By.linkText('Synchronization')).click();
      await fs.appendFile(log, '\nSTEP 74: Selected Synchronization', function (err){
        if (err) throw err;
        console.log("STEP 74: Selected Synchronization")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 75: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 75: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "StarWellness: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 76: Asserted title for 'StarWellness Synchronization' page is: " + title );
          fs.appendFile(log, '\nSTEP 76: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for 'VaccineComplete' Pt List
      await driver.findElement(By.linkText('VaccineComplete')).click();
      await fs.appendFile(log, '\nSTEP 77: Selected VaccineComplete', function (err){
        if (err) throw err;
        console.log("STEP 77: Selected VaccineComplete")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 78: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 78: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Vaccine Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 79: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 79: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for 'PrescribeMedicare' Pt List
      await driver.findElement(By.linkText('PrescribeMedicare')).click();
      await fs.appendFile(log, '\nSTEP 80: Selected PrescribeMedicare', function (err){
        if (err) throw err;
        console.log("STEP 80: Selected PrescribeMedicare")
      });
      /// Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 81: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 81: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Medicare Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 82: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 82: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // Verify Title for 'PrescribeCare' Pt List
      await driver.findElement(By.linkText('PrescribeCare')).click();
      await fs.appendFile(log, '\nSTEP 83: Selected PrescribeCare', function (err){
        if (err) throw err;
        console.log("STEP 83: Selected PrescribeCare")
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 84: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 84: Wait for page to load')
      });
      await driver.getTitle().then(function(title) {
          assert.equal(title, "PrescribeCare: Patients with Encounters - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
          console.log("STEP 85: Asserted title is: " + title );
          fs.appendFile(log, '\nSTEP 85: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });
  }
  catch(err) {
      console.log(err);
  }
  finally {
    console.log("Test Completed!!");
    await driver.quit()
  }
};
// firefoxStgSmoketest();
module.exports = firefoxStgSmoketest;