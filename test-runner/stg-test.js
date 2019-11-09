let googleStgSmoketest = require('../tests/google_stg_smoketest.js');
let firefoxStgSmoketest = require('../tests/firefox_stg_smoketest.js');

(async function stgSmoketest() { 
    try {
        await googleStgSmoketest();
        await firefoxStgSmoketest();
    } catch (error) {
        throw error;
    }
})();