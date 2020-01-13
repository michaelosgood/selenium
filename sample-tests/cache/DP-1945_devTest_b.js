const {Builder, By, Key, until} = require('selenium-webdriver');
let pt_search = require('../../components/patient_search.js');
let credentials = require('../../credentials.js');
let environment = require('../../environment.js');

(async function chainSampleSignIn() {
  let driver = await new Builder().forBrowser('chrome').build();
    try {
        console.log("Initiating DP-1945 B Test in Chrome");
        await driver.get(environment.dev);
        console.log("Went to dev");
        await driver.findElement(By.id('mbr-uid')).sendKeys(credentials.chainPartner_user);
        console.log("Entered username");
        await driver.findElement(By.id('mbr-pwd')).sendKeys(credentials.chainPartner_password, Key.RETURN);
        console.log("Entered password and clicked 'Enter'");
        await driver.sleep(5000); // wait for page to load
        console.log("Waited 5 Seconds for page to load");

        // Use magnifying glass to search for 'Bawell' and click on name
        await driver.findElement(By.className(pt_search.search)).click();
        console.log("Clicked on the search icon");
        await driver.findElement(By.className(pt_search.input)).sendKeys('Bagwell');
        console.log("Searched for Bagwell");
        await driver.findElement(By.className(pt_search.input)).click();
        await driver.sleep(3000); // Wait for page to load
        await driver.findElement(By.className(pt_search.button)).click();
        console.log("Clicked on 'Search' button");
        await driver.sleep(6000); // Wait for page to load
        await driver.findElement(By.className(pt_search.result)).click();
        await driver.sleep(6000); // Wait for page to load

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
        
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("DP-1945 B Test has concluded");
        await driver.quit()
    }
})();