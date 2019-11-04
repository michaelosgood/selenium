let firefoxProdIndependents = require('../pec-tests/firefox_prod_independents.js');
let firefoxProdAdmins = require('../pec-tests/firefox_prod_admins.js');
let firefoxProdPublic = require('../pec-tests/firefox_prod_public.js');

(async function prodSmoketest() { 
    try {
        await firefoxProdIndependents();
        await firefoxProdAdmins();
        await firefoxProdPublic();
    } catch (error) {
        throw error;
    }
})();