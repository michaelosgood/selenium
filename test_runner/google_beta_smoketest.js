let googleBetaAdmins = require('../tests/google_beta_admins.js')
let googleBetaIndependents = require('../tests/google_beta_independents.js');
let googleBetaPtProfiles = require('../tests/google_beta_patient_profiles.js');
let googleBetaChainPartner = require('../tests/google_beta_chain_partner.js');
let googleBetaChainUserA = require('../tests/google_beta_chain_user_a.js');
let googleBetaChainUserB = require('../tests/google_beta_chain_user_b.js');

(async function betaSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        await googleBetaAdmins();
        await googleBetaIndependents();
        await googleBetaPtProfiles();
        await googleBetaChainPartner();
        await googleBetaChainUserA();
        await googleBetaChainUserB();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime);
      }
})();