const {Builder, By, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require('assert');

describe('Async Example', function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('example', async function() {
    await driver.get(environment.company);
    await driver.wait(until.titleIs('Company | PrescribeWellness'), 30000);
  });
});