let firefoxStgAdmins = require('../pec-tests/firefox_stg_admins.js');
let firefoxStgIndependents = require('../pec-tests/firefox_stg_independents.js');


(async function stgSmoketest() { 
    try {
        await firefoxstgAdmins();
        await firefoxStgIndependents();
    } catch (error) {
        throw error;
    }
})();