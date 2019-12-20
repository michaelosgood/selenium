let googleDevIndependents = require('../tests/google_dev_independents.js');
let googleDevAdmins = require('../tests/google_dev_admins.js');
let googleDevPtProfiles = require('../tests/google_dev_patient_profiles.js');
let googleDevChainPartner = require('../tests/google_dev_chain_partner.js');
let googleDevChainUser = require("../tests/google_dev_chain_user.js");
let googleDevPublic = require('../tests/google_dev_public.js');
let date = new Date();

(async function devSmoketest() { 
    try {
        console.log("Smoke Test Started at: " + date);
        await googleDevAdmins();
        await googleDevIndependents();
        await googleDevPtProfiles();
        await googleDevChainPartner();
        await googleDevChainUser();
        await googleDevPublic();
    } catch (error) {
        throw error;
    }
    finally {
        console.log("Smoke Test Completed at: " + date);
      }
})();