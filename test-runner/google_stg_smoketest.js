let googleStgIndependents = require('../pec-tests/google_stg_independents.js');
let googleStgAdmins = require('../pec-tests/google_stg_admins.js');
let googleStgPtProfiles = require('../pec-tests/google_stg_patient_profiles.js');
let googleStgPublic = requre('../pec-tests/google_stg_public.js');

(async function stgSmoketest() { 
    try {
        await googleStgAdmins();
        await googleStgIndependents();
        await googleStgPtProfiles();
        await googleStgPublic();
    } catch (error) {
        throw error;
    }
})();