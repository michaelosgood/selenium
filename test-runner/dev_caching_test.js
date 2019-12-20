let googleDevCache = require("../tests/google_dev_cache.js");
let startTime = new Date();
let endTime = new Date();

(async function devCachetest() { 
    try {
        console.log("Caching Test Started at: " + startTime);
        await googleDevCache();
    } catch (error) {
        throw error;
    }
    finally {
        console.log("Caching Test Completed at: " + endTime);
      }
})();