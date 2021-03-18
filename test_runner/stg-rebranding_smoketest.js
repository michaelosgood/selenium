let admin_test = require('../tests/internal_admin/admin.js');
let pt_list_test = require('../tests/pharmacies/independents/pt_list.js');
let pt_profile_test = require('../tests/pharmacies/independents/pt_profile.js');
let psao_partner_test = require('../tests/partner_admin/psao/dashboard.js');
let chain_partner_test = require('../tests/partner_admin/chain/dashboard.js');
let chain_pt_list_test = require('../tests/pharmacies/chains/pt_list.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function stgSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("Rebranding Smoketest Started at: " + start);
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
        console.log("Rebranding Smoketest Completed at: " + end);
        console.log("Rebranding Smoketest total time = " + ((endTime - startTime )/1000) + " seconds");
      }
})();