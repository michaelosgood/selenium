let googleProdIndependents = require('../tests/google_prod_independents.js');
let googleProdAdmins = require('../tests/google_prod_admins.js');
let googleProdPtProfiles = require('../tests/google_prod_patient_profiles.js');
let googleProdPartnerPartner = require('../tests/google_prod_partner_partner.js');
let googleProdChainPartner = require('../tests/google_prod_chain_partner.js');
let googleProdChainUserA = require('../tests/google_prod_chain_user_a.js');
let googleProdChainUserB = require('../tests/google_prod_chain_user_b.js');
let googleProdPublic = require('../tests/google_prod_public.js');

(async function prodSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
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
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime);
      }
})();