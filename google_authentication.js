// Updated Test
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Google Authentication Test', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to https://web.prescribewellness.com and check the title', async () => {
        await driver.get('https://web.prescribewellness.com');
        await driver.sleep(20000);
        await driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
        await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#');
        await driver.findElement(By.id('login')).click();
       
        const title = await driver.getTitle();

        expect(title).to.equal('Pharmacy Dashboard - Pharmacy Portal  - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2');
    });

    after(async () => driver.quit());
});