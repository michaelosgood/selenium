let sync = {};

sync.local = "https://localhost:44340/MedSync/MedicationSynchronization";
sync.dev = "https://dev-web.prescribewellness.com/MedSync/MedicationSynchronization";
sync.stg = "https://webstg.prescribewellness.com/MedSync/MedicationSynchronization";
sync.prod = "https://web.prescribewellness.com/MedSync/MedicationSynchronization";
sync.beta = "https://beta-web.prescribewellness.com/MedSync/MedicationSynchronization";
sync.aws = "https://aws-web-staging.prescribewellness.com/MedSync/MedicationSynchronization";

sync.title = "Med Sync: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
sync.chain_title = "Med Sync: Synchronization - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - ChainSample";
sync.not_enrolled = 'Not Enrolled';
sync.enrolled = "Enrolled";
sync.resync = "Resync";
sync.unenrolled = "UnEnrolled";
sync.declined = "Declined";


module.exports = sync; 