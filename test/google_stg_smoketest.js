let googleStgIndependents = require('../pec-tests/google_stg_independents.js');
let googleStgAdmins = require('../pec-tests/google_stg_admins.js');
let googleStgPtProfiles = require('../pec-tests/google_stg_patient_profiles.js');

(async function stgSmoketest() { 
    try {
        await googleStgAdmins();
        await googleStgIndependents();
        await googleStgPtProfiles();
    } catch (error) {
        throw error;
    }
})();