var webdriver = require("selenium-webdriver");
var mocha = require('mocha');
var assert = require("chai").assert;

    describe("Get Title for www.prescribewellness.com/business/company", function() {
        this.timeout(30000);
        var driver;

        before(function() {
            driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        });

        after(function() {
            driver.quit();
        });

        it("should open the company page within the WWW site", function() {
            driver.get("https://www.prescribewellness.com/business/company");
        });

        it("The title is 'Company | PrescribeWellness'", function() {
            // Since we want the title from the page, we need to manually handle the Promise
            driver.getTitle().then(function(title) {
                assert.equal(title, "Company | PrescribeWellness");
            });
        });
    });