let googleDevCache = require("../tests/google_dev_cache.js");
let googleStgCache = require("../tests/google_stg_cache.js");
let googleProdCache = require("../tests/google_prod_cache.js");

(async function cachingTest() { 
    try {
        let startTime = new Date();
        console.log("Caching Test Started at: " + startTime);
        // await googleDevCache();
        // await googleStgCache();
        await googleProdCache();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Caching Test Completed at: " + endTime);
      }
})();