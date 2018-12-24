// Updated Test
const webdriver = require("selenium-webdriver");
let environment = require('./environment.js');
const { expect } = require('chai');

describe('Get Title Test', function() {
    this.timeout(30000);
    let driver;

    before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function() {
        driver.quit();
    });

    it('should go to https://www.prescribewellness.com and check the title', async () => {
        await driver.get(environment.public);   
        const title = await driver.getTitle();

        expect(title).to.equal('Home | PrescribeWellness');
        
    });
});