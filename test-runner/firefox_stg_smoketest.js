let firefoxStgAdmins = require('../tests/firefox_stg_admins.js');
let firefoxStgIndependents = require('../tests/firefox_stg_independents.js');
let firefoxStgPtProfiles = require('../tests/firefox_stg_pt_profiles.js');
let firefoxStgChainPartner = require('../tests/firefox_stg_chain_partner.js');
let firefoxStgChainUser = require('../tests/firefox_stg_chain_user.js');
let firefoxStgPublic = require('../tests/firefox_stg_public.js');

(async function stgSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        await firefoxStgAdmins();
        await firefoxStgIndependents();
        await firefoxStgPtProfiles();
        await firefoxStgChainPartner();
        await firefoxStgChainUser();
        await firefoxStgPublic()
    } catch (error) {
        throw error;
    }
    finally {
    let endTime = new Date();
    console.log("Smoke Test Completed at: " + endTime);
    }
})();