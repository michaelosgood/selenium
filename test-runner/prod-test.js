let googleProdSmoketest = require('../tests/google_prod_smoketest.js');
let firefoxProdSmoketest = require('../tests/firefox_prod_smoketest.js');

(async function prodSmoketest() { 
    try {
        await googleProdSmoketest();
        await firefoxProdSmoketest();
    } catch (error) {
        throw error;
    }
})();