let googleProdIndependents = require('../pec-tests/google_prod_independents.js');
let googleProdAdmins = require('../pec-tests/google_prod_admins.js');
let googleProdPtProfiles = require('../pec-tests/google_prod_patient_profiles.js');
let googleProdPublic = require('../pec-tests/google_prod_public.js');

(async function prodSmoketest() { 
    try {
        await googleProdAdmins();
        await googleProdIndependents();
        await googleProdPtProfiles();
        await googleProdPublic();
    } catch (error) {
        throw error;
    }
})();