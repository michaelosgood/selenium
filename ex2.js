const {Builder, By, Key, until} = require('selenium-webdriver');
let environment = require('./environment.js');
let assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();


describe('Go to Public Site and Verify Title', function() {

  it('should navigate to WWW Page', function () {
    driver.get(environment.public);
  })
  it('should verify the title displays: "Home | PrescribeWellness"', function() {
    driver.getTitle().then(function(title) {
      assert.equal(title, "Home | PrescribeWellness")
    })
  })
  it('should quit webdriver after verifying title', function() {
    driver.quit();
  })
})