let googleProdIndependents = require('../tests/google_prod_independents.js');
let googleProdAdmins = require('../tests/google_prod_admins.js');
let googleProdPtProfiles = require('../tests/google_prod_patient_profiles.js');
let googleProdChainPartner = require('../tests/google_prod_chain_partner.js');
let googleProdPublic = require('../tests/google_prod_public.js');

(async function prodSmoketest() { 
    try {
        await googleProdAdmins();
        await googleProdIndependents();
        await googleProdPtProfiles();
        await googleProdChainPartner();
        await googleProdPublic();
    } catch (error) {
        throw error;
    }
})();