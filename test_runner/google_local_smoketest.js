let googleLocalIndependents = require('../tests/google_local_independents.js');
let googleLocalAdmins = require('../tests/google_local_admins.js');
let googleLocalPtProfiles = require('../tests/google_local_patient_profiles.js');
let googleLocalPartnerPartner = require('../tests/google_local_partner_partner.js');
let googleLocalChainPartner = require('../tests/google_local_chain_partner.js');
let googleLocalChainUserA = require("../tests/google_local_chain_user_a.js");
let googleLocalChainUserB = require("../tests/google_local_chain_user_b.js");
let googleLocalPublic = require('../tests/google_local_public.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function localSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Smoketest Started at: " + start);
        await googleLocalAdmins();
        await googleLocalIndependents();
        await googleLocalPtProfiles();
        await googleLocalPartnerPartner();
        await googleLocalChainPartner();
        await googleLocalChainUserA();
        await googleLocalChainUserB();
        await googleLocalPublic();
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