let googleStgIndependents = require('../tests/google_stg_independents.js');
let googleStgAdmins = require('../tests/google_stg_admins.js');
let googleStgPtProfiles = require('../tests/google_stg_patient_profiles.js');
let googleStgPartnerPartner = require('../tests/google_stg_partner_partner.js');
let googleStgChainPartner = require('../tests/google_stg_chain_partner.js');
let googleStgChainUserA = require('../tests/google_stg_chain_user_a.js');
let googleStgChainUserB = require('../tests/google_stg_chain_user_b.js');
let googleStgRebrandingIndependents = require('../tests/google_stg_rebranding_independents.js');
let googleStgPublic = require('../tests/google_stg_public.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function stgSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Smoketest Started at: " + start);
        await googleStgAdmins();
        await googleStgIndependents();
        await googleStgPtProfiles();
        await googleStgPartnerPartner();
        await googleStgChainPartner();
        await googleStgChainUserA();
        await googleStgChainUserB();
        await googleStgRebrandingIndependents();
        // await googleStgPublic(); 
    } catch (error) {
        throw error;
    }
    finally {
        end = new Date();
        endTime = new Date().getTime();
        console.log("Smoketest Completed at: " + end);
        console.log("Smoketest total time = " + ((endTime - startTime )/1000) + " seconds");
      }
})();