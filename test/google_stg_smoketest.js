let googleStgIndependents = require('../pec-tests/google_stg_independents.js');
let googleStgAdmins = require('../pec-tests/google_stg_admins.js');

(async function prodSmoketest() { 
    try {
        await googleStgIndependents();
        await googleStgAdmins();
    } catch (error) {
        throw error;
    }
})();