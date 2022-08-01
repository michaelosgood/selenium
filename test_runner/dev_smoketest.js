let admin_test = require('../tests/internal_admin/aws_dev_admin.js');
let pt_list_test = require('../tests/pharmacies/independents/aws_dev_pt_list.js');
let pt_profile_test = require('../tests/pharmacies/independents/aws_dev_pt_profile.js');
let psao_partner_test = require('../tests/partner_admin/psao/aws_dev_dashboard.js');
let chain_partner_test = require('../tests/partner_admin/chain/aws_dev_dashboard.js');
let chain_pt_list_test = require('../tests/pharmacies/chains/aws_dev_pt_list.js');
let startTime ;
let start ;
let endTime ;
let end ;

(async function awsDevSmoketest() { 
    try {
        start = new Date();
        startTime = new Date().getTime();
        console.log("AWS Dev Smoketest Started at: " + start);
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
        console.log("AWS Smoketest Completed at: " + end);
        console.log("AWS Smoketest Total Time = " + (((endTime - startTime )/1000)/60) + " minutes");
      }
})();