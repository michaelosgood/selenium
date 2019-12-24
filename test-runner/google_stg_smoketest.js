let googleStgIndependents = require('../tests/google_stg_independents.js');
let googleStgAdmins = require('../tests/google_stg_admins.js');
let googleStgPtProfiles = require('../tests/google_stg_patient_profiles.js');
let googleStgChainPartner = require('../tests/google_stg_chain_partner.js');
let googleStgChainUser = require('../tests/google_stg_chain_user.js');
let googleStgPublic = require('../tests/google_stg_public.js');

(async function stgSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        await googleStgAdmins();
        await googleStgIndependents();
        await googleStgPtProfiles();
        await googleStgChainPartner();
        await googleStgChainUser();
        await googleStgPublic();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime);
      }
})();