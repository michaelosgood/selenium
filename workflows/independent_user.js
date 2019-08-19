let loginToStaging = require('../verbs/login_staging');
let verifyHomePage = require('../verbs/verify_homepage');

(async function independentUser() { 
    try {
        await loginToStaging();
        await verifyHomePage();
    } catch (error) {
        throw error;
    }
})();