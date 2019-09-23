let googleProdIndependents = require('../pec-tests/google_prod_independents.js');
let googleProdAdmins = require('../pec-tests/google_prod_admins.js');

(async function stgSmoketest() { 
    try {
        await googleProdIndependents();
        await googleProdAdmins();
    } catch (error) {
        throw error;
    }
})();