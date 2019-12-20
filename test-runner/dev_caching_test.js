let googleDevCache = require("../tests/google_dev_cache.js");

(async function devCachetest() { 
    try {
        let startTime = new Date();
        console.log("Caching Test Started at: " + startTime);
        await googleDevCache();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Caching Test Completed at: " + endTime);
      }
})();