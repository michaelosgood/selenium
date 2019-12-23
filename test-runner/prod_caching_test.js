let googleProdCache = require("../tests/google_stg_cache.js");

(async function prodCacheTest() { 
    try {
        let startTime = new Date();
        console.log("Caching Test Started at: " + startTime);
        await googleProdCache();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Caching Test Completed at: " + endTime);
      }
})();