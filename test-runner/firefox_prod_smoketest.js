let firefoxProdAdmins = require('../pec-tests/firefox_prod_admins.js');
let firefoxProdIndependents = require('../pec-tests/firefox_prod_independents.js');
let firefoxProdPtProfiles = require('../pec-tests/firefox_prod_pt_profiles.js');
let firefoxProdPublic = require('../pec-tests/firefox_prod_public.js');

(async function prodSmoketest() { 
    try {
        await firefoxProdAdmins();
        await firefoxProdIndependents();
        await firefoxProdPtProfiles();
        await firefoxProdPublic();
    } catch (error) {
        throw error;
    }
})();