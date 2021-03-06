const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let login = require('../gui/components/login.js');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let titles = require('../gui/components/titles.js');
let nav = require('../gui/components/nav.js');
let assert = require("chai").assert;

const testTwo = async function() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Login to User and Verify Title
    console.log("Starting Independent Pharmacy Patient Lists Test");
    await driver.get(environment.stg);
    console.log("Went to Staging");

    // Login to PW Community and Verify Title
    await driver.findElement(By.id(login.id)).sendKeys(credentials.customer_user);
    console.log("Entered username");
    await driver.findElement(By.id(login.pw)).sendKeys(credentials.customer_password, Key.RETURN);
    console.log("Entered password and clicked 'Enter'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });
    
    //  Verify Title for Scheduled tab
    await driver.sleep(4000);
    console.log("Waited 4 seconds");
    await driver.findElement(By.partialLinkText('Scheduled')).click();
    console.log("Clicked on 'Scheduled' tab");
    await driver.sleep(4000);
    console.log("Waited 4 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    //  Verify Title for In Progress tab
    await driver.findElement(By.partialLinkText('In Progress')).click();
    console.log("Clicked on 'In Progress' tab");
    await driver.sleep(6000);
    console.log("Waited 6 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    //  Verify Title for In Progress tab
    await driver.findElement(By.partialLinkText('Not Connected')).click();
    console.log("Clicked on 'Not Connected' tab");
    await driver.sleep(6000);
    console.log("Waited 6 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    // Verify Title for Active Patients page
    await driver.findElement(By.linkText('Active Patients')).click();
    console.log("Clicked on 'Active Patients'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    // Verify Title for Drugs page
    await driver.findElement(By.linkText('Drugs')).click();
    console.log("Clicked on 'Drugs'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    // Verify Title for Physicians page
    await driver.findElement(By.linkText('Physicians')).click();
    console.log("Clicked on 'Physicians'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    // Verify Title for Diseases page
    await driver.findElement(By.linkText('Diseases')).click();
    console.log("Clicked on 'Diseases'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title );
    });

    // Verify Title for Physician Groups page
    await driver.findElement(By.linkText('Physician Groups')).click();
    console.log("Clicked on 'Physician Groups'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function (title) {
        assert.equal(title, titles.independent_dashboard);
        console.log("Asserted title is: " + title);
    });

    // Verify Title for Message Center
    await driver.findElement(By.id(nav.message_center_icon)).click();
    console.log("Clicked on Message Center icon");
    await driver.findElement(By.linkText(nav.message_center)).click();
    console.log("Clicked on Message Center");
    await driver.sleep(5000);
    console.log("Waited 5 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.indedpenent_message_center);
        console.log("Asserted title is: " + title );
    });

    // Verify Title for Clinical Calendar
    await driver.findElement(By.className('fa-calendar')).click();
    console.log("Clicked on the calendar icon");
    await driver.findElement(By.linkText('Clinical Calendar')).click();
    console.log("Selected 'Clinical Calendar' icon");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_clinical_calendar);
        console.log("Asserted title for 'Clinical Calendar' page is: " + title );
    });

    // Verify Title for Social Calendar
    await driver.findElement(By.className('fa-calendar')).click();
    console.log("Clicked on the calendar icon");
    await driver.findElement(By.linkText('Social Calendar')).click();
    console.log("Selected 'Social Calendar' icon");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_clinical_calendar);
        console.log("Asserted title for 'Social Calendar' page is: " + title );
    });

    // Verify Title for Custom Calendar
    await driver.findElement(By.className('fa-calendar')).click();
    console.log("Clicked on the calendar icon");
    await driver.findElement(By.linkText('Custom Calendar')).click();
    console.log("Selected 'Custom Calendar' icon");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_clinical_calendar);
        console.log("Asserted title for 'Social Calendar' page is: " + title );
    });

    // Verify Title for 'Growth' Pt List
    await driver.findElement(By.linkText('Growth')).click();
    console.log("Selected 'Growth'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_growth);
        console.log("Asserted title for 'Growth' page is: " + title );
    });

    // Verify Title for 'StarWellness' Pt List
    await driver.findElement(By.linkText('StarWellness')).click();
    console.log("Selected 'StarWellness'");
    await driver.findElement(By.linkText('Synchronization')).click();
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_starwellness);
        console.log("Asserted title for 'StarWellness Synchronization' page is: " + title );
    });

    // Verify Title for 'VaccineComplete' Pt List
    await driver.findElement(By.linkText('VaccineComplete')).click();
    console.log("Selected 'VaccineComplete'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_vaccines);
        console.log("Asserted title for 'VaccineComplete' page is: " + title );
    });

    // Verify Title for 'PrescribeMedicare' Pt List
    await driver.findElement(By.linkText('PrescribeMedicare')).click();
    console.log("Selected 'PrescribeMedicare'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_pmed);
        console.log("Asserted title for 'PrescribeMedicare' page is: " + title );
    });

    // Verify Title for 'PrescribeCare' Pt List
    await driver.findElement(By.linkText('PrescribeCare')).click();
    console.log("Selected 'PrescribeCare'");
    await driver.sleep(10000);
    console.log("Waited 10 seconds");
    await driver.getTitle().then(function(title) {
        assert.equal(title, titles.independent_pcare);
        console.log("Asserted title for 'PrescribeCare' page is: " + title );
    });

}
catch(err) {
    console.log(err);
}
finally {
    console.log("Test Completed!!\n");
    await driver.quit()
}
};
module.exports = testTwo;