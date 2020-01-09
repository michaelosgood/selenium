let googleStgSmoketest = require('../tests/google_stg_smoketest.js');
let firefoxStgSmoketest = require('../tests/firefox_stg_smoketest.js');

(async function stgSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        await googleStgSmoketest();
        await firefoxStgSmoketest();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime); 
    }
})();