let firefoxStgAdmins = require('../pec-tests/firefox_stg_admins.js');
let firefoxStgIndependents = require('../pec-tests/firefox_stg_independents.js');
let firefoxStgPtProfiles = require('../pec-tests/firefox_stg_pt_profiles.js');
let firefoxStgPublic = require('../pec-tests/firefox_stg_public.js');


(async function stgSmoketest() { 
    try {
        await firefoxStgAdmins();
        await firefoxStgIndependents();
        await firefoxStgPtProfiles();
        await firefoxStgPublic()
    } catch (error) {
        throw error;
    }
})();