// Updated Test
const { Builder, By, Key, until } = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
const { expect } = require('chai');

describe('Google Authentication Test', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to https://web.prescribewellness.com and check the title', async () => {
        await driver.get(environment.prod);
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.customer_user);
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.customer_password, Key.RETURN);
       
        const title = await driver.getTitle();

        expect(title).to.equal('Pharmacy Dashboard - Pharmacy Portal  - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2');
    });

    // after(async () => driver.quit());

});

// Updated Updated Tests
// const {Builder, By, until} = require('selenium-webdriver');

// (async function example() {
//     const driver = await new Builder().forBrowser('chrome').build();

//     try {
//         await driver.get('https://web.prescribewellness.com');
//         await driver.findElement(By.id('mbr-uid')).sendKeys('h3n2@prescribewellness.com');
//         await driver.findElement(By.id('mbr-pwd')).sendKeys('Influenza123!#', Key.RETURN);
//         await driver.wait(until.titleIs('Pharmacy Dashboard - Pharmacy Portal  - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - H3N2'));
//     } finally {
//         await driver.quit();
//     }
// })();