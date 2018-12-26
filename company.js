const {Builder, By, Key, until} = require('selenium-webdriver');
let environment = require('./environment.js');
let assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();


describe('Go to Public Site and Verify Title for the Company page', function() {

  it('should allow users to navigate to: "www.prescribewellness.com/business/company Page"', function () {
    driver.get('https://www.prescribewellness.com/business/company');
  })
  it('should verify the title displays as: "Company | PrescribeWellness"', function() {
    driver.getTitle().then(function(title) {
      assert.equal(title, 'Company | PrescribeWellness');
    })
  })
  it('should quit webdriver after verifying title', function() {
    driver.quit();
  })
})