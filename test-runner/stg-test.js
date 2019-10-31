let googleStgSmoketest = require('../pec-tests/google_stg_smoketest');
let firefoxStgSmoketest = require('../pec-tests/firefox_stg_smoketest');

(async function stgSmoketest() { 
    try {
        await googleStgSmoketest();
        await firefoxStgSmoketest();
    } catch (error) {
        throw error;
    }
})();