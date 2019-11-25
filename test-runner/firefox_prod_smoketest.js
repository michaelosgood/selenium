let firefoxProdAdmins = require('../tests/firefox_prod_admins.js');
let firefoxProdIndependents = require('../tests/firefox_prod_independents.js');
let firefoxProdPtProfiles = require('../tests/firefox_prod_pt_profiles.js');
let firefoxProdChainPartner = require('../tests/firefox_prod_chain_partner.js');
let firefoxProdPublic = require('../tests/firefox_prod_public.js');

(async function prodSmoketest() { 
    try {
        await firefoxProdAdmins();
        await firefoxProdIndependents();
        await firefoxProdPtProfiles();
        await firefoxProdChainPartner();
        await firefoxProdPublic();
    } catch (error) {
        throw error;
    }
})();