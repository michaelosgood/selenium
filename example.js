const {Builder, By, Key, until} = require('selenium-webdriver');
let fs = require("fs");
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;
let date = new Date();
const log = '../logs/tests.txt';

const smoketest = async function() {
  fs.appendFile(log, '\n\n_____Smoke Test Conducted on: ' + date +'_____', function (err){
      if (err) throw err;
      console.log('Test Conducted on: '+ date)
  });
  let driver = await new Builder().forBrowser('chrome').build();
  try {

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
      // Assert Title for Landing Page
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Pharmacy Group Dashboard - Pharmacy Portal - mosgood");
          console.log("STEP 4: Asserted title is: " + title);
          fs.appendFile(log, '\nSTEP 4: Asserted title is: ' + title, function (err) {
            if (err) throw err;
          });
      });

      // 'Message Management' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 5: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 5: Clicked on the gear icon')
      });
      // Select Message Management
      await driver.findElement(By.linkText('Message Management')).click();
      await fs.appendFile(log, '\nSTEP 6: Selected Message Management', function (err){
        if (err) throw err;
        console.log('STEP 6: Selected Message Management')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 7: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 7: Wait for page to load')
      });
      // Assert Title for Msg Mgmt
      await driver.getTitle().then(function(title) {
        assert.equal(title, "Message Management - Pharmacy Portal - mosgood");
        console.log("STEP 8:Asserted title for Message Management is: " + title);
        fs.appendFile(log, '\nSTEP 8: Asserted title is: ' + title, function (err){
          if (err) throw err;
         });
      });

      // 'Campaign Management' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 9: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 9: Clicked on the gear icon')
      });
      // Select Campaign Management
      await driver.findElement(By.linkText('Campaign Management')).click();
      await fs.appendFile(log, '\nSTEP 10: Selected Campaign Management', function (err){
        if (err) throw err;
        console.log('STEP 10: Selected Campaign Management')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 11: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 11: Wait for page to load')
      });
      // Assert Title for Campaign Mgmt
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Campaign Management - Pharmacy Portal - mosgood");
          console.log("STEP 12: Asserted title for 'Campaign Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 12: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // 'Login As' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
        await fs.appendFile(log, '\nSTEP 13: Clicked on the gear icon', function (err){
          if (err) throw err;
          console.log('STEP 13: Clicked on the gear icon')
        });
        // Select Login As
      await driver.findElement(By.linkText('Login As')).click();
      await fs.appendFile(log, '\nSTEP 14: Selected Login As', function (err){
        if (err) throw err;
        console.log('STEP 14: Selected Login As')
      });
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 15: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 15: Wait for page to load')
      });
      // Assert title Login As
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Login As - Pharmacy Portal - mosgood");
          console.log("STEP 16: Asserted title for 'Login As' page is: " + title );
          fs.appendFile(log, '\nSTEP 16: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // 'Template Managment' Verify Title
      // Click on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 17: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 17: Clicked on the gear icon')
      });
      // Select 'Template Managment'
      await driver.findElement(By.linkText('Template Management')).click();
      await fs.appendFile(log, '\nSTEP 18: Selected Template Management', function (err){
        if (err) throw err;
        console.log('STEP 18: Selected Template Management')
      });  
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 19: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 19: Wait for page to load')
      });
      // Assert title for Template Management
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Communication Templates - Pharmacy Portal - mosgood");
          console.log("STEP 20: Asserted title for 'Template Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 20: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      });

      // 'User Managment' Verify Title
      // Clicked on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 21: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 21: Clicked on the gear icon')
      });
      // Select 'User Managment'
      await driver.findElement(By.linkText('User Management')).click();
      await fs.appendFile(log, '\nSTEP 22: Selected User Management', function (err){
        if (err) throw err;
        console.log('STEP 22: Selected User Management')
      });  
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 23: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 23: Wait for page to load')
      });
      // Assert title for User Management
      await driver.getTitle().then(function(title) {
          assert.equal(title, "User Management - Pharmacy Portal - mosgood");
          console.log("STEP 24: Asserted title for 'User Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 24: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      }); 

      // Account Managment Verify Title
      // Clicked on Gear Icon
      await driver.findElement(By.id('pwTopGearIcon')).click();
      await fs.appendFile(log, '\nSTEP 25: Clicked on the gear icon', function (err){
        if (err) throw err;
        console.log('STEP 25: Clicked on the gear icon')
      });
      // Selected User Management
      await driver.findElement(By.linkText('Account Management')).click();
      await fs.appendFile(log, '\nSTEP 26: Selected User Management', function (err){
        if (err) throw err;
        console.log("STEP 26: Selected Account Management")
      }); 
      // Wait for page to load
      await driver.sleep(6000); 
      await fs.appendFile(log, '\nSTEP 27: Wait for page to load', function (err){
        if (err) throw err;
        console.log('STEP 27: Wait for page to load')
      });
      // Assert title for 'Account Management'
      await driver.getTitle().then(function(title) {
          assert.equal(title, "Account Management - Pharmacy Portal - mosgood");
          console.log("STEP 28: Asserted title for 'Account Management' page is: " + title );
          fs.appendFile(log, '\nSTEP 28: Asserted title is: ' + title, function (err){
            if (err) throw err;
          });
      }); 

    // Partner Managment Verify Title
    // Clicked on Gear Icon
    await driver.findElement(By.id('pwTopGearIcon')).click();
    await fs.appendFile(log, '\nSTEP 29: Clicked on the gear icon', function (err){
      if (err) throw err;
      console.log('STEP 29: Clicked on the gear icon')
    });
    // Select Partner Management
    await driver.findElement(By.linkText('Partner Management')).click();
    console.log("Selected Partner Management");
    await fs.appendFile(log, '\nSTEP 30: Selected Partner Management', function (err){
      if (err) throw err;
      console.log("STEP 30: Selected Partner Management")
    });
    // Wait for page to load
    await driver.sleep(6000); 
    await fs.appendFile(log, '\nSTEP 31: Wait for page to load', function (err){
      if (err) throw err;
      console.log('STEP 31: Wait for page to load')
    });
    await driver.getTitle().then(function(title) {
        assert.equal(title, "Partner Management - Pharmacy Portal - mosgood");
        console.log("STEP 32: Asserted title for 'Partner Management' page is: " + title );
        fs.appendFile(log, '\nSTEP 32: Asserted title is: ' + title, function (err){
          if (err) throw err;
        })
    }); 

    // Logout of Admin
    // await driver.findElement(By.id('pwTopGearIcon')).click();
    // console.log("Clicked on the gear icon √");
    // await driver.findElement(By.linkText('Logout')).click();
    // console.log("Selected 'Logout' √");

    // Login to H3N2 and Verify Title
    // await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
    // console.log("Entered username: √");
    // await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
    // console.log("Entered password and clicked 'Enter': √");
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title is: " + title );
    // });
    
    // Verify Title for Active Patients page
    // await driver.findElement(By.linkText('Active Patients')).click();
    // console.log("Clicked on 'Active Patients'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title is: " + title );
    // });

    // Verify Title for Drugs page
    // await driver.findElement(By.linkText('Drugs')).click();
    // console.log("Clicked on 'Drugs'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title is: " + title );
    // });

    // Verify Title for Diseases page
    // await driver.findElement(By.linkText('Diseases')).click();
    // console.log("Clicked on 'Diseases'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title is: " + title );
    // });

    // Verify Title for Physicians page
    //  await driver.findElement(By.linkText('Physicians')).click();
    //  console.log("Clicked on 'Physicians'");
    //  Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    //  await driver.getTitle().then(function(title) {
    //      assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //      console.log("Asserted title is: " + title );
    //  });

    // Verify Title for Physician Groups page
    //  await driver.findElement(By.linkText('Physician Groups')).click();
    //  console.log("Clicked on 'Physician Groups'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    //  await driver.getTitle().then(function(title) {
    //      assert.equal(title, "Pharmacy Dashboard - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //      console.log("Asserted title is: " + title );
    //  });

    // Verify Title for Clinical Calendar
    // await driver.findElement(By.className('fa-calendar')).click();
    // console.log("Clicked on the calendar icon");
    // await driver.findElement(By.linkText('Clinical Calendar')).click();
    // console.log("Selected 'Clinical Calendar' icon");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'Clinical Calendar' page is: " + title );
    // });

    // Verify Title for Social Calendar
    // await driver.findElement(By.className('fa-calendar')).click();
    // console.log("Clicked on the calendar icon");
    // await driver.findElement(By.linkText('Social Calendar')).click();
    // console.log("Selected 'Social Calendar' icon");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'Social Calendar' page is: " + title );
    // });

    // Verify Title for Custom Calendar
    // await driver.findElement(By.className('fa-calendar')).click();
    // console.log("Clicked on the calendar icon");
    // await driver.findElement(By.linkText('Custom Calendar')).click();
    // console.log("Selected 'Custom Calendar' icon");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Pharmacy Calendar - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'Social Calendar' page is: " + title );
    // });

    // Verify Title for 'Growth' Pt List
    // await driver.findElement(By.linkText('Growth')).click();
    // console.log("Selected 'Growth'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Growth: Patients - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'Growth' page is: " + title );
    // });

    // Verify Title for 'StarWellness' Pt List
    // await driver.findElement(By.linkText('StarWellness')).click();
    // console.log("Selected 'StarWellness'");
    // await driver.findElement(By.linkText('Synchronization')).click();
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "StarWellness: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
    // });

    // Verify Title for 'VaccineComplete' Pt List
    // await driver.findElement(By.linkText('VaccineComplete')).click();
    // console.log("Selected 'VaccineComplete'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Vaccine Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'VaccineComplete' page is: " + title );
    // });

    // Verify Title for 'PrescribeMedicare' Pt List
    // await driver.findElement(By.linkText('PrescribeMedicare')).click();
    // console.log("Selected 'PrescribeMedicare'");
    /// Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "Medicare Patient List - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
    // });

    // Verify Title for 'PrescribeCare' Pt List
    // await driver.findElement(By.linkText('PrescribeCare')).click();
    // console.log("Selected 'PrescribeCare'");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.getTitle().then(function(title) {
    //     assert.equal(title, "PrescribeCare: Patients with Encounters - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2");
    //     console.log("Asserted title for 'PrescribeCare' page is: " + title );
    // });

    // Send OnDemand via gear icon 
    // await fs.appendFile(log, '\nSTEP #: Clicked on the gear icon', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Clicked on the gear icon')
    // });
    // await driver.findElement(By.linkText('OnDemand')).click();
    // console.log("Selected 'OnDemand' √");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.findElement(By.id('phone_numbers')).sendKeys('9494158370');
    // console.log("Entered a phone number √");
    /// Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.findElement(By.css('.btn-pw')).click();
    // console.log("Clicked on 'Next' button");
    /// Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.findElement(By.css('.btn-select-campaign')).click();
    // console.log("Clicked on 'Select' button");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });
    // await driver.findElement(By.css('.fright')).click();
    // console.log("Clicked on 'Send Message' button");
    // Wait for page to load
    // await driver.sleep(6000); 
    // await fs.appendFile(log, '\nSTEP #: Wait for page to load', function (err){
    //   if (err) throw err;
    //   console.log('STEP #: Wait for page to load')
    // });

  }
  catch(err) {
      console.log(err);
  }
  finally {
    console.log("Test Completed!!");
    await driver.quit()
  }
};
//smoketest();
module.exports = smoketest;