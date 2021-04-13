let carl = {};

// Carl Allen's pt profile in PW Community (Account 129634)
carl.dev = "https://dev-web.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88&pharmacyId=129634";
carl.stg = "https://webstg.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88&pharmacyId=129634";
carl.prod = "https://web.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88&pharmacyId=129634";
carl.beta = "https://beta-web.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88&pharmacyId=129634";

carl.dev_medsync = "https://dev-web.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88";
carl.stg_medsync = "https://webstg.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88";
carl.prod_medsync = "https://web.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88";
carl.beta_medsync = "https://beta-web.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88";

carl.title = "Patient - Profile - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.p_title = "Patient - Programs - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.meds_title = "Med Sync: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.mw_title = "Patient - MedWise - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.m_title = "Patient - Medicare - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.v_title = "Vaccinations - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.ec_title = "eCare Plans - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.cc_title = "Care Campaigns - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.c_title = "Patient - Profile - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
carl.l_title = "Patient - Timer Log - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";

// Carl Allen's pt profile in Sample Chain Store 1 (Account 2043550027)
carl.dev_chain = "https://dev-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
carl.stg_chain = "https://webstg.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
carl.prod_chain_link = "https://web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
carl.beta_chain_link = "https://beta-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";

// In All pt profiles
carl.o = "Overview";
carl.p = "Programs";
carl.meds = "Medications";
carl.prm = "Patient-Reported Medication";
carl.ma = "Medication Allergies";
carl.mh = "Medication History";
carl.mtr = "Med Time Reminders";
carl.mw = "MedWise™";
carl.m = "Medicare";
carl.v = "Vaccinations";
carl.ec = "eCare Plans";
carl.ec_ca_path = "//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']";
carl.ec_bb_path = "//a[@href = '/Patient/PrescribeCare?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true']";
carl.cc = "Care Campaigns";
carl.c = "Communications";
carl.fh = "Fax History";
carl.l = "Log";

module.exports = carl;