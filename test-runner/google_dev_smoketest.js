let googleDevIndependents = require('../tests/google_dev_independents.js');
let googleDevAdmins = require('../tests/google_dev_admins.js');
let googleDevPtProfiles = require('../tests/google_dev_patient_profiles.js');
let googleDevChainPartner = require('../tests/google_dev_chain_partner.js');
let googleDevChainUserA = require("../tests/google_dev_chain_user_a.js");
let googleDevChainUserB = require("../tests/google_dev_chain_user_b.js");
let googleDevPublic = require('../tests/google_dev_public.js');

(async function devSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        // await googleDevAdmins();
        // await googleDevIndependents();
        // await googleDevPtProfiles();
        // await googleDevChainPartner();
        await googleDevChainUserA();
        await googleDevChainUserB();
        // await googleDevPublic();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime);
      }
})();