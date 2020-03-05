const {Builder, By, Key, until} = require('selenium-webdriver');
let titles = require('../components/titles.js');
let pt_profile = require('../components/patient_profile.js');
let credentials = require('../credentials.js');
let environment = require('../environment.js');

const firefoxStgChainUserB = async function() {
  let driver = await new Builder().forBrowser('firefox').build();
    try {
        console.log("Starting Chain User Patient Profile Test");
        await driver.get(environment.stg);
        console.log("Went to Staging");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.chainSample_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.chainSample_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000); // wait for page to load
        console.log("Waited 5 Seconds for page to load");

        // Go to Patient Profile
        await driver.get(pt_profile.stg_chain_link);
        await console.log("Pulled up the patient profile");
        await driver.sleep(5000); // wait for page to load
        console.log("Waited 5 Seconds for page to load");

        // Click on the Overview tab
        await driver.findElement(By.linkText('Overview')).click();
        console.log("Clicked on Overview tab");
        await driver.sleep(5000); // wait for page to load
        console.log("Waited 5 Seconds for page to load");

       // Click on the Programs tab
       await driver.findElement(By.linkText('Programs')).click();
       console.log("Clicked on Programs sub-tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");
       
       // Click on the 'Medications' tab
       await driver.findElement(By.linkText('Medications')).click();
       console.log("Clicked on Medication tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       await driver.findElement(By.linkText('Patient-Reported Medication')).click();
       console.log("Clicked on Patient-Reported Medication sub-tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       await driver.findElement(By.linkText('Medication Allergies')).click();
       console.log("Clicked on Medication Allergies sub-tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       await driver.findElement(By.linkText('Medication History')).click();
       console.log("Clicked on Medication History sub-tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       await driver.findElement(By.linkText('Med Time Reminders')).click();
       console.log("Clicked on Med Time Reminders sub-tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Click on the Medicare tab
       await driver.findElement(By.linkText('Medicare')).click();
       console.log("Clicked on Medicare tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Click on Vaccines tab
       await driver.findElement(By.linkText('Vaccines')).click();
       console.log("Clicked on Vaccines tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Click on PrescribeCare tab
       await driver.findElement(By.xpath("//a[@href = '/Patient/PrescribeCare?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true']")).click();
       console.log("Clicked on PrescribeCare tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Click on Care Campaigns tab
       await driver.findElement(By.linkText('Care Campaigns')).click();
       console.log("Clicked on Care Campaigns tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Click on Communications tab and respective sub-tabs
       await driver.findElement(By.linkText('Communications')).click();
       console.log("Clicked on Communications tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       await driver.findElement(By.linkText('Fax History')).click();
       console.log("Clicked on Fax History sub-tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Click on Log tab
       await driver.findElement(By.linkText('Log')).click();
       console.log("Clicked on Log tab");
       await driver.sleep(5000); // wait for page to load
       console.log("Waited 5 Seconds for page to load");

       // Logout
       await driver.findElement(By.id('pwTopGearIcon')).click();
       console.log("Clicked on the gear icon");
       await driver.findElement(By.className('btn-link')).click();
       console.log("Selected 'Logout'");

    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Chain User Patient Profile Test has concluded");
        await driver.quit()
    };
}
module.exports = firefoxStgChainUserB;