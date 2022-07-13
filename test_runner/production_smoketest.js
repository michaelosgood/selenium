let admin_test = require('../tests/internal_admin/prod_admin.js');
let pt_list_test = require('../tests/pharmacies/independents/prod_pt_list.js');
let pt_profile_test = require('../tests/pharmacies/independents/prod_pt_profile.js');
let psao_partner_test = require('../tests/partner_admin/psao/prod_dashboard.js');
let chain_partner_test = require('../tests/partner_admin/chain/prod_dashboard.js');
let chain_pt_list_test = require('../tests/pharmacies/chains/prod_pt_list.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function prodSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Production Smoketest Started at: " + start);
       // await admin_test();
       // await pt_list_test();
        await pt_profile_test();
        await psao_partner_test();
        // await chain_partner_test();
        // await chain_pt_list_test();
    } catch (error) {
        throw error;
    }
    finally {
        end = new Date();
        endTime = new Date().getTime();
        console.log("Production Smoketest Completed at: " + end);
        console.log("Production Smoketest Total Time = " + (((endTime - startTime )/1000)/60) + " minutes");
      }
})();