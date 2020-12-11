let googleProdIndependents = require('../tests/google_prod_independents.js');
let googleProdAdmins = require('../tests/google_prod_admins.js');
let googleProdPtProfiles = require('../tests/google_prod_patient_profiles.js');
let googleProdPartnerPartner = require('../tests/google_prod_partner_partner.js');
let googleProdChainPartner = require('../tests/google_prod_chain_partner.js');
let googleProdChainUserA = require('../tests/google_prod_chain_user_a.js');
let googleProdChainUserB = require('../tests/google_prod_chain_user_b.js');
let googleProdPublic = require('../tests/google_prod_public.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function prodSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Smoketest Started at: " + start);
        await googleProdAdmins();
        await googleProdIndependents();
        await googleProdPtProfiles();
        await googleProdPartnerPartner();
        await googleProdChainPartner();
        await googleProdChainUserA();
        await googleProdChainUserB();
        await googleProdPublic();
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