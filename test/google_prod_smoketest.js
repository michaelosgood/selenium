let googleProdIndependents = require('../pec-tests/google_prod_independents.js');
let googleProdAdmins = require('../pec-tests/google_prod_admins.js');
let googleProdPtProfiles = require('../pec-tests/google_prod_patient_profiles.js');

(async function prodSmoketest() { 
    try {
        await googleProdAdmins();
        await googleProdIndependents();
        await googleProdPtProfiles();
    } catch (error) {
        throw error;
    }
})();