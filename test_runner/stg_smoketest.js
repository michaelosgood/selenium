let admin_test = require('../tests/internal_admin/admin.js');
let pt_list_test = require('../tests/independents/pt_list.js');
let pt_profile_test = require('../tests/independents/pt_profile.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function stgSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Smoketest Started at: " + start);
        await admin_test();
        await pt_list_test();
        await pt_profile_test();

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