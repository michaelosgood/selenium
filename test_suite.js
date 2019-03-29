const {Builder, By, Key, actions, until} = require('selenium-webdriver');
let credentials = require('./credentials.js');
let environment = require('./environment.js');
let assert = require("chai").assert;
// let driver = new Builder().forBrowser('chrome').build();


describe("Test Suite 1", async function(){
    
    before(async function(){
        try {
            console.log("BEFORE");
        } catch(error) {
            console.error(error);
        }
    });

    after(async function(){
        try {
            console.log("AFTER");
        } catch(error) {
            console.error(error);
        }
    });
    
    
    beforeEach(async function(){
        try {
            console.log("BEFORE EACH");
        } catch(error) {
            console.error(error);
        }
    });

    afterEach(async function(){
        try {
            console.log("AFTER EACH");
        } catch(error) {
            console.error(error);
        }
    });

    it("Test-1", async function(){
        try {
            console.log("TEST 1"); 
        } catch(error) {
            console.error(error);
        }
    });

    it("Test-2", async function(){  
        try {
            console.log("TEST 2");
        } catch(error) {
            console.error(error);
        }
    });
 
    it("Test-3", async function(){  
        try {
            console.log("TEST 3");
        } catch(error) {
            console.error(error);
        }
    });

});