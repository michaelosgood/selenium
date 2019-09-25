let firefoxStgIndependents = require('../pec-tests/firefox_stg_independents.js');
let firefoxStgAdmins = require('../pec-tests/firefox_stg_admins.js');

(async function stgSmoketest() { 
    try {
        await firefoxStgIndependents();
        await firefoxstgAdmins();
    } catch (error) {
        throw error;
    }
})();