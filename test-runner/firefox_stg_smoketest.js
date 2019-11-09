let firefoxStgAdmins = require('../tests/firefox_stg_admins.js');
let firefoxStgIndependents = require('../tests/firefox_stg_independents.js');
let firefoxStgPtProfiles = require('../tests/firefox_stg_pt_profiles.js');
let firefoxStgPublic = require('../tests/firefox_stg_public.js');


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