let admin_test = require('../tests/internal_admin/beta_admin.js');
let pt_list_test = require('../tests/pharmacies/independents/beta_pt_list.js');
let pt_profile_test = require('../tests/pharmacies/independents/beta_pt_profile.js');
let psao_partner_test = require('../tests/partner_admin/psao/beta_dashboard.js');
let chain_partner_test = require('../tests/partner_admin/chain/beta_dashboard.js');
let chain_pt_list_test = require('../tests/pharmacies/chains/beta_pt_list.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function betaSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Beta Smoketest Started at: " + start);
        await admin_test();
        await pt_list_test();
        await pt_profile_test();
        await psao_partner_test();
        await chain_partner_test();
        await chain_pt_list_test();
    } catch (error) {
        throw error;
    }
    finally {
        end = new Date();
        endTime = new Date().getTime();
        console.log("Beta Smoketest Completed at: " + end);
        console.log("Beta Smoketest Total Time = " + (((endTime - startTime )/1000)/60) + " minutes");
      }
})();