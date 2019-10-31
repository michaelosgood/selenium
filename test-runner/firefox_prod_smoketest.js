let firefoxProdIndependents = require('../pec-tests/firefox_prod_independents.js');
let firefoxProdAdmins = require('../pec-tests/firefox_prod_admins.js');

(async function prodSmoketest() { 
    try {
        await firefoxProdIndependents();
        await firefoxProdAdmins();
    } catch (error) {
        throw error;
    }
})();