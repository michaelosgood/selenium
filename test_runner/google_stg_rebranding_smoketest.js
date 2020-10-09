let googleStgRebrandingIndependentss = require('../tests/google_stg_rebranding_independents.js');


(async function stgSmoketest() { 
    try {
        let startTime = new Date();
        console.log("Smoke Test Started at: " + startTime);
        await googleStgRebrandingIndependentss();

    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Smoke Test Completed at: " + endTime);
      }
})();