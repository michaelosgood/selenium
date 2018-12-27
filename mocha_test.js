const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('MochaTest', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to www.google.com/ncr, search for "cheese", and verify the title', async () => {
        await driver.get('https://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.RETURN);
        const title = await driver.getTitle();

        expect(title).to.equal('cheese - Google Search');
        await console.log("The title is: 'cheese - Google Search'");
    });

    after(async () => driver.quit());
});