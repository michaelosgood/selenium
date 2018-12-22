// Updated Test
const webdriver = require("selenium-webdriver");
const { expect } = require('chai');

describe('Get Title Test', function() {
    this.timeout(30000);
    var driver;

    before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function() {
        driver.quit();
    });

    it('should go to https://www.prescribewellness.com and check the title', async () => {
        await driver.get('https://www.prescribewellness.com');   
        const title = await driver.getTitle();

        expect(title).to.equal('Home | PrescribeWellness');
        return title;
    });
   
 
});