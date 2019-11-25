let googleStgIndependents = require('../tests/google_stg_independents.js');
let googleStgAdmins = require('../tests/google_stg_admins.js');
let googleStgPtProfiles = require('../tests/google_stg_patient_profiles.js');
let googleStgChainPartner = require('../tests/google_stg_chain_partner.js');
let googleStgPublic = require('../tests/google_stg_public.js');

(async function stgSmoketest() { 
    try {
        await googleStgAdmins();
        await googleStgIndependents();
        await googleStgPtProfiles();
        await googleStgChainPartner();
        await googleStgPublic();
    } catch (error) {
        throw error;
    }
})();