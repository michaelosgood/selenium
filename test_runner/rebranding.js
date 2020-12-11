let googleStgRebrandingIndependents = require('../tests/google_stg_rebranding_independents.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function stgSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Smoketest Started at: " + start);
        await googleStgRebrandingIndependents();

    } catch (error) {
        throw error;
    }
    finally {
        end = new Date();
        endTime = new Date().getTime();
        console.log("Smoketest Completed at: " + end);
        console.log("Smoketest total time = " + ((endTime - startTime )/1000) + " seconds");
      }
})();