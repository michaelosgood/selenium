let firefoxProdAdmins = require('../tests/firefox_prod_admins.js');
let firefoxProdIndependents = require('../tests/firefox_prod_independents.js');
let firefoxProdPtProfiles = require('../tests/firefox_prod_pt_profiles.js');
let firefoxProdChainPartner = require('../tests/firefox_prod_chain_partner.js');
let firefoxProdChainUserA = require('../tests/firefox_prod_chain_user_a.js');
let firefoxProdChainUserB = require('../tests/firefox_prod_chain_user_b.js');
let firefoxProdPublic = require('../tests/firefox_prod_public.js');

(async function prodSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        await firefoxProdAdmins();
        await firefoxProdIndependents();
        await firefoxProdPtProfiles();
        await firefoxProdChainPartner();
        await firefoxProdChainUserA();
        await firefoxProdChainUserB();
        await firefoxProdPublic();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime);
    }
})();