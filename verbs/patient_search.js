const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('../credentials.js');
let environment = require('../environment.js');
let assert = require("chai").assert;

const patientSearch = async function() {
    try {
        let driver = await new Builder().forBrowser('chrome').build();
        // Use magnifying glass to search for 'Allen' and click on name
        await driver.findElement(By.className('fa-search')).click();
        console.log("Clicked on the search icon");
        await driver.findElement(By.className('input flex mb0 field SearchBar_searchInput_3xheg')).sendKeys('Allen');
        console.log("Searched for Allen");
        await driver.findElement(By.className('input flex mb0 field SearchBar_searchInput_3xheg')).click();
        await driver.sleep(3000); // Wait for page to load
        await driver.findElement(By.className('pc-btn SearchBar_searchButton_1DHpv')).click();
        console.log("Clicked on 'Search' button");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.className('SearchBar_resultItem__bolder_1jHZM')).click();
        await driver.sleep(6000); // Wait for page to load
    }

    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Completed patient search");
    }
};
module.exports = patientSearch; 