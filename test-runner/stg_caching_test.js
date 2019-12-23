let googleStgCache = require("../tests/google_stg_cache.js");

(async function stgCacheTest() { 
    try {
        let startTime = new Date();
        console.log("Caching Test Started at: " + startTime);
        await googleStgCache();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Caching Test Completed at: " + endTime);
      }
})();