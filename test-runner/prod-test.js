let googleProdSmoketest = require('../pec-tests/google_prod_smoketest');
let firefoxProdSmoketest = require('../pec-tests/firefox_prod_smoketest');

(async function prodSmoketest() { 
    try {
        await googleProdSmoketest();
        await firefoxProdSmoketest();
    } catch (error) {
        throw error;
    }
})();