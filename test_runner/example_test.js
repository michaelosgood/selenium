let testOne = require("../tests/test_one.js");
let testTwo = require("../tests/test_two.js");
let testThree = require("../tests/test_three.js");

(async function exampleTest() { 
    try {
        let startTime = new Date();
        console.log("Example Test started at: " + startTime);
        await testOne();
        await testTwo();
        await testThree();
    } catch (error) {
        throw error;
    }
    finally {
        let endTime = new Date();
        console.log("Example Test completed at: " + endTime);
      }
})();