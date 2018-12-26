const {Builder, By, Key, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();

describe('Ex2 Test', function() {

  it('User can go to WWW Page', function () {
    driver.get('https://www.prescribewellness.com/');
    driver.getTitle().then(function(title) {
      assert.equal(title, "Home | PrescribeWellness");
    })
  })
})