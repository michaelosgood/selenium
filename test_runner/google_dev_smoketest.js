let googleDevIndependents = require('../tests/google_dev_independents.js');
let googleDevAdmins = require('../tests/google_dev_admins.js');
let googleDevPtProfiles = require('../tests/google_dev_patient_profiles.js');
let googleDevPartnerPartner = require('../tests/google_dev_partner_partner.js');
let googleDevChainPartner = require('../tests/google_dev_chain_partner.js');
let googleDevChainUserA = require("../tests/google_dev_chain_user_a.js");
let googleDevChainUserB = require("../tests/google_dev_chain_user_b.js");
let googleDevPublic = require('../tests/google_dev_public.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function devSmoketest() { 
    try {
        lstart = new Date();
        startTime = new Date().getTime();
        console.log("Smoketest Started at: " + start);
        await googleDevAdmins();
        await googleDevIndependents();
        await googleDevPtProfiles();
        await googleDevPartnerPartner();
        await googleDevChainPartner();
        await googleDevChainUserA();
        await googleDevChainUserB();
        await googleDevPublic();
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